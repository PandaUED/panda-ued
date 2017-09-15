import { Link } from 'dva/router';
import { Spin } from 'antd';
import { Duoshuo } from '../../components';
import { connect } from 'dva';
import { Card } from 'antd';

import './index.scss';

function mapStateToProps(state) {
	return {
		library: state.library,
		loading: state.loading.global
	};
}

export default connect(mapStateToProps)(({library = [], loading, location}) => (
	<div>
		<Spin spinning={loading} size="large">
			<div className="row" id="xm-librarypage">
				{(!loading) ? library.map(data => (
					            <Card key={data.title} bodyStyle={{padding: 0}}>
						            <Link to={'/' + data.path}>
							            <div className="library-cover">
								            <img width="100%" src={`/api/data${data.cover}`}/>
							            </div>
							            <div className="library-body">
								            <h3>{data.title}</h3>
								            <p>version: {data.name}</p>
							            </div>
						            </Link>
					            </Card>
				            )) : null}
			</div>
		</Spin>
		<Duoshuo location={location} loading={loading}/>
	</div>
))
