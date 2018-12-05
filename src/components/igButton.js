(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgButton", [
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
	var IgButton = createReactClass($.ig.react.core.buildComponent("igButton"));
	if (window) {
		window.IgButton = IgButton;
	}
	return IgButton;
}));
