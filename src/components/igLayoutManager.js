(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgLayoutManager", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgLayoutManager = React.createClass($.ig.react.core.buildComponent("igLayoutManager"));
	if (window) {
		window.IgLayoutManager = IgLayoutManager;
	}
	return IgLayoutManager;
}));


