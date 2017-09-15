import React from 'react';
import { Router, Route } from 'dva/router';
import * as r from './routes';

export default ({history}) => {
	return (
		<Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
			<Route component={r.App}>

				<Route component={r.Home}>
					<Route path="/" component={r.HomeWebhook}/>
					<Route path="home">
						<Route path="webhook" component={r.HomeWebhook}/>
						<Route path="coding" component={r.HomeWebhook}/>
						<Route path="npm" component={r.HomeNpm}/>
						<Route path="readme" component={r.HomeReadme}/>
					</Route>
				</Route>

				<Route path="news" component={r.News}/>

				<Route path="library" component={r.Library}>
					<Route path="*" component={r.LibraryPage}/>
				</Route>

				<Route path="doc" component={r.Doc}>
					<Route path="sass/*" component={r.DocSass}/>
					<Route path="mobile/*" component={r.DocMobile}/>
				</Route>

				<Route path="tools" component={r.Tools}>
					<Route path="cover" component={r.ToolsCover}/>
					<Route path="pop" component={r.ToolsPop}/>
					<Route path="qiniu" component={r.ToolsQiniu}/>
				</Route>

				<Route path="preview/*" component={r.LibraryPreview}/>

			</Route>

		</Router>
	);
};
