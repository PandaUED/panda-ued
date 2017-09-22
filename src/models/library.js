import request from '../utils/request';

export default {
  namespace: 'lib',
  state: {},
  reducers: {
    save(state, { payload: data }) {
      return { ...state, data }.data;
    },
  },
  effects: {
    *GET(action, { call, put }) {
      const data = yield call(() => request('/api/data/toc/toc'));
      yield put({
        type: 'save',
        payload: data.data,
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(location => {
        if (location.pathname.indexOf('/library') !== -1) {
          dispatch({ type: 'GET' });
        }
      });
    },
  },
};
