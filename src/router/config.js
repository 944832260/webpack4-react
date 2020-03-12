import { lazy } from 'react'



const Config = [
	{
		path: '/',
		component: lazy(() => import("@pages/home/home")),
		exact: true,
	},{
		path: '/login',
		component: lazy(() => import("@pages/login/login")),
		exact: true,
	},{
		path: "*",
		component: lazy(() => import("@pages/nopath/nopath")),
		exact: true,
	},
];


export default Config;
