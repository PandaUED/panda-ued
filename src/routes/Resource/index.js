import { Route } from 'dva/router';
import styled from 'styled-components';
import { Menu, ToIndex, View } from '../../components';
import { ResMenu } from '../../config';
import Download from './Download';
import Cover from './Cover';
import Pop from './Pop';
export default () => {
	const ResView = styled(View)`
		display: flex;
	`;
	return (
		<ResView>
			<Menu data={ResMenu} style={{marginTop: '2rem'}}/>
			<ToIndex path='/resource' to={ResMenu[0].to}/>
			<Route path="/resource/download" component={Download}/>
			<Route path="/resource/cover" component={Cover}/>
			<Route path="/resource/pop" component={Pop}/>
		</ResView>
	);
}