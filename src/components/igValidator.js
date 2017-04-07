(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgValidator", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgValidator = React.createClass($.ig.react.core.buildComponent("igValidator"));
	if (window) {
		window.IgValidator = IgValidator;
	}
	return IgValidator;
}));













