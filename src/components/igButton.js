(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgButton", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgButton = React.createClass($.ig.react.core.buildComponent("igButton"));
	if (window) {
		window.IgButton = IgButton;
	}
	return IgButton;
}));

