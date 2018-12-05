(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgLayoutManager", [
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
	var IgLayoutManager = createReactClass($.ig.react.core.buildComponent("igLayoutManager"));
	if (window) {
		window.IgLayoutManager = IgLayoutManager;
	}
	return IgLayoutManager;
}));
