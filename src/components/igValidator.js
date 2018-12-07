(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgValidator", [
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
	var IgValidator = createReactClass($.ig.react.core.buildComponent("igValidator"));
	if (window) {
		window.IgValidator = IgValidator;
	}
	return IgValidator;
}));
