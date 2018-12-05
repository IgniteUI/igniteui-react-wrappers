(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgBrowseButton", [
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
	var IgBrowseButton = createReactClass($.ig.react.core.buildComponent("igBrowseButton"));
	if (window) {
		window.IgBrowseButton = IgBrowseButton;
	}
	return IgBrowseButton;
}));
