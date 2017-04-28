(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgLayoutManager", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgLayoutManager = React.createClass($.ig.react.core.buildComponent("igLayoutManager"));
	if (window) {
		window.IgLayoutManager = IgLayoutManager;
	}
	return IgLayoutManager;
}));

