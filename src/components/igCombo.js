(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgCombo", [
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
	var IgCombo = createReactClass($.ig.react.core.buildComponent("igCombo"));
	if (window) {
		window.IgCombo = IgCombo;
	}
	return IgCombo;
}));
