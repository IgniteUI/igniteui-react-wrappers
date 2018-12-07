(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgTileManager", [
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
	var IgTileManager = createReactClass($.ig.react.core.buildComponent("igTileManager"));
	if (window) {
		window.IgTileManager = IgTileManager;
	}
	return IgTileManager;
}));
