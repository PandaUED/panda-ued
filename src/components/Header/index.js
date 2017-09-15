import { Layout } from 'antd';
import { Link } from 'dva/router';
import styled from 'styled-components';
import { style } from '../';
import { navBar } from '../../config';

const {Header} = Layout;

export default ({location}) => {
	const pathname = location.pathname;

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

	const NavBar = styled(Header)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height:5rem;
	${style.split.bottom}
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
		border-bottom:3px solid ${(location.pathname === to) ? style.color.primary : `transparent`}
	`;
		return <Item to={to} children={title}/>;
	};

	const showDesktop = navBar.map((item, key) => (
		<NavItem key={key} title={item.title} to={item.to}/>
	));

	return (
		<NavBar>
			<Logo><span>Panda</span> Design</Logo>
			<Menu>
				{showDesktop}
			</Menu>
		</NavBar>
	);
}