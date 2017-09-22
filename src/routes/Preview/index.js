import { Icon, Spin } from 'antd';
import { connect } from 'dva';
import path from 'path';
import React from 'react';
import styled from 'styled-components';
import { Comment, style, View } from '../../components';
import scss from './index.scss';
import SMApp from './ui-library';

function mapStateToProps(state) {
  return {
    preview: state.preview,
    loading: state.loading.global,
  };
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fullscreen: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ fullscreen: !this.state.fullscreen });
  }

  render() {
    const { location, preview, loading } = this.props;
    const decodePath = path.join(
      '/api/data',
      location.pathname.replace('/preview/', '/library/'),
      '/'
    );
    const openId = decodeURI(decodePath);

    if (!loading) setTimeout(() => SMApp(preview, openId), 100);

    const Button = styled.div`
      width: 3rem;
      height: 3rem;
      cursor: pointer;
      border-radius: 50%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${style.color.primary};
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 9999999;
    `;

    let Preview = styled.div``;

    if (this.state.fullscreen) {
      Preview = Preview.extend`
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 999999;
      `;
    }
    return (
      <div>
        <Spin spinning={loading} size="large">
          <Preview className={scss.preview} id="app" />
        </Spin>
        <Button onClick={this.onClick}>
          <Icon type={this.state.fullscreen ? 'shrink' : 'arrows-alt'} />
        </Button>
        <View>
          <Comment />
        </View>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Preview);
