import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as types from './types';
import * as API from '../services/api';

function* getPostsWorker() {
  try {
    yield put({ type: types.FETCH_POSTS_START });
    const payload = yield call(API.fetchPosts);
    yield put({ type: types.FETCH_POSTS_SUCCESS, payload: { posts: payload } });
  } catch (err) {
    yield put({ type: types.FETCH_POSTS_ERROR, payload: { error: err } });
    console.log(err);
  }
}

function* getOnePostWorker(action) {
  try {
    yield put({ type: types.FETCH_POST_START });
    const payload = yield call(API.fetchPostById, action.payload.id);
    yield put({ type: types.FETCH_POST_SUCCESS, payload: { post: payload } });
  } catch (err) {
    yield put({ type: types.FETCH_POST_ERROR, payload: { error: err } });
    console.log(err);
  }
}

function* createPostWorker(action) {
  try {
    yield put({ type: types.CREATE_POST_START });
    const payload = yield call(API.createPost, action.payload.post);
    console.log(payload);

    yield put({ type: types.CREATE_POST_SUCCESS, payload: { post: payload } });
  } catch (err) {
    yield put({ type: types.CREATE_POST_ERROR, payload: { error: err } });
    console.log(err);
  }
}

function* getPostsWatcher() {
  yield takeEvery(types.FETCH_POSTS, getPostsWorker);
}

function* getOnePostWatcher() {
  yield takeEvery(types.FETCH_POST, getOnePostWorker);
}

function* createPostWatcher() {
  yield takeEvery(types.CREATE_POST, createPostWorker);
}

export default function* rootSaga() {
  yield all([getPostsWatcher(), getOnePostWatcher(), createPostWatcher()]);
}
