import { Typist } from '../index'
import './index.scss';

export default ({title, content = false, loading, home, ...other}) => {
	const type = (!loading && content) ? <Typist content={content}/> : null

	return (
		<div className="xm-components-showcase" {...other}>
			{(home)
				? <div className="container text-xs-center">
				 <div className="home-logo"/>
				 <div className="home-lead">
					 {title}
				 </div>
				 <div className="home-version">{type}</div>
			 </div>
				: <div className="container text-xs-center text-sm-left">
				 <h1>{title}</h1>
				 <div className="lead">
					 {type}
				 </div>
			 </div>}
		</div>
	);
}

