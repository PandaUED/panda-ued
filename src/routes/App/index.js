import { Layout } from 'antd';
import {Header} from '../../components'
const {Content, Footer} = Layout;

export default ({children}) => {

	return (
		<Layout>
			<Header location={window.location} />
			<Content>
				{children}
			</Content>
			<Footer/>
		</Layout>
	);
}