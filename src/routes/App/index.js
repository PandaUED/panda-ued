import styled from 'styled-components';
import { Footer, Header } from '../../components';

export default ({children}) => {

	const Layout = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	`;

	return (
		<Layout>
			<Header location={window.location}/>
			<Layout style={{paddingTop: '80px'}}>
				{children}
			</Layout>
			<Footer/>
		</Layout>
	);
}