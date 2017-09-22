import { Link } from 'dva/router';
import { rgba } from 'polished';
import styled from 'styled-components';
import { style } from '../';

export default ({ data, ...other }) => {
  const pathname = window.location.pathname;

  const Menu = styled.div`
    min-width: 10rem;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
  `;

  const MenuItem = ({ title, to }) => {
    let Item = styled(Link)`
      display: block;
      text-align: center;
      line-height: 44px;
      border-radius: 22px;
      color: #666;
      margin-bottom: 1rem;
    `;

    if (pathname === to) {
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

  const MenuList = data.map((item, key) => (
    <MenuItem key={key} title={item.title} to={item.to} />
  ));

  return <Menu {...other}>{MenuList}</Menu>;
};
