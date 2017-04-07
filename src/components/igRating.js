(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgRating", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgRating = React.createClass($.ig.react.core.buildComponent("igRating"));
	if (window) {
		window.IgRating = IgRating;
	}
	return IgRating;
}));

