
import {connect} from 'dva';
import {Table} from 'antd';
import './index.scss';

function mapStateToProps(state) {
	return {
		loading        : state.loading.global,
		dependencies   : state.package.dependencies,
		devDependencies: state.package.devDependencies
	};
}

export default connect(mapStateToProps)(({dependencies, devDependencies, loading}) => {
	let list    = []
	let listDev = []

	const columns = [
		{
			title    : '包名',
			dataIndex: 'name',
			key      : 'name',
		}, {
			title    : '使用版本',
			dataIndex: 'version',
			key      : 'version',
		}, {
			title    : '最新版本',
			dataIndex: 'newest',
			key      : 'newest',
		}
	];

	function makeNpmlist(data) {
		let i    = 0
		let list = []
		Object.entries(data).map(data => {
			list.push({
				          key    : i,
				          name   : (<a href={`https://www.npmjs.com/package/${data[0]}`}>{data[0]}</a>),
				          version: data[1].replace('^',''),
				          newest : (<img src={`https://img.shields.io/npm/v/${data[0]}.svg?style=flat`}/>)
			          });
			i++;
		})
		return list

	}

	if (!loading) {
		list    = makeNpmlist(dependencies)
		listDev = makeNpmlist(devDependencies)
	}

	return (
			<div>
				<h1>NPM包管理</h1>
				<p>下方列表为XMUED所用到的NPM包，已经所对应的最新版本</p>
				<br />
				<h2>Dependencies</h2>
				<br />
				<Table loading={loading} dataSource={list} columns={columns}/>
				<h2>devDependencies</h2>
				<br />
				<Table loading={loading} dataSource={listDev} columns={columns}/>
			</div>
	);
});
