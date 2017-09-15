import { Select, Input, Card, Button, Alert, Slider } from 'antd';
import picCover from './picCover'
import picUpload from './picUpload'
import picSave from './picSave'
import picSelect from './picSelect'
import { picRight, picBottom, picZoom } from './picSlider'
import './index.scss';
const Option = Select.Option;

export default () => {
	$(() => picCover())
	return (
		<div className="row">
			<div id="factory" className="col-sm-12 col-lg-7">
				<div id="cover">
					<div id="cover-bg"></div>
					<div id="localImag"><img id="preview" width={-1} height={-1} style={{diplay: 'none'}}/></div>
					<div className="cover-content">
						<div id="tag">二发涨姿势</div>
						<div id="cover-content">这里输入文章题目...</div>
					</div>
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
						<Option value="1">周一 长姿势</Option>
						<Option value="2">周二 带你飞</Option>
						<Option value="3">周三 说个事</Option>
						<Option value="4">周四 扯着淡</Option>
						<Option value="5">周五 二发说</Option>
					</Select>
					<h3>文章题目:</h3>
					<Input id="title" placeholder="这里输入文章题目..." maxLength={15}/>
					<div className="controlset">
						<label >背景颜色</label>
						<input id="color-bg" type="text" name="color-bg" value=""/>
					</div>
					<h3>标签文字:</h3>
					<Input id="tag-title" type="text" placeholder="这里输入tag题目..." maxLength={5}/>
					<div className="controlset">
						<label >标签颜色</label>
						<input id="color-tag" type="text" name="color-tag" value=""/>
					</div>
					<h3>替换右侧图片:</h3>
					<label className="custom-file">
						<Input id="cover-upload" type="file" name="url" placeholder="请上传一张图片" onChange={picUpload}
						       required/>
						<span className="custom-file-control"></span>
					</label>
					<div className="group" style={{display: 'none'}}>
						<div className="subtitle">上下移动：</div>
						<Slider defaultValue={0} min={-400} max={400} onChange={picBottom}/>
						<div className="subtitle">水平移动：</div>
						<Slider defaultValue={0} min={-400} max={400} onChange={picRight}/>
						<div className="subtitle">缩放倍率：</div>
						<Slider defaultValue={0} min={-400} max={400} onChange={picZoom}/>
					</div>
					<Button onClick={picSave} type="primary" size="large">生成封面图</Button>
				</Card>
			</div>
		</div>

	)
};
