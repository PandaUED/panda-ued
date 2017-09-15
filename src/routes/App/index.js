import { Layout } from 'antd';
import {Header,Footer} from '../../components'
const {Content} = Layout;

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