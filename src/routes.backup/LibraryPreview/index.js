import { connect } from 'dva';
import { Spin, Icon } from 'antd';
import { Duoshuo } from '../../components';
import SMApp from './ui-library'

import './index.scss';

function mapStateToProps(state) {
	return {
		sketchData: state.preview,
		loading   : state.loading.global
	};
}

export default connect(mapStateToProps)(({location, sketchData, loading, ifFull = false}) => {

	(!loading) ? $(setTimeout(() => {
		           const openId = decodeURI(`/api/data${location.pathname.replace('preview', 'library')}`)
		           SMApp(sketchData, openId)
	           }, 100)) : null;

	function fullscreen() {

		(!ifFull)
			? $(() => {
				ifFull = true
				$('#app').addClass('fullscreen');
				$('i.anticon-arrows-alt').removeClass('anticon-arrows-alt')
				                         .addClass('anticon-shrink');

			})
			: $(() => {
				ifFull = false
				$('#app').removeClass('fullscreen');
				$('i.anticon-shrink').removeClass('anticon-shrink')
				                     .addClass('anticon-arrows-alt');
			})
	}

	return (
		<Spin spinning={loading} size="large">
			<div id="fullscreen" onClick={fullscreen}>
				<Icon type="arrows-alt"/>
			</div>
			<div className="row" style={{margin: "0"}}>
				<div className="col-lg-12" id="app"/>
				<div className="col-lg-12" id="app-duoshuo">
					<Duoshuo location={location} loading={loading}/>
				</div>
			</div>
		</Spin>
	);
});
