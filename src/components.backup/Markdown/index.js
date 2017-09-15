import { Spin } from 'antd';

import './index.scss';

export default ({markdown = {}, loading, showTitle = true}) => {
	
	if (!loading) {
		$(() => {
			$('.markdown > div > table').each(function () {
				$(this).wrap("<div class='markdown-table'></div>");
			})
			$('.markdown > div  pre > code').each(function () {
				let className = $(this).attr("class").split('-')[1]
				switch (className) {
					case "sh":
						className = "bash"
						break;
					case "md":
						className = "markdown"
						break;
					case "xml":
						className = "yaml"
						break;
				}
				$(this).parent('pre').attr("class", `line-numbers`)
				$(this).attr("class", `language-${className}`)
				$(this).html(Prism.highlight($(this).text(), Prism.languages[className]))
			})
			
		})
		
	}
	
	return (
		<Spin spinning={loading} size="large">
			<div className="markdown">
				{(showTitle) ? <h1 id="markdown-title">{markdown.title}<span>{markdown.name}</span></h1> : null}
				<div dangerouslySetInnerHTML={{__html: markdown.body.replace(/[\‘\’]/g, "'")}}/>
			</div>
		</Spin>
	);
};
