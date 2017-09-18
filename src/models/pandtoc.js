import request from '../utils/request';


export default {
	namespace    : 'pandtoc',
	state        : {},
	reducers     : {
		save(state, {payload: data}) {
			return {...state, data}.data;
		},
	},
	effects      : {
		*GET({}, {call, put}) {
			const data     = yield call(() => request("/api/pand/toc"));
			yield put({
				          type   : 'save',
				          payload: data.data,
			          });
		},
	},
	subscriptions: {
		setup({dispatch, history}) {
			return history.listen(location => {
				if (location.pathname.indexOf('pand') !== -1) dispatch({type: 'GET'});
			});
		},
	},
};
