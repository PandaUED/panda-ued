import { connect } from 'dva';
import { Route } from 'dva/router';
import _ from 'lodash';
import path from 'path';
import styled from 'styled-components';
import { PandMenu, ToIndex, View } from '../../components';
import Page from './Page';

function mapStateToProps(state) {
  return {
    pandtoc: state.pandtoc,
    loading: state.loading.global,
  };
}

export default connect(mapStateToProps)(({ pandtoc, loading }) => {
  const PandView = styled(View)`
    display: flex;
  `;

  return (
    <PandView>
      <PandMenu data={pandtoc} />
      {!loading ? (
        <ToIndex
          path="/pand"
          to={path.join('pand', _.kebabCase(Object.values(pandtoc)[0][0].name))}
        />
      ) : (
        ''
      )}
      <Route path="/pand/:page" component={Page} />
    </PandView>
  );
});
