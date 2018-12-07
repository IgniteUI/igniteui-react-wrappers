(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgToolbar", [
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
	var IgToolbar = createReactClass($.ig.react.core.buildComponent("igToolbar"));
	if (window) {
		window.IgToolbar = IgToolbar;
	}
	return IgToolbar;
}));
