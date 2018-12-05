(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgSpreadsheet", [
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
	var IgSpreadsheet = createReactClass($.ig.react.core.buildComponent("igSpreadsheet"));
	if (window) {
		window.IgSpreadsheet = IgSpreadsheet;
	}
	return IgSpreadsheet;
}));
