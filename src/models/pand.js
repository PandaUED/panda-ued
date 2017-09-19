import request from '../utils/request';
import path from 'path'

export default {
	namespace    : 'pand',
	state        : {},
	reducers     : {
		save(state, {payload: data}) {return {...state, data}.data;},
	},
	effects      : {
		*GET({}, {call, put}) {
			const PandPath = path.join("/api",window.location.pathname)
			console.log(PandPath)
			const data     = yield call(() => request(PandPath));
			yield put({type   : 'save', payload: data.data,});
		},
	},
	subscriptions: {
		setup({dispatch, history}) {
			return history.listen(location => {
				if (location.pathname.indexOf('/pand/') !== -1) dispatch({type: 'GET'});
			});
		},
	},
};
