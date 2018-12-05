(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgEditorFilter", [
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
	var IgEditorFilter = createReactClass($.ig.react.core.buildComponent("igEditorFilter"));
	if (window) {
		window.IgEditorFilter = IgEditorFilter;
	}
	return IgEditorFilter;
}));
