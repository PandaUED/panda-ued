import { Link } from 'dva/router';
import _ from 'lodash';
import path from 'path';
import { rgba } from 'polished';
import styled from 'styled-components';
import { style } from '../';

export default ({ data, ...other }) => {
  if (!data) return <div />;

  const pathname = window.location.pathname;
  const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem 0;
  `;

  const MenuItem = ({ title, to }) => {
    let Item = styled(Link)`
      display: block;
      text-align: left;
      padding: 0 3rem;
      line-height: 44px;
      border-radius: 22px;
      color: #999;
      margin-bottom: 1rem;
      background: #f8f8f8;
    `;

    if (pathname.indexOf(path.join('library', to)) !== -1) {
      Item = Item.extend`
        background: ${style.gradient.primary(-45)};
        color: #fff;
        box-shadow: 0 4px 8px 0 ${rgba(style.color.primary, 0.4)};
        &:hover {
          color: #fff;
        }
      `;
    }
    return <Item to={to} children={title} />;
  };
  const List = [];

  const Title = styled.div`
    font-size: 1.2rem;
    color: #444;
    font-weight: 600;
    margin: 2rem 0 1rem;
  `;

  _.forEach(data, (item, key) => {
    List.push(<Title key={key}>{key}</Title>);
    _.forEach(item, page => {
      List.push(<MenuItem key={key + page} title={page} to={page} />);
    });
  });

  return <Menu {...other}>{List}</Menu>;
};
