(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgTileManager", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgTileManager = React.createClass($.ig.react.core.buildComponent("igTileManager"));
	if (window) {
		window.IgTileManager = IgTileManager;
	}
	return IgTileManager;
}));

