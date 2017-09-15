import { Layout } from 'antd';
import styled from 'styled-components';
import { style, View } from '../../components';

const {Content} = Layout;

export default ({children}) => {

	const Showcase = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color:#fff;
	background: ${style.gradient.primary(-45)};
	overflow: hidden;
	position: relative;
	height: 600px;
	> img {
	height: 100%;
	width: auto;
	}
	`;

	const TextBox = styled.div`
	position: absolute;
	bottom:4rem;
	width: 200px;
	margin-left: 12rem;
	border-left: 2px solid rgba(255,255,255,.5);
	padding-left: 1rem;
	`;
	const Title   = styled.div`
	z-index: 1;
	font-size: 1.5rem;
	margin-bottom: .8rem;
	font-weight: 600;
	`;
	const Desc    = styled.div`
	z-index: 1;
	`;

	const ImgView = styled(View)`
	>img{
	width: 100%;
	margin-bottom: -.3rem;
	box-sizing: border-box;
	}
`;

	let imgListView = [];

	for (let i = 2; i <= 10; i++) {
		imgListView.push(<img key={i} src={`img/p_xm/xm_${i}.png`}/>);
	}

	return (
		<Layout>
			<Showcase>
				<img src="/img/banner.png"/>
				<TextBox>
					<Title>PandaDesign</Title>
					<Desc>熊猫用户体验设计，简称PanD (Panda Design)</Desc>
				</TextBox>
			</Showcase>
			<ImgView padding={false}>
				{imgListView}
			</ImgView>
		</Layout>
	);
}