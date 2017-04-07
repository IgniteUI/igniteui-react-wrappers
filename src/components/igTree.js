(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgTree", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgTree = React.createClass($.ig.react.core.buildComponent("igTree"));
	if (window) {
		window.IgTree = IgTree;
	}
	return IgTree;
}));

