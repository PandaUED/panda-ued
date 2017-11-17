import { connect } from 'dva';
import { Route } from 'dva/router';
import path from 'path';
import styled from 'styled-components';
import { LibMenu, ToIndex, View } from '../../components';
import Page from './Page';

function mapStateToProps(state) {
  return {
    lib: state.lib,
    loading: state.loading.global,
  };
}

export default connect(mapStateToProps)(({ lib, loading }) => {
  const LibView = styled(View)`
    display: flex;
  `;

  return (
    <LibView>
      <LibMenu data={lib} />
      {!loading ? (
        <ToIndex path="/library" to={path.join('library', Object.values(lib)[0][0])} />
      ) : (
        ''
      )}
      <Route path="/library/:page" component={Page} />
    </LibView>
  );
});
