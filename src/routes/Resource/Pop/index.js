import { Alert, Button, Card, Input, Select } from 'antd';
import styled from 'styled-components';
import './index.scss';
import picPop from './picPop';
import picSave from './picSave';
import picSelect from './picSelect';
import picUpload from './picUpload';

const Option = Select.Option;

export default () => {
  $(() => picPop());

  const View = styled.div`
    display: flex;
    margin-left: 2rem;
    margin-top: 3rem;
    position: relative;
  `;

  const Cover = styled.div`width: 450px;`;

  const SideCard = styled(Card)`
    width: 300px;
    border: none;
    margin-left: 4rem;
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08);
    &:hover {
      box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08) !important;
    }
  `;

  const Preview = styled.img`
    background: #fff;
    margin-top: 1rem;
  `;

  return (
    <View>
      <Cover id="factory" className="col-sm-12 col-lg-7">
        <div id="pop">
          <div id="pop-content" className="pop-left">
            <div id="cover-bg" />
            <div id="tag">二发熊</div>
            <div className="cover-content">
              <div id="cover-content">这里输入气泡内容...</div>
            </div>
          </div>
        </div>
        <Alert
          message="完成!"
          description="右键下方图片另存为即可下载"
          type="success"
          showIcon
          style={{ display: 'none' }}
        />
        <Preview id="preview" height="auto" />
      </Cover>
      <SideCard id="sidecard">
        <h3>请选择模板:</h3>
        <Select defaultValue="1" onChange={picSelect} style={{ width: '100%' }}>
          <Option value="1">左气泡</Option>
          <Option value="2">右气泡</Option>
        </Select>
        <h3>气泡内容:</h3>
        <Input id="title" placeholder="这里输入气泡内容..." />

        <h3>气泡名字:</h3>
        <Input id="tag-title" type="text" placeholder="这里输入气泡名字..." />

        <h3>替换头像:</h3>
        <label className="custom-file">
          <Input
            id="cover-upload"
            type="file"
            name="url"
            placeholder="请上传一张图片"
            onChange={picUpload}
            required
          />
          <span className="custom-file-control" />
        </label>

        <Button id="save" onClick={picSave} type="primary" size="large">
          生成封面图
        </Button>
      </SideCard>
    </View>
  );
};
