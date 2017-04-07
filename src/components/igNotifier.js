(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgNotifier", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgNotifier = React.createClass($.ig.react.core.buildComponent("igNotifier"));
	if (window) {
		window.IgNotifier = IgNotifier;
	}
	return IgNotifier;
}));

