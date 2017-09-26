import prism from 'prismjs';
import bash from 'prismjs/components/prism-bash';
import sass from 'prismjs/components/prism-sass';
import json from 'prismjs/components/prism-json';
import jsx from 'prismjs/components/prism-jsx';
import md from 'prismjs/components/prism-markdown';
import yaml from 'prismjs/components/prism-yaml';
import marked from 'marked';
import styles from './index.scss';

const extensions = {
  bash,
  js: jsx,
  scss: sass,
  sass,
  json,
  md,
  yaml,
  html: 'markup',
  ejs: 'markup',
  svg: 'markup',
  xml: 'markup',
  py: 'python',
  rb: 'ruby',
};

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: (code, lang) => {
    const language = !prism.languages.hasOwnProperty(lang)
      ? extensions[lang] || 'markup'
      : lang;
    return prism.highlight(code, prism.languages[language]);
  },
});
export default ({ data = '', className, ...other }) => {
  return (
    <div
      className={[styles.markdown, className].join(' ')}
      dangerouslySetInnerHTML={{ __html: marked(data) }}
      {...other}
    />
  );
};
