import Markdown from 'react-markdown'
import { Button, Table } from 'antd';
import './index.scss';

export default ({loading, dataSource = {data: [{group: []}], filters: []}, news = false, ...other}) => {

	let list         = [],
	    filteredInfo = {},
	    i            = 0;

	function handleChange(pagination, filters, sorter) {
		filteredInfo = filters
	};

	const columns = [
		{
			title    : 'Webhook 信息流',
			dataIndex: 'data',
			key      : 'data',
			filters  : dataSource.filters,
			onFilter : (value, record) => record.name === value,
		}
	];

	dataSource.data.map(data => {
		list.push({
			          key : Math.random(),
			          name: data.name,
			          data: (
				          <div className="xm-card-bearychat" key={data.time}>
					          <div className="xm-card-avatar">
						          <img src={data.url}/>
					          </div>
					          <div className="xm-card-main">
						          <div className="xm-card-header">
							          <h3>{data.name}<span>{data.time}</span></h3>
							          <p>{data.date} </p>
						          </div>
						          {data.group.map(data => (
							                          <div key={data.key} className="xm-card-body">
								                          <Markdown source={data.text}/>
								                          {(data.group) ? data.group.map(data =>
									                                                         <div
										                                                         key={'sublist' + data.key + Math.random()}
										                                                         className="xm-card-sublist"
										                                                         style={{borderColor: data.color}}>
										                                                         {(news) ? <h2><span></span>{data.title}</h2> : null}
										                                                         <Markdown source={data.text}/>
									                                                         </div>) : null}
							                          </div>
						                          )
						          )}
					          </div>
				          </div>
			          )
		          })
	})

	return (
		<div className="xm-components-bearychat" {...other}>
			<Table loading={loading} dataSource={list} columns={columns} onChange={handleChange}/>
		</div>
	);
}

