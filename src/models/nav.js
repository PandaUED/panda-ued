import request from '../utils/request';

export default {
	namespace    : 'nav',
	state        : {
		header      : [],
		footer      : [],
		sidebar     : [],
		selectedKeys: [],
		openKeys    : []
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
			navJson.data.header.map(data => {
				if (data.name === '/mobile') {data.path = "/doc/mobile/Layout/XFlex"}
			})

			let sidebar = navJson.data[pathname[1].replace('preview', 'library')];

			(sidebar)
				? sidebar : sidebar = navJson.data['home']

			let selectedKeys = [],
					openKeys     = [];

			if (sidebar && sidebar[0].group) {
				selectedKeys = [sidebar[0].group[0].name]
				sidebar.map((data) => {
					openKeys.push(data.name);
				})
			}

			yield put({
									type   : 'save',
									payload: {
										header      : navJson.data.header,
										footer      : navJson.data.footer,
										sidebar     : sidebar,
										selectedKeys: selectedKeys,
										openKeys    : openKeys
									},
								});
		},
	},
	subscriptions: {
		setup({dispatch, history}) {
			var backup;
			return history.listen(location => {
				let path = location.pathname.split('/')
				if (!backup || location.pathname == "/" || path[2] && path[2] !== backup) {
					dispatch({type: 'GET'});
					backup = path[2]
				}
			});
		},
	},
};
