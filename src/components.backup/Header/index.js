import { Menu } from 'antd';
import { Link } from 'dva/router';
import './index.scss';

export default ({location, navData = [], selectedKeys = [], ...other}) => {

	const path = location.pathname.replace('doc/', '').split('/');
	(path[1] !== "" | "home") ? selectedKeys = [`/${path[1].replace('preview', 'library')}`] : selectedKeys = [`/`]

	return (
		<header {...other}>
			<div className="container">

				<div className="row">
					<div className="site-logo"></div>
					<Menu
						selectedKeys={selectedKeys}
						mode="horizontal"
						className="hidden-sm-down"
					>
						{navData.map((data) => {
							if (data.path.match("http")) {
								return (
									<Menu.Item key={data.name}>
										<a href={data.path}>{data.title}</a>
									</Menu.Item>
								)
							} else {
								return (
									<Menu.Item key={data.name}>
										<Link to={data.path}>{data.title}</Link>
									</Menu.Item>
								)
							}
						})}
					</Menu>
				</div>
			</div>
		</header>
	);
};

