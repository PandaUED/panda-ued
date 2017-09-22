import { Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

export default ({ ...other }) => {
  const Body = styled(Content)`padding-top: 5rem;`;
  return <Body {...other} />;
};
