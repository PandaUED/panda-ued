import './index.scss';

export default ({navData = [], packageData, ...other}) => (
	<footer {...other}>
		<ul className="container">
			{navData.map(data =>
				             <li key={data.title}>
					             <h2>{data.title}</h2>
					             {data.group.map(data =>
						                             <div key={data.name}>
							                             <a href={data.path}>
								                             {data.name}</a> - {data.title}
						                             </div>,
					             )}
				             </li>,
			)}
			<li>
				<div>{packageData.copyright}</div>
				<div>Powered by <a target="_blank " href={packageData.contact}>{packageData.author}</a></div>
				<div>Version: {packageData.version}</div>
			</li>
		</ul>
	</footer>
)

