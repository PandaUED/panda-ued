import { Link } from 'dva/router';
import { highlightAuto } from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import marked from 'marked';
import styles from './index.scss';

marked.setOptions({
	                  renderer   : new marked.Renderer(),
	                  gfm        : true,
	                  tables     : true,
	                  breaks     : false,
	                  pedantic   : false,
	                  sanitize   : false,
	                  smartLists : true,
	                  smartypants: false,
	                  highlight  : (code) => highlightAuto(code).value
                  });
export default ({data = '', className, ...other}) => {
	return (
		<div className={[styles.markdown, className].join(' ')}
		     dangerouslySetInnerHTML={{__html: marked(data)}}
		     {...other}
		/>
	);
}