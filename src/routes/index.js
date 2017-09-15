import dynamic from 'dva/dynamic';
import { Route, Switch } from 'dva/router';
import _ from 'lodash';
import App from './App';
import Loading from './Loading';
import Home from './Home';
const MakeRoute = (page) => <Route
	path={'/' + _.kebabCase(page)}
	component={dynamic({component: () => import(`./${page}`)})}
/>;
export default () => (
	<App>
		124
		<Route path="/" component={Loading}/>
		<Switch>
			<Route exact path="/" component={Home}/>

		</Switch>
	</App>
)