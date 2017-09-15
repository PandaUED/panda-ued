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
		*GET({}, {call, put, select}) {
			const location = yield select(state => state.routing.locationBeforeTransitions.pathname);
			const data     = yield call(() => request("/api/data/data/library.json"));
			let path       = location.split('/')[2]
			yield put({
				          type   : 'save',
				          payload: data.data[path],
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
