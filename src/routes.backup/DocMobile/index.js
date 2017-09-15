import { connect } from 'dva';
import './index.scss';

function mapStateToProps(state) {
	return {
		loading: state.loading.global
	};
}

export default connect(mapStateToProps)(({loading}) => {
	if (!loading) {
		$(() => {
			$('.xm-example-fullscreen').click(() => {
				let content = $('.xm-example-fullscreen').parent('.xm-ex-code').html();
				$('.xm-ex-mask .xm-ex-popup-content').html(content)
				$('.xm-ex-mask').show();
				$('body').css({"overflow-y": "hidden"});
			})
		})
	}
	function close() {
		$('.xm-ex-mask').hide();
		$('body').css({"overflow-y": "auto"});
	}

	return (
		<div className="xm-ex-mask" style={{display: 'none'}}>
			<div className="xm-ex-popup">
				<div className="xm-ex-popup-close" onClick={close}/>
				<div className="xm-ex-popup-content"/>
			</div>
		</div>
	);
});


