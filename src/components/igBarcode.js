(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgQRCodeBarcode", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgQRCodeBarcode = React.createClass($.ig.react.core.buildComponent("igQRCodeBarcode"));
	if (window) {
		window.IgQRCodeBarcode = IgQRCodeBarcode;
	}
	return IgQRCodeBarcode;
}));

