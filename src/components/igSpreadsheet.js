(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgSpreadsheet", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgSpreadsheet = React.createClass($.ig.react.core.buildComponent("igSpreadsheet"));
	if (window) {
		window.IgSpreadsheet = IgSpreadsheet;
	}
	return IgSpreadsheet;
}));
