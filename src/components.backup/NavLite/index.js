import { Menu } from 'antd';
import { Link } from 'dva/router';
import './index.scss';

export default ({location, navData = [], selectedKeys = [], father, ...other}) => {
	const path   = location.pathname
	selectedKeys = [`${path.replace(father, '').split('/')[1]}`]

	return (
		<Menu
			selectedKeys={selectedKeys}
			mode="horizontal"
			className="xm-components-nav-lite"
			{...other}
		>
			{navData.map((data) => (
				<Menu.Item key={data.name}>
					<Link to={data.path}>{data.title}</Link>
				</Menu.Item>
			))}
		</Menu>
	);
}

