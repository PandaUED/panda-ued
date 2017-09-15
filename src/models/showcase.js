import request from '../utils/request';

export default {
	namespace    : 'showcase',
	state        : {
		title  : "",
		content: ""
	},
	reducers     : {
		save(state, {payload: data}) {
			return {...state, data}.data;
		},
	},
	effects      : {
		*GET({}, {call, put, select}) {
			const navJsonRaw  = yield call(() => request("/api/data/data/nav.json")),
			      navJsonXmui = yield call(() => request("/api/xmui/nav.json")),
			      location    = yield select(state => state.routing.locationBeforeTransitions.pathname),
			      pathname    = location.replace('/doc', '').split('/');

			let navJson         = navJsonRaw;

			navJson.data.mobile = navJsonXmui.data;

			let sidebar         = navJson.data[pathname[1]];

			let title   = "",
			    content = "";

			if (sidebar) {
				sidebar.map((data) => {
					if (data.name == pathname[2]) {
						title   = data.title;
						content = data.desc;
					}
				})
			}

			yield put({
				          type   : 'save',
				          payload: {
					          title  : title,
					          content: content
				          },
			          });
		},
	},
	subscriptions: {
		setup({dispatch, history}) {
			var backup;
			return history.listen(location => {
				if (location.pathname.split('/')[3] && location.pathname.split('/')[3] !== backup) {
					dispatch({type: 'GET'});
					backup = location.pathname.split('/')[3]
				}
			});
		},
	},
};
