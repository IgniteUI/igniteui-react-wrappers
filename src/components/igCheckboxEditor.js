(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgCheckboxEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgCheckboxEditor = React.createClass($.ig.react.core.buildComponent("igCheckboxEditor"));
	if (window) {
		window.IgCheckboxEditor = IgCheckboxEditor;
	}
	return IgCheckboxEditor;
}));

