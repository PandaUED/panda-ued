
import { Link } from 'dva/router';
import { Menu, Spin } from 'antd';
import './index.scss';
const {SubMenu} = Menu;

export default ({location, sidebarData, openKeys, selectedKeys, loading}) => {

	let container = [],
	    submenu   = [],
	    pathname  = ""

	if (!loading) {
		pathname = location.pathname.replace('X', '').split('/')
		pathname = pathname[pathname.length - 1]
		if (sidebarData && sidebarData[0].group) {
			submenu = sidebarData.map(data => {
				return (
					<SubMenu
						key={data.name}
						defaultActiveFirst={true}
						title={<h4>{data.title}</h4>}
					>
						{data.group.map(data => (
							<Menu.Item key={data.name} className="xm-menuitem">
								<Link to={data.path}>
									{data.name}
									<span className="chinese">{data.title}</span>
								</Link>
							</Menu.Item>
						))}
					</SubMenu>
				)
			})
		} else {
			submenu = sidebarData.map(data => {
				return (
					<Menu.Item key={data.name} className="xm-menuitem">
						<Link to={data.path}>
							{data.name}
							<span className="chinese">{data.title}</span>
						</Link>
					</Menu.Item>
				)
			})
		}
		if (!loading) {

			container = (
				<Menu
					selectedKeys={[(pathname === "") ? "webhook" : pathname]}
					defaultSelectedKeys={selectedKeys}
					defaultOpenKeys={openKeys}
					mode="inline"
					style={{height: '100%'}}
					className="xm-components-sidebar"
				>
					{submenu}
				</Menu>
			)
		}
	}

	return (
		<Spin spinning={loading}>{container}</Spin>

	);
};
