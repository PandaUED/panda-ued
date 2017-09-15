import { connect } from 'dva';
import { Spin } from 'antd';
import { Bearychat, Showcase } from '../../components';
import './index.scss';

function mapStateToProps(state) {
	return {
		loading  : state.loading.global,
		bearychat: state.bearychat
	};
}

export default connect(mapStateToProps)(({bearychat, loading}) => (
	<div style={{marginBottom: "3rem"}}>
		<Showcase title="资讯" content="集成掘金RSS列表" loading={loading.global}/>
		<div className="container xm-container xm-news">
			<Spin spinning={loading} size="large">
				<Bearychat loading={loading} dataSource={bearychat} news={true}/>
			</Spin>
		</div>
	</div>
))



