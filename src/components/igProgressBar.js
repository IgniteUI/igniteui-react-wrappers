(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgProgressBar", [
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
	var IgProgressBar = createReactClass($.ig.react.core.buildComponent("igProgressBar"));
	if (window) {
		window.IgProgressBar = IgProgressBar;
	}
	return IgProgressBar;
}));
