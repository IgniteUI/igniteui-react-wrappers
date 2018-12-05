(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgQRCodeBarcode", [
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
	var IgQRCodeBarcode = createReactClass($.ig.react.core.buildComponent("igQRCodeBarcode"));
	if (window) {
		window.IgQRCodeBarcode = IgQRCodeBarcode;
	}
	return IgQRCodeBarcode;
}));
