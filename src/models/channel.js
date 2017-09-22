import request from '../utils/request';

export default {
  namespace: 'channels',
  state: {},
  reducers: {
    save(state, { payload: data }) {
      return { ...state, data }.data;
    },
  },
  effects: {
    *GetChannels(action, { call, put }) {
      const robot = yield call(() =>
        request('/api/channels', {
          credentials: 'same-origin',
        })
      );
      const data = robot.data.result;
      const newData = {};
      data.forEach(item => {
        newData[item.name] = item.id;
      });
      yield put({
        type: 'save',
        payload: newData,
      });
    },
  },

  subscriptions: {
    setup({ dispatch }) {
      return dispatch({ type: 'GetChannels' });
    },
  },
};
