(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgSplitButton", [
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
	var IgSplitButton = createReactClass($.ig.react.core.buildComponent("igSplitButton"));
	if (window) {
		window.IgSplitButton = IgSplitButton;
	}
	return IgSplitButton;
}));
