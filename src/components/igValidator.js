(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgValidator", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgValidator = React.createClass($.ig.react.core.buildComponent("igValidator"));
	if (window) {
		window.IgValidator = IgValidator;
	}
	return IgValidator;
}));













