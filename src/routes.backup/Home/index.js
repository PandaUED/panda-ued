import { connect } from 'dva';
import { Layout } from 'antd';
import { Showcase, Sidebar, Duoshuo } from '../../components';
import './index.scss';
const {Sider} = Layout;

function mapStateToProps(state) {
	const selectedKeys = state.routing.locationBeforeTransitions.pathname.split('/')[2];
	return {
		loading     : state.loading,
		version     : state.package.version,
		sidebar     : state.nav.sidebar,
		selectedKeys: [(selectedKeys) ? selectedKeys : 'webhook']
	};
}

export default connect(mapStateToProps)(({location, version, loading, sidebar, selectedKeys, children}) => {
	const title   = "XMUED 是熊猫镇的 HTML、CSS 和 JS 框架，用于开发熊猫镇旗下熊猫金库等 WEB 项目。",
	      content = `当前版本 ${version}`;
	return (
		<div style={{marginBottom: "3rem"}}>
			<Showcase home={true} title={title} content={content} loading={loading.global}/>
			<div className="container xm-container">
				<div className="row">
					<Sider className="col-xs-12 col-md-3  xm-sider">
						<Sidebar
							location={location}
							sidebarData={sidebar}
							selectedKeys={selectedKeys}
							loading={loading.models.nav}/>
					</Sider>
					<div className="col-xs-12 col-md-9  xm-content">
						{children}
						<Duoshuo location={location} loading={loading.global}/>
					</div>
				</div>
			</div>
		</div>

	);
});
