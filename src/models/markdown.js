import request from '../utils/request';


export default {
	namespace    : 'markdown',
	state        : {
		title: '',
		body : '',
	},
	reducers     : {
		save(state, {payload: data}) {
			return {...state, data}.data;
		},
	},
	effects      : {
		*GET({}, {call, put, select}) {

			const location = yield select(state => state.routing.locationBeforeTransitions.pathname);
			const data     = yield call(() => request(`/api/data/${location}.json`));
			yield put({
				          type   : 'save',
				          payload: data.data,
			          });
		},
		*GETXMUI({}, {call, put, select}) {

			const location = yield select(state => state.routing.locationBeforeTransitions.pathname);
			const data     = yield call(() => request(`/api/xmui/${location.replace('/doc/mobile/','')}/index.json`));
			yield put({
				          type   : 'save',
				          payload: data.data,
			          });
		},
		*README({}, {call, put}) {
			const data = yield call(() => request("/api/data/README.json"));
			yield put({
				          type   : 'save',
				          payload: data.data,
			          });
		},
	},
	subscriptions: {
		setup({dispatch, history}) {
			return history.listen(location => {
				if (location.pathname.split('/')[1] === 'doc') {
					(location.pathname.split('/')[2] === 'mobile')?dispatch({type: 'GETXMUI'}):dispatch({type: 'GET'});
				} else if (location.pathname === '/home/readme') {
					dispatch({type: 'README'});
				}
			});
		},
	},
};
