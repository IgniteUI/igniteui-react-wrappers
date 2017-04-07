(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgMap", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgMap = React.createClass($.ig.react.core.buildComponent("igMap"));
	if (window) {
		window.IgMap = IgMap;
	}
	return IgMap;
}));



