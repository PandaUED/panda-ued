import { connect } from 'dva';
import { Layout } from 'antd';
import { Showcase, Sidebar, Markdown, Duoshuo } from '../../components';
import './index.scss';
const {Sider} = Layout;

function mapStateToProps(state) {
	return {
		nav     : state.nav,
		markdown: state.markdown,
		showcase: state.showcase,
		loading : state.loading
	};
}

export default connect(mapStateToProps)(({location, markdown, showcase, nav, loading, children}) => {

	return (
		<div style={{marginBottom: "3rem"}}>
			<Showcase title={showcase.title} content={showcase.content} loading={loading.models.showcase}/>
			<div className="container xm-container">
				<div className="row">
					<Sider className="col-xs-12 col-md-3  xm-sider">
						<Sidebar location={location} sidebarData={nav.sidebar} openKeys={nav.openKeys}
						         selectedKeys={nav.selectedKeys}
						         loading={loading.models.nav}/>
					</Sider>
					<div className="col-xs-12 col-md-9  xm-content">
						{children}
						<Markdown markdown={markdown} loading={loading.global}/>
						<Duoshuo location={location} loading={loading.global}/>
					</div>
				</div>
			</div>
		</div>
	);
});
