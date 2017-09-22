import styled from 'styled-components';

export default ({ src }) => {
  const Phone = styled.div`
    margin-top: 1rem;
    margin-left: 2rem;
    background: url(/img/phone.png) no-repeat;
    width: ${878 / 2}px;
    height: ${1759 / 2}px;
    background-size: 100%;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  `;

  const PandFram = styled.iframe`
    overflow: hidden;
    margin-top: -1rem;
    border: none;
    box-shadow: 0 0 0 2px #f8f8f8;
  `;
  return (
    <Phone>
      <PandFram width={375} height={667} frameborder="no" src={src} />
    </Phone>
  );
};
