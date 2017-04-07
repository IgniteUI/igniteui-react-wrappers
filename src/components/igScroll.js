(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgScroll", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgScroll = React.createClass($.ig.react.core.buildComponent("igScroll"));
	if (window) {
		window.IgScroll = IgScroll;
	}
	return IgScroll;
}));

