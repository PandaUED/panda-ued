import styled from 'styled-components';

export default () => {
  const UEditor = styled.iframe`
    width: 100%;
    margin: 2rem;
    height: 46.5rem;
  `;

  return <UEditor src="http://hgs.xiumi.us/uedit/" frameBorder="none" scrolling="no" />;
};
