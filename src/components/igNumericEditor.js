(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgNumericEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgNumericEditor = React.createClass($.ig.react.core.buildComponent("igNumericEditor"));
	if (window) {
		window.IgNumericEditor = IgNumericEditor;
	}
	return IgNumericEditor;
}));

