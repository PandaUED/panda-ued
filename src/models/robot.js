import request from '../utils/request';

export default {
  namespace: 'robot',
  state: {},
  reducers: {
    save(state, { payload: data }) {
      return { ...state, data }.data;
    },
  },
  effects: {
    *GetRobot(action, { call, put }) {
      const robot = yield call(() =>
        request('/api/robots', {
          credentials: 'same-origin',
        })
      );
      const data = robot.data.result;
      const newData = {};
      data.forEach(item => {
        newData[item.id] = { name: item.name, url: item.avatar_url };
      });
      yield put({
        type: 'save',
        payload: newData,
      });
    },
  },

  subscriptions: {
    setup({ dispatch }) {
      return dispatch({ type: 'GetRobot' });
    },
  },
};
