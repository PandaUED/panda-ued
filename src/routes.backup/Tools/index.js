import { connect } from 'dva';
import { Script } from '../../utils/script'
import { NavLite } from '../../components';
import { Spin } from 'antd';
import './index.scss';

function mapStateToProps(state) {
	return {
		loading: state.loading.global,
		sidebar: state.nav.sidebar
	}
}

export default connect(mapStateToProps)(({sidebar, loading, children, location}) => {
	Script("//cdn.bootcss.com/html2canvas/0.5.0-beta4/html2canvas.min.js")
	return (
		<div className="container xm-router-tools" style={{marginBottom: "3rem"}}>
			<NavLite location={location}
			         navData={sidebar}
			         father="tools/"
			/>
			<Spin spinning={loading} size="large">
				{children}
			</Spin>
		</div>
	);
});
