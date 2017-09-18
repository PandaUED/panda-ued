import { message } from 'antd';
import dva from 'dva';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import './index.scss';

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
	                history: createHistory(),
	                onError(e) {
		                message.error(e.message, ERROR_MSG_DURATION);
	                }
                });

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/library'));
app.model(require('./models/libraryPage'));
app.model(require('./models/preview'));
app.model(require('./models/robot'));
app.model(require('./models/channel'));
app.model(require('./models/bearychat'));
app.model(require('./models/pandtoc'));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
