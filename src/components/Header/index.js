import { Link } from 'dva/router';
import styled from 'styled-components';
import { style, View } from '../';
import { navBar } from '../../config';

export default () => {
	const pathname = window.location.pathname;

	const NavBar = styled(View)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height:5rem;
	`;

	const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.4rem;
	font-weight: 600;
	>span{
	margin-right: .2rem;
	background-image: ${style.gradient.primary(45)};
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
	}
	`;

	const Menu = styled.div`
	height:100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	`;

	const NavItem = ({title, to}) => {
		const Item = styled(Link)`
		height:100%;
		color: #444;
		padding:  0 .5rem;
		margin: 0 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom:3px solid ${(pathname.indexOf(to) !== -1) ? style.color.primary : `transparent`}
	`;
		return <Item to={to} children={title}/>;
	};

	const showDesktop = navBar.map((item, key) => (
		<NavItem key={key} title={item.title} to={item.to}/>
	));

	return (
		<NavBar style={{
			zIndex:9999,
			position:'fixed',
			top:0,
			left:0,
			background:`#fff`,
			boxShadow: `0 3px 6px 0 rgba(0,0,0,.04)`
		}}>
			<Logo><span>Panda</span> Design</Logo>
			<Menu>
				{showDesktop}
			</Menu>
		</NavBar>
	);
}