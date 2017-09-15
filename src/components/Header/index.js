import { Layout } from 'antd';
import { Link } from 'dva/router';
import styled from 'styled-components';
import { style } from '../';
import { navBar } from '../../config';

const {Header} = Layout;

export default ({location}) => {
	const pathname = location.pathname;

	const NavBar = styled(Header)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height:4rem;
	${style.split.bottom}
	`;

	const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	`;



	const NavItem = ({title, to}) => {
		const Item = styled(Link)`
		color: #444;
		padding:  0 .5rem;
		margin: 0 1rem;
		border-bottom:3px solid ${(location.pathname === to)?style.color.primary:`transparent`}
	`;
		return <Item to={to} children={title}/>;
	};

	const showDesktop = navBar.map((item, key) => (
		<NavItem key={key} title={item.title} to={item.to}/>
	));

	return (
		<NavBar>
			<div>Panda Design</div>
			<Menu>
				{showDesktop}
			</Menu>
		</NavBar>
	);
}