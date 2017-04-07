(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgPopover", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgPopover = React.createClass($.ig.react.core.buildComponent("igPopover"));
	if (window) {
		window.IgPopover = IgPopover;
	}
	return IgPopover;
}));

