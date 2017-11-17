import React from 'react';
import { Icon, Spin } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import path from 'path';
import styled from 'styled-components';
import { Comment, Markdown, PandFrame } from '../../components';

function mapStateToProps(state) {
  return {
    pand: state.pand,
    loading: state.loading.global,
  };
}

class Pand extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fullscreen: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ fullscreen: !this.state.fullscreen });
  }

  render() {
    const { pand, loading } = this.props;

    let Content;

    const View = styled.div`
      margin-left: 2rem;
      width: 100%;
      position: relative;
    `;

    const DocView = styled.div``;

    const Showcase = styled.div`
      display: flex;
      margin-top: 2rem;
    `;

    let CodeView = styled.div`
      width: 400px;
      position: relative;
      background: #222;
    `;

    let MarkdownCode = styled(Markdown)`
      max-height: 654px;
      overflow: scroll;
      padding: 1rem;
    `;

    let Button = styled.div`
      cursor: pointer;
      padding: 1rem;
      background: #333;
      color: #666;
      text-align: center;
      &:hover {
        color: #fff;
      }
    `;

    const Url = styled.a`
      display: block;
      padding: 1rem;
      color: #666;
      border-bottom: 1px solid #2a2a2a;
      > i {
        margin-right: 0.5rem;
      }
    `;

    if (!loading) {
      const Split = '## API';
      const Data = pand.body.split(Split);
      const PandPath = `https://${path.join('xmui.xiongmaojinku.com/', _.kebabCase(pand.name))}`;

      if (this.state.fullscreen) {
        CodeView = CodeView.extend`
          position: fixed;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          z-index: 999999;
        `;
        MarkdownCode = MarkdownCode.extend`
          max-height: 100%;
          padding-bottom: 6rem;
        `;
        Button = Button.extend`
          position: fixed;
          width: 100%;
          left: 0;
          bottom: 0;
          z-index: 9999999;
        `;
      }
      Content = (
        <DocView>
          <Markdown data={`# ${pand.name} ${pand.title}${Data[0]}`} />
          <Showcase>
            <div>
              <Markdown data={'## Example'} />
              <CodeView>
                <Url href={PandPath}>
                  <Icon type="link" />
                  {PandPath}
                </Url>
                <MarkdownCode data={`\`\`\`jsx\n${pand.code}\n\`\`\``} />
                <Button onClick={this.onClick}>
                  <Icon type={this.state.fullscreen ? 'shrink' : 'arrows-alt'} />
                </Button>
              </CodeView>
            </div>
            <PandFrame src={PandPath} />
          </Showcase>
          <Markdown data={Split + Data[1]} />
        </DocView>
      );
    }

    return (
      <View>
        <Spin style={{ width: '100%', lineHeight: '720px' }} spinning={loading} size="large" />
        {Content}
        <Comment />
      </View>
    );
  }
}

export default connect(mapStateToProps)(Pand);
