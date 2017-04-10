(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgCombo", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgCombo = React.createClass($.ig.react.core.buildComponent("igCombo"));
	if (window) {
		window.IgCombo = IgCombo;
	}
	return IgCombo;
}));

