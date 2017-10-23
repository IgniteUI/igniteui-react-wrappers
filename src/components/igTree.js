(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgTree", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgTree = React.createClass($.ig.react.core.buildComponent("igTree"));
	if (window) {
		window.IgTree = IgTree;
	}
	return IgTree;
}));
