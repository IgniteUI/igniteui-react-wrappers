(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgRating", [
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
	var IgRating = createReactClass($.ig.react.core.buildComponent("igRating"));
	if (window) {
		window.IgRating = IgRating;
	}
	return IgRating;
}));
