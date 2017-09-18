import request from '../utils/request';

export default {
	namespace    : 'libPage',
	state        : {},
	reducers     : {
		save(state, {payload: data}) {
			return {...state, data}.data;
		}
	},
	effects      : {
		* GET({}, {call, put}) {
			const page = window.location.pathname.split('library/')[1]
			const data = yield call(() => request(`/api/data/toc/${page}`));
			yield put({
				          type   : 'save',
				          payload: data.data
			          });
		}
	},
	subscriptions: {
		setup({dispatch, history}) {
			return history.listen(location => {
				if (location.pathname.indexOf('/library/') !== -1) dispatch({type: 'GET'});
			});
		}
	}
};
