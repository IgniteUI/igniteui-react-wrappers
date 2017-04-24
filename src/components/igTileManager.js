(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgTileManager", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgTileManager = React.createClass($.ig.react.core.buildComponent("igTileManager"));
	if (window) {
		window.IgTileManager = IgTileManager;
	}
	return IgTileManager;
}));

