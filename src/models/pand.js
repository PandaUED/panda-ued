import request from '../utils/request';


export default {
	namespace    : 'library',
	state        : {},
	reducers     : {
		save(state, {payload: data}) {
			return {...state, data}.data;
		},
	},
	effects      : {
		*GET({}, {call, put}) {
			const data     = yield call(() => request("/api/data/data/library.json"));
			yield put({
				          type   : 'save',
				          payload: data.data,
			          });
		},
	},
	subscriptions: {
		setup({dispatch, history}) {
			return history.listen(location => {
				let path = location.pathname.split('/')[1];
				if (path === 'library' || path === 'preview') {
					dispatch({type: 'GET'});
				}
			});
		},
	},
};
