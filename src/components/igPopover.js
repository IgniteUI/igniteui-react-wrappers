(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgPopover", [
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
	var IgPopover = createReactClass($.ig.react.core.buildComponent("igPopover"));
	if (window) {
		window.IgPopover = IgPopover;
	}
	return IgPopover;
}));
