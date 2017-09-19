import dynamic from 'dva/dynamic';
import { Redirect, Route, Switch } from 'dva/router';
import {navBar} from '../config';
import _ from 'lodash';

import App from './App';
import Home from './Home';
import Loading from './Loading';

const MakeRoute = (page) => <Route
	path={'/' + _.kebabCase(page)}
	component={dynamic({component: () => import('./' + page)})}
/>;

export default () => (
	<App>
		<Route path="/" component={Loading}/>
		<Switch>
			<Route exact path="/" render={() => (<Redirect to={navBar[0].to}/>)}/>
			<Route path="/home" component={Home}/>
			{MakeRoute('Library')}
			{MakeRoute('Pand')}
			{MakeRoute('Resource')}
			{MakeRoute('Preview')}
		</Switch>
	</App>
)