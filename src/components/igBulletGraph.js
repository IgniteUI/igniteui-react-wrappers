(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgBulletGraph", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgBulletGraph = React.createClass($.ig.react.core.buildComponent("igBulletGraph"));
	if (window) {
		window.IgBulletGraph = IgBulletGraph;
	}
	return IgBulletGraph;
}));

