import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'dva/router';
import styled from 'styled-components';
import { Menu, style, View,ToIndex } from '../../components';
import { homeMenu } from '../../config';
import Page from './Page';
import About from './About';

export default ({location}) => {

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

	const ContentView = styled(View)`
	display: flex;
	height: 100%;
	position: relative;
	padding-top: 2rem;
	padding-bottom: 2rem;
	`;

	return (
		<Layout>
			<Showcase>
				<img src="/img/banner.png"/>
				<TextBox>
					<Title>PandaDesign</Title>
					<Desc>熊猫用户体验设计，简称PanD (Panda Design)</Desc>
				</TextBox>
			</Showcase>
			<ContentView>
				<Menu data={homeMenu}/>
				<ToIndex path="/home" to={homeMenu[0].to} />
				<Route exact path="/home/about" component={About}/>
				<Route path="/home/page/:page" component={Page}/>
			</ContentView>
		</Layout>
	);
}