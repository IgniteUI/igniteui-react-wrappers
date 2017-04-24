(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgToolbar", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgToolbar = React.createClass($.ig.react.core.buildComponent("igToolbar"));
	if (window) {
		window.IgToolbar = IgToolbar;
	}
	return IgToolbar;
}));

