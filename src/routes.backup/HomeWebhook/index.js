
import {connect} from 'dva';
import {Spin} from 'antd';
import {Bearychat} from '../../components';
import './index.scss';

function mapStateToProps(state) {
	return {
		loading  : state.loading.global,
		bearychat: state.bearychat
	};
}

export default connect(mapStateToProps)(({bearychat, loading}) => {

	return (
			<Spin spinning={loading} size="large">
				<Bearychat loading={loading} dataSource={bearychat}/>
			</Spin>
	);
});
