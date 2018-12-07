(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgVideoPlayer", [
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
	var IgVideoPlayer = createReactClass($.ig.react.core.buildComponent("igVideoPlayer"));
	if (window) {
		window.IgVideoPlayer = IgVideoPlayer;
	}
	return IgVideoPlayer;
}));
