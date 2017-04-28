(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgUpload", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgUpload = React.createClass($.ig.react.core.buildComponent("igUpload"));
	if (window) {
		window.IgUpload = IgUpload;
	}
	return IgUpload;
}));

