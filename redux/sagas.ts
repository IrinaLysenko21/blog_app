import { all, takeEvery, put, call } from 'redux-saga/effects';
// import { Notyf } from 'notyf';
import * as types from './types';
import * as API from '../services/api';

// const notyf = new Notyf();

function* getPostsWorker() {
  try {
    yield put({ type: types.FETCH_POSTS_START });
    const payload = yield call(API.fetchPosts);
    yield put({ type: types.FETCH_POSTS_SUCCESS, payload: { posts: payload } });
  } catch (err) {
    yield put({ type: types.FETCH_POSTS_ERROR, payload: { error: err } });
    // notyf.error('Error while loading a posts');
    console.log(err);
  }
}

function* getOnePostWorker(action) {
  try {
    console.log(action.payload.id);

    yield put({ type: types.FETCH_POST_START });
    const payload = yield call(API.fetchPostById, action.payload.id);
    yield put({ type: types.FETCH_POST_SUCCESS, payload: { post: payload } });
  } catch (err) {
    yield put({ type: types.FETCH_POST_ERROR, payload: { error: err } });
    // notyf.error('Error while loading a post');
    console.log(err);
  }
}

function* getPostsWatcher() {
  yield takeEvery(types.FETCH_POSTS, getPostsWorker);
}

function* getOnePostWatcher() {
  yield takeEvery(types.FETCH_POST, getOnePostWorker);
}

export default function* rootSaga() {
  yield all([getPostsWatcher(), getOnePostWatcher()]);
}
