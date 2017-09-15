import ReactDisqusThread from 'react-disqus-thread';
//import './index.scss';

export default ({location, loading}) => {
	const pathname = location.pathname;

	let title = pathname.replace('/', '-');

	if (title == '-') {
		title = '-home';
	}

	console.log('XMUED' + title);

	return (
		<ReactDisqusThread
			shortname="xmued"
			identifier={'xmued' + title}
			title={'xmued' + title}
			url={'https://ued.xiongmaojinku.com' + pathname}

		/>
	);
};