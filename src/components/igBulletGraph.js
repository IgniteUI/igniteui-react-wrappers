(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgBulletGraph", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgBulletGraph = React.createClass($.ig.react.core.buildComponent("igBulletGraph"));
	if (window) {
		window.IgBulletGraph = IgBulletGraph;
	}
	return IgBulletGraph;
}));
