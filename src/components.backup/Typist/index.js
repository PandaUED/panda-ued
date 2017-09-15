import Typist from 'react-typist';
import './index.scss';

export default ({content, ...other}) => {

	const opt = {
		show             : true,
		blink            : true,
		element          : ' _',
		hideWhenDone     : true,
		hideWhenDoneDelay: 3000
	}

	return (
		<Typist startDelay={500}
		        cursor={opt}
		        {...other}
		>
			{content}
		</Typist>
	);
}

