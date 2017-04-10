(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgVideoPlayer", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgVideoPlayer = React.createClass($.ig.react.core.buildComponent("igVideoPlayer"));
	if (window) {
		window.IgVideoPlayer = IgVideoPlayer;
	}
	return IgVideoPlayer;
}));

