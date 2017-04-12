(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgTreeGrid", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgTreeGrid = React.createClass($.ig.react.core.buildComponent("igTreeGrid"));
	if (window) {
		window.IgTreeGrid = IgTreeGrid;
	}
	return IgTreeGrid;
}));

