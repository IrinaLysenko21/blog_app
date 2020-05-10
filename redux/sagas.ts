import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as types from './types';
import * as actions from '../redux/actions';
import * as API from '../services/api';

function* getPostsWorker(): Generator {
  try {
    yield put(actions.FetchPostsStart());
    const payload = yield call(API.fetchPosts);
    yield put(actions.FetchPostsSuccess(payload));
  } catch (err) {
    yield put(actions.FetchPostsError(err));
  }
}

function* getOnePostWorker(action): Generator {
  try {
    yield put(actions.fetchOnePostStart());
    const payload = yield call(API.fetchPostById, action.payload.id);
    yield put(actions.fetchOnePostSuccess(payload));
  } catch (err) {
    yield put(actions.fetchOnePostError(err));
  }
}

function* createPostWorker(action): Generator {
  try {
    yield put(actions.createPostStart());
    yield call(API.createPost, action.payload.post);
    yield put(actions.createPostSuccess());
  } catch (err) {
    yield put(actions.createPostError(err));
  }
}

function* getPostsWatcher(): Generator {
  yield takeEvery(types.FETCH_POSTS, getPostsWorker);
}

function* getOnePostWatcher(): Generator {
  yield takeEvery(types.FETCH_POST, getOnePostWorker);
}

function* createPostWatcher(): Generator {
  yield takeEvery(types.CREATE_POST, createPostWorker);
}

export default function* rootSaga(): Generator {
  yield all([getPostsWatcher(), getOnePostWatcher(), createPostWatcher()]);
}
