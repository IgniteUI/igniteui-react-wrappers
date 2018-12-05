(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgToolbarButton", [
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
	var IgToolbarButton = createReactClass($.ig.react.core.buildComponent("igToolbarButton"));
	if (window) {
		window.IgToolbarButton = IgToolbarButton;
	}
	return IgToolbarButton;
}));
