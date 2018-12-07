(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgMap", [
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
	var IgMap = createReactClass($.ig.react.core.buildComponent("igMap"));
	if (window) {
		window.IgMap = IgMap;
	}
	return IgMap;
}));
