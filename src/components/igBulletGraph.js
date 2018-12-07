(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgBulletGraph", [
			"react",
			"jquery",
			"create-react-class",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery, createReactClass);
	}
}
(function (React, $, createReactClass) {
	var IgBulletGraph = createReactClass($.ig.react.core.buildComponent("igBulletGraph"));
	if (window) {
		window.IgBulletGraph = IgBulletGraph;
	}
	return IgBulletGraph;
}));
