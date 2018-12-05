(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgNotifier", [
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
	var IgNotifier = createReactClass($.ig.react.core.buildComponent("igNotifier"));
	if (window) {
		window.IgNotifier = IgNotifier;
	}
	return IgNotifier;
}));
