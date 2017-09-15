import dynamic from 'dva/dynamic';
import { Route, Switch } from 'dva/router';
import _ from 'lodash';
import App from './App';
import Home from './Home';
import Loading from './Loading';

const MakeRoute = (page) => <Route
	path={'/' + _.kebabCase(page)}
	component={dynamic({component: () => import(`./${page}`)})}
/>;
export default () => (
	<App>
		<Route path="/" component={Loading}/>
		<Switch>
			<Route exact path="/" component={Home}/>
			{MakeRoute('Library')}
			{MakeRoute('Pand')}
			{MakeRoute('Resource')}
		</Switch>
	</App>
)