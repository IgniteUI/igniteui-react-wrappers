(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgUpload", [
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
	var IgUpload = createReactClass($.ig.react.core.buildComponent("igUpload"));
	if (window) {
		window.IgUpload = IgUpload;
	}
	return IgUpload;
}));
