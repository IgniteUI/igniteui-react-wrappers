(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgDialog", [
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
	var IgDialog = createReactClass($.ig.react.core.buildComponent("igDialog"));
	if (window) {
		window.IgDialog = IgDialog;
	}
	return IgDialog;
}));
