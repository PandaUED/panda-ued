import { Link } from 'dva/router';
import _ from 'lodash';
import path from 'path';
import { rgba } from 'polished';
import styled from 'styled-components';
import { style } from '../';

export default ({data, location, ...other}) => {
	const pathname = location.pathname;

	const Menu = styled.div`
	width: 8rem;
	display: flex;
	flex-direction: column;
	padding: 1rem 0;
	`;

	const MenuItem = ({title, to}) => {

		let Item = styled(Link)`
		display: block;
		text-align: center;
		line-height: 44px;
		border-radius: 22px;
		color: #666;
		margin-bottom: 1rem;

	`;

		if (pathname.indexOf(path.join('library', to)) !== -1) Item = Item.extend`
		background:${style.gradient.primary(-45)};
		color: #fff;
		box-shadow: 0 4px 8px 0 ${rgba(style.color.primary, .4)};
		&:hover{
		color:#fff;
		}
		`;
		return <Item to={to} children={title}/>;
	};
	let List       = [];

	const Title    = styled.div`
	font-size: 1.2rem;
	color: #444;
	font-weight: 600;
	margin:2rem 0 1rem;
	`;
	const MenuList = _.forEach(data, (item, key) => {
		List.push(<Title key={key}>{key}</Title>);
		_.forEach(item, page => {
			List.push(<MenuItem key={key + page} title={page} to={page}/>);
		});
	});

	return (
		<Menu {...other}>
			{List}
		</Menu>
	);
}