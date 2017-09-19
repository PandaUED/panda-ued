import path from 'path';
import request from '../utils/request';

export default {
	namespace    : 'preview',
	state        : {},
	reducers     : {
		save(state, {payload: data}) {return {...state, data}.data;}
	},
	effects      : {
		* GET({}, {call, put}) {
			const location = window.location.pathname;
			const JsonPath = path.join(
				'/api/data/library',
				location.replace('/preview', ''),
				'data.json');
			console.log(JsonPath);
			const data = yield call(() => request(JsonPath));
			yield put({
				          type   : 'save',
				          payload: data.data
			          });
		}
	},
	subscriptions: {
		setup({dispatch, history}) {
			return history.listen(location => {
				if (location.pathname.indexOf('/preview/') !== -1) dispatch({type: 'GET'});
			});
		}
	}
};
