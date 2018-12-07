(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgScroll", [
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
	var IgScroll = createReactClass($.ig.react.core.buildComponent("igScroll"));
	if (window) {
		window.IgScroll = IgScroll;
	}
	return IgScroll;
}));
