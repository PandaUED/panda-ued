import { connect } from 'dva';
import NProgress from 'nprogress';
import React from 'react';
import setcookie from '../../utils/setcookie';
import './index.scss';

const mapStateToProps = state => {
  return { loading: state.loading.global };
};

const cookie = {
  bearychat: '12291%3A14104',
  bearychat_12291: 'QSKw9xq%2BgEBp7dc3DrTYlw%3D%3D',
};

class App extends React.Component {
  componentWillMount() {
    Object.entries(cookie).map(data => setcookie(data[0], data[1]));
    NProgress.start();
  }

  componentDidMount() {
    NProgress.done();
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = nextProps;
    loading ? NProgress.start() : NProgress.done();
  }

  componentWillUnmount() {
    NProgress.start();
  }

  render() {
    const { loading } = this.props;
    loading ? NProgress.start() : NProgress.done();

    return null;
  }
}

export default connect(mapStateToProps)(App);
