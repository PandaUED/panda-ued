import styled from 'styled-components';

export default () => {
  const ImgView = styled.div`
    > img {
      width: 100%;
      margin-bottom: -0.3rem;
      box-sizing: border-box;
    }
  `;

  const imgListView = [];

  for (let i = 2; i <= 10; i++) {
    imgListView.push(<img alt="About" key={i} src={`/img/p_xm/xm_${i}.png`} />);
  }
  return (
    <div>
      <ImgView padding={false}>{imgListView}</ImgView>
    </div>
  );
};
