import { Spin } from 'antd';
import { connect } from 'dva';
import { Link, Redirect, Route } from 'dva/router';
import path from 'path';
import styled from 'styled-components';
import { Comment } from '../../components';

function mapStateToProps(state) {
	return {
		libPage: state.libPage,
		loading: state.loading.global
	};
}

export default connect(mapStateToProps)(({loading, libPage}) => {
	const CardList = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin: 2rem 0 0 1rem;
	`;
	const Card     = styled(Link)`
	width: 280px;
	box-shadow:0 4px 24px 0 rgba(0,0,0,.06);
	margin:1rem;
	transition: all .5s ease-out;
	color: #444;
	&:hover{
	box-shadow:0 12px 44px 0 rgba(0,0,0,.12);
	}
	`;

	const Title = styled.div`
	padding:1.5rem;
	font-weight: 500;
	font-size: 1.1rem;
	`;

	let Page;
	if (!loading) Page = libPage.map((item, key) => {
		const Cover = styled.div`
		width: 100%;
		height: 240px;
		background: url(${path.join('https://ued.xiongmaojinku.com/api/data/', item.url, 'cover.png')});
		background-size: 100% auto ;
		border-bottom: 1px solid #f8f8f8;
		`;
		return (
			<Card key={key}
			      to={path.join('/preview', location.pathname.split('/')[2], item.title)}>
				<Cover/>
				<Title>{item.title}</Title>
			</Card>
		);
	});
	return (
		<CardList>
			<Spin style={{flex: 1, lineHeight: '720px'}} spinning={loading} size="large"/>
			{Page}
			<Comment/>
		</CardList>
	);
});