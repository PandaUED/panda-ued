import styled from 'styled-components';

export default ({ style, padding = true, ...other }) => {
  const View = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `;
  const Content = styled.div`
    padding-left: ${padding ? '50px' : 0};
    padding-right: ${padding ? '50px' : 0};
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 1280px;
    position: relative;
  `;
  return (
    <View style={style}>
      <Content {...other} />
    </View>
  );
};
