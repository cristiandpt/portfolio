export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BzSTbDPP.js","app":"_app/immutable/entry/app.jThC8Ua3.js","imports":["_app/immutable/entry/start.BzSTbDPP.js","_app/immutable/chunks/entry.Dicul6aY.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/entry/app.jThC8Ua3.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DWCX8Res.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/hello",
				pattern: /^\/hello\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
