(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgBrowseButton", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgBrowseButton = React.createClass($.ig.react.core.buildComponent("igBrowseButton"));
	if (window) {
		window.IgBrowseButton = IgBrowseButton;
	}
	return IgBrowseButton;
}));

