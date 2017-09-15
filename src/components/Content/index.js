import { Layout } from 'antd';
const {Content} = Layout;
import styled from 'styled-components';

export default ({...other}) =>{
	const Body = styled(Content)`
	padding-top: 5rem;
	`
	return <Body {...other} />
}