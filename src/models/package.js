import request from '../utils/request';


export default {
  namespace: 'package',
	state: {},
  reducers: {
    save(state, { payload: data }) {
      return { ...state, data }.data;
    },
  },
  effects: {
    *GET({}, { call, put }) {
      const packageJson = yield call(() => request("/api/data/package.json"));
      yield put({
				          type: 'save',
				          payload: packageJson.data
			          });
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      return dispatch({ type: 'GET' });
    },
  },
};
