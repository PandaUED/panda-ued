import request from '../utils/request';


export default {
	namespace    : 'preview',
	state        : {},
	reducers     : {
		save(state, {payload: data}) {
			return {...state, data}.data;
		},
	},
	effects      : {
		*GET({}, {call, put, select}) {
			const location = window.location.pathname
			const path     = location.replace('/preview', '/library')
			const data     = yield call(() => request(`/api/data${path}data.json`));
			yield put({
				          type   : 'save',
				          payload: data.data,
			          });
		},
	},
	subscriptions: {
		setup({dispatch, history}) {
			return history.listen(location => {
				console.log()
				if (location.pathname.split('/')[1] === 'preview') {
					dispatch({type: 'GET'});
				}
			});
		},
	},
};
