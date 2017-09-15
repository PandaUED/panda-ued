import styled from 'styled-components'
export default ({style,padding= true,...other}) =>{
	const View = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	`
	const Content = styled.div`
	padding:${padding?`0 50px`:0};
	margin:0 auto;
	width: 100%;
	max-width:920px;
	position: relative;
	`
	return <View style={style}><Content {...other}/></View>
}