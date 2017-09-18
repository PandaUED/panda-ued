import { Link } from 'dva/router';
import _ from 'lodash';
import styled from 'styled-components';
import { View } from '../../components';
import { footBar } from '../../config';

export default () => {

	const FooterBar = styled(View)`
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	`;
	const Box       = styled.div`
		width: 20rem;
	`;

	const Title = styled.div`
		font-weight: 600;
		margin-bottom: 1rem;
		color:#444;
	`;

	const Item = styled.div`
		font-size: .8rem;
		margin-bottom: .4rem;
	`;

	let Group = [];
	_.forEach(footBar, (data, key) => {
		Group.push(
			<Box key={key}>
				<Title>{key}</Title>
				{data.map((item, key) => (
					<Item key={key}>
						<a href={item.to}>{item.name} </a>
						- {item.title}
					</Item>))}
			</Box>);
	});

	return (
		<FooterBar style={{padding: "2rem 0"}}>
			{Group}
			<Box>
				<Title>Copyright © 2017</Title>
				<Item>熊猫金库UED出品</Item>
				<Item>Built by <a href="https://canisminor.cc/">CanisMinor</a></Item>
			</Box>
		</FooterBar>
	);
}