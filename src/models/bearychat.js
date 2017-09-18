import request from '../utils/request';

const Request = (channel) =>
	request(`/api/vchannels/${channel}/messages?limit=50`, {
		credentials: 'same-origin'
	});

export default {
	namespace: 'bearychat',
	state    : {},
	reducers : {
		save(state, {payload: data}) {return {...state, data}.data;}
	},
	effects  : {
		* GetTrello({}, {call, put}) {
			const fetch = yield call(() => Request('=bwKDL'));
			const data  = fetch.data.result;
			yield put({type: 'save', payload: data});
		},
		* GetFe({}, {call, put}) {
			const fetch = yield call(() => Request('=bwDox'));
			const data  = fetch.data.result;
			yield put({type: 'save', payload: data});
		},
		* GetRedmine({}, {call, put}) {
			const fetch = yield call(() => Request('=bwKEd'));
			const data  = fetch.data.result;
			yield put({type: 'save', payload: data});
		},
		* GetNews({}, {call, put}) {
			const fetch = yield call(() => Request('=bwHdu'));
			const data  = fetch.data.result;
			yield put({type: 'save', payload: data});
		}
	},

	subscriptions: {
		setup({dispatch, history}) {
			return history.listen(location => {
				if (location.pathname === '/home/trello') dispatch({type: 'GetTrello'});
				if (location.pathname === '/home/changelog') dispatch({type: 'GetFe'});
				if (location.pathname === '/home/redmine') dispatch({type: 'GetRedmine'});
				if (location.pathname === '/home/news') dispatch({type: 'GetNews'});
			});
		}
	}
};

