(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgProgressBar", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgProgressBar = React.createClass($.ig.react.core.buildComponent("igProgressBar"));
	if (window) {
		window.IgProgressBar = IgProgressBar;
	}
	return IgProgressBar;
}));

