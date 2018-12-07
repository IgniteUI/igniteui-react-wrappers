(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgNumericEditor", [
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
	var IgNumericEditor = createReactClass($.ig.react.core.buildComponent("igNumericEditor"));
	if (window) {
		window.IgNumericEditor = IgNumericEditor;
	}
	return IgNumericEditor;
}));
