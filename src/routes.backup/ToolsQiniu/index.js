
import {connect} from 'dva';
import './index.scss';

function mapStateToProps() {
	return {};
}

export default connect(mapStateToProps)(
		({location}) => {
			return (
					<div className="xm-route-tools-cover">
						routeComponent: ToolsCover
					</div>
			)
		}
);
