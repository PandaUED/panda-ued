import request from '../utils/request';
import setcookie from '../utils/setcookie';

export default {
	namespace: 'bearychat',
	state    : {
		data   : [],
		filters: []
	},
	reducers : {
		save(state, {payload: data}) {
			return {...state, data}.data;
		},
	},
	effects  : {
		*COOKIES({}, {call}) {
			const packageJson = yield call(() => request("/api/data/package.json"));
			Object.entries(packageJson.data.cookie).map(data => {
				setcookie(data[0], data[1])
			})
			console.log("Set Cookies!")
		},
		*GETWK({}, {call, put}) {
			const robot   = yield call(() => request("/api/robots", {
				credentials: 'same-origin'
			}));
			const message = yield call(() => request("/api/vchannels/=bwDmm/messages?limit=50", {
				credentials: 'same-origin'
			}));
			const data = bcData(robot, message)
			yield put({
				          type   : 'save',
				          payload: {
					          data   : data.finalMsg,
					          filters: data.finalFilters
				          },
			          });
		},
		*GETCD({}, {call, put}) {
			const robot   = yield call(() => request("/api/robots", {
				credentials: 'same-origin'
			}));
			const message = yield call(() => request("/api/vchannels/=bwDmo/messages?limit=50", {
				credentials: 'same-origin'
			}));
			const data = bcData(robot, message)
			yield put({
				          type   : 'save',
				          payload: {
					          data   : data.finalMsg,
					          filters: data.finalFilters
				          },
			          });
		},
		*GETNEWS({}, {call, put}) {
			const robot   = yield call(() => request("/api/robots", {
				credentials: 'same-origin'
			}));
			const message = yield call(() => request("/api/vchannels/=bwHdu/messages?limit=50", {
				credentials: 'same-origin'
			}));
			const data = bcData(robot, message)
			yield put({
									type   : 'save',
									payload: {
										data   : data.finalMsg,
										filters: data.finalFilters
									},
								});
		},
	},

	subscriptions: {
		setup({dispatch, history}) {
			dispatch({type: 'COOKIES'});
			return history.listen(location => {
				if (location.pathname === '/' || location.pathname === '/home/webhook') {
					dispatch({type: 'GETWK'});
				} else if (location.pathname === '/home/coding') {
					dispatch({type: 'GETCD'});
				}if (location.pathname === '/news') {
					dispatch({type: 'GETNEWS'});
				}
			});
		},
	},
};

function bcData(robot, message) {
	let newRb  = [],
	    newMsg = [];

	robot.data.result.map(data => {
		newRb[data.id] = {
			name: data.name,
			url : data.avatar_url
		}
	})

	let i = 0;

	message.data.result.map(data => {
		if (data.subtype === "robot" && newRb[data.robot_id]) {
			newMsg.unshift({
				               name : newRb[data.robot_id].name,
				               url  : newRb[data.robot_id].url,
				               time : data.created.match(/(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])/g)[0],
				               date : data.created.match(/([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))/g)[0],
				               group: {
					               key  : i,
					               text : data.text,
					               group: data.attachments
				               }

			               })
		}
		i++;
	})

	let finalMsg = [
		    {
			    name : "",
			    url  : "",
			    time : "",
			    date : "",
			    group: []
		    }
	    ],
	    filters  = [],
	    count    = 0;

	newMsg.map(data => {
		filters.push(data.name)
		if (data.name === finalMsg[count].name && data.time === finalMsg[count].time) {
			finalMsg[count].group.push(data.group)
		} else {
			count++;
			finalMsg[count] = {
				name : data.name,
				url  : data.url,
				time : data.time,
				date : data.date,
				group: [data.group]
			}

		}
	})
	let newFilters   = Array.from(new Set(filters)),
	    finalFilters = []
	newFilters.map(data =>
			               finalFilters.push({
				                                 text : data,
				                                 value: data
			                                 })
	)
	finalMsg.shift()

	return {
		finalMsg    : finalMsg,
		finalFilters: finalFilters
	}
}