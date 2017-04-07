(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgSlider", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgSlider = React.createClass($.ig.react.core.buildComponent("igSlider"));
	if (window) {
		window.IgSlider = IgSlider;
	}
	return IgSlider;
}));

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgProgressBar", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgProgressBar = React.createClass($.ig.react.core.buildComponent("igProgressBar"));
	if (window) {
		window.IgProgressBar = IgProgressBar;
	}
	return IgProgressBar;
}));

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgButton", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgButton = React.createClass($.ig.react.core.buildComponent("igButton"));
	if (window) {
		window.IgButton = IgButton;
	}
	return IgButton;
}));

