import { connect } from 'dva';
import { Markdown } from '../../components';
import './index.scss';

function mapStateToProps(state) {
	return {
		loading : state.loading.global,
		markdown: state.markdown,
	};
}

export default connect(mapStateToProps)(({markdown, loading}) => {

	return (
		<Markdown markdown={markdown} loading={loading} showTitle={false}/>
	);
});
