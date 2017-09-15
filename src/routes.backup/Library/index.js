import { connect } from 'dva';
import { Layout } from 'antd';
import { Showcase, Sidebar } from '../../components';
import './index.scss';
const {Sider} = Layout;

function mapStateToProps(state) {
	return {
		sidebar     : state.nav.sidebar,
		selectedKeys: [state.routing.locationBeforeTransitions.pathname.split('/')[2]],
		loading     : state.loading
	};
}

export default connect(mapStateToProps)(({selectedKeys, sidebar, loading, children}) => {
	return (
		<div style={{marginBottom: "3rem"}}>
			<Showcase title="UI仓库" content="熊猫金库的UI仓库、标注及assets" loading={loading.global}/>
			<div className="container xm-container">
				<div className="row">
					<Sider className="col-xs-12 col-md-3  xm-sider">
						<Sidebar location={location}
						         sidebarData={sidebar}
						         selectedKeys={selectedKeys}
						         loading={loading.models.nav}/>
					</Sider>
					<div className="col-xs-12 col-md-9  xm-content">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
});
