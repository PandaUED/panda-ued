import { connect } from 'dva';
import { Redirect, Route } from 'dva/router';
import path from 'path';
import { LibMenu, View } from '../../components';

function mapStateToProps(state) {
	return {
		lib    : state.lib,
		libPage: state.libPage,
		loading: state.loading.global
	};
}

export default connect(mapStateToProps)(({lib, libPage, loading, location}) => {
	return (
		<View>
			<LibMenu location={location} data={lib}/>
			<Route exact path="/library"
			       render={() => (<Redirect to={path.join('library', lib['熊猫金库'][0])}/>)}/>
		</View>
	);
});