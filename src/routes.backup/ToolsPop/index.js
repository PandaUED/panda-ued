import { Select, Input, Card, Button, Alert } from 'antd';
import picSelect from './picSelect'
import picPop from './picPop'
import picUpload from './picUpload'
import picSave from './picSave'
import './index.scss';
const Option = Select.Option;

export default () => {
	$(() => picPop())
	return (
		<div className="row">
			<div id="factory" className="col-sm-12 col-lg-7">
				<div id="pop">
					<div id="pop-content" className="pop-left">
						<div id="cover-bg"></div>
						<div id="tag">二发熊</div>
						<div className="cover-content">
							<div id="cover-content">这里输入气泡内容...</div>
						</div>
					</div>
					<div id="localImag"><img id="preview" width={-1} height={-1} style={{diplay: 'none'}}/></div>
				</div>
				<Alert
					message="完成!"
					description="右键下方图片另存为即可下载"
					type="success"
					showIcon
					style={{display: 'none'}}
				/>
			</div>
			<div className="col-sm-12 col-lg-5">
				<Card title="生成器">
					<h3>请选择模板:</h3>
					<Select defaultValue="1" onChange={picSelect} style={{width: '100%'}}>
						<Option value="1">左气泡</Option>
						<Option value="2">右气泡</Option>
					</Select>
					<h3>气泡内容:</h3>
					<Input id="title" placeholder="这里输入气泡内容..."/>

					<h3>气泡名字:</h3>
					<Input id="tag-title" type="text" placeholder="这里输入气泡名字..."/>

					<h3>替换头像:</h3>
					<label className="custom-file">
						<Input id="cover-upload" type="file" name="url" placeholder="请上传一张图片" onChange={picUpload}
						       required/>
						<span className="custom-file-control"></span>
					</label>

					<Button onClick={picSave} type="primary" size="large">生成封面图</Button>
				</Card>
			</div>
		</div>

	)
};
