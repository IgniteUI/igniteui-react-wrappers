(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgCurrencyEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgCurrencyEditor = React.createClass($.ig.react.core.buildComponent("igCurrencyEditor"));
	if (window) {
		window.IgCurrencyEditor = IgCurrencyEditor;
	}
	return IgCurrencyEditor;
}));
