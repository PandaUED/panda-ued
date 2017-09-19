import styled from 'styled-components';

export default ({src}) => {

	const Phone = styled.div`
		margin-top: 1rem;
		margin-left:2rem;
		background:url(/img/phone.png);
		width: ${878 / 2}px;
		height: ${1759 / 2}px;
		background-size: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	`;

	const PandFram = styled.iframe`
		margin-top: -1rem;
		border:none
	`;
	return (
		<Phone>
			<PandFram width={375} height={667} frameborder="no" src={src}/>
		</Phone>
	);
}