const navBar = [
	{title: '指南', to: '/home'},
	{title: 'UI仓库', to: '/library'},
	{title: '组件库', to: '/pand'},
	{title: '资源', to: '/resource'}
];

const homeMenu = [
	{title: '项目管理', to: '/home/trello'},
	{title: 'UED日志', to: '/home/changelog'},
	{title: 'BUG走查', to: '/home/redmine'},
	{title: '最新资讯', to: '/home/news'}
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

export { navBar, footBar, homeMenu };