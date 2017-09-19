const navBar = [
	{title: '指南', to: '/home'},
	{title: 'UI仓库', to: '/library'},
	{title: '组件库', to: '/pand'},
	{title: '资源', to: '/resource'}
];

const homeMenu = [
	{title: '项目管理', to: '/home/page/trello'},
	{title: 'UED日志', to: '/home/page/changelog'},
	{title: 'BUG走查', to: '/home/page/redmine'},
	{title: '最新资讯', to: '/home/page/news'},
	{title: '关于', to: '/home/about'}
];

const ResMenu = [
	{title: '资源下载', to: '/resource/download'},
	{title: '生成封面', to: '/resource/cover'},
	{title: '生成气泡', to: '/resource/pop'}
];

const footBar = {
	Coding : [
		{
			name : 'panda-ued',
			title: '仓库',
			to   : 'https://coding.net/u/canisminor1990/p/panda-ued'
		},
		{
			name : 'panda-deisgn',
			title: '组件库',
			to   : 'https://coding.net/u/canisminor1990/p/panda-design'
		},
		{
			name : 'panda-sketch',
			title: 'sketch仓库',
			to   : 'https://coding.net/t/xmjk-fe/p/xmSketch'
		}
	],
	Tools  : [
		{
			name : 'Trello',
			title: 'UED',
			to   : 'https://trello.com/b/WDGfmQRs/ued'
		},
		{
			name : 'Trello',
			title: 'FE',
			to   : 'https://trello.com/b/Ae62EniM/fe'
		},
		{
			name : 'Trello',
			title: 'PM',
			to   : 'https://trello.com/b/OeQCbM5j/%E4%BA%A7%E5%93%81%E8%BF%90%E8%90%A5'
		}
	],
	Website: [
		{
			name : '官网',
			title: '熊猫金库',
			to   : '//xiongmaojinku.com'
		},
		{
			name : 'NAS',
			title: '内网存储',
			to   : '//nas.xiongmaojinku.com'
		},
		{
			name : 'Wiaman',
			title: '智子',
			to   : '//zhizigroup.com'
		}
	]
};

const DownloadList = [
	{
		icon : 'sketch',
		title: 'Panda Sketch 3.0',
		desc : '熊猫金库 3.0 sketch 仓库',
		url  : 'https://coding.net/t/xmjk-fe/p/XmjkSketch/git'
	},
	{
		icon : 'sketch',
		title: 'Panda Sketch 1.0~2.0',
		desc : '熊猫金库 1.0~2.0 sketch 仓库',
		url  : 'https://coding.net/u/xmjk-fe/p/xmSketch/git'
	},
	{
		icon : 'sketch',
		title: 'Zhizi Sketch 1.0',
		desc : '智子 1.0 sketch 仓库',
		url  : 'https://coding.net/u/xmzhen/p/zhizi-sketch/git'
	},
	{
		icon : 'figma',
		title: 'Panda UX',
		desc : '熊猫金库3.0 交互',
		url  : 'https://www.figma.com/file/Zn33MoeVoIgz6El17SO4cRNj/%E7%86%8A%E7%8C%AB%E9%87%91%E5%BA%933.0-%E4%BA%A4%E4%BA%92'
	},
	{
		icon : 'figma',
		title: 'Panda UX Components',
		desc : '熊猫金库3.0 交互组件库',
		url  : 'https://www.figma.com/file/eN2ag3F7C9TkE8kWlnbOLNeF/%E4%BA%A4%E4%BA%92%E7%BB%84%E4%BB%B6%E5%BA%93'
	},
	{
		icon : 'name-organizer',
		title: 'Sketch Name Organizer',
		desc : 'sketch 命名管理插件',
		url  : 'https://github.com/canisminor1990/sketch-name-organizer'
	}
];

const gitment = {
	owner: 'canisminor1990',
	repo : 'panda-comments',
	oauth: {
		client_id    : '02fa8b502161ef0c498f',
		client_secret: '35631bd493e80ab463ff839a591e0c28257f9818'
	}
};

export { navBar, footBar, homeMenu, gitment, ResMenu, DownloadList };