(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgBaseEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgBaseEditor = React.createClass($.ig.react.core.buildComponent("igBaseEditor"));
	if (window) {
		window.IgBaseEditor = IgBaseEditor;
	}
	return IgBaseEditor;
}));

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgTextEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgTextEditor = React.createClass($.ig.react.core.buildComponent("igTextEditor"));
	if (window) {
		window.IgTextEditor = IgTextEditor;
	}
	return IgTextEditor;
}));

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgNumericEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgNumericEditor = React.createClass($.ig.react.core.buildComponent("igNumericEditor"));
	if (window) {
		window.IgNumericEditor = IgNumericEditor;
	}
	return IgNumericEditor;
}));

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgCurrencyEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgCurrencyEditor = React.createClass($.ig.react.core.buildComponent("igCurrencyEditor"));
	if (window) {
		window.IgCurrencyEditor = IgCurrencyEditor;
	}
	return IgCurrencyEditor;
}));

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgPercentEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgPercentEditor = React.createClass($.ig.react.core.buildComponent("igPercentEditor"));
	if (window) {
		window.IgPercentEditor = IgPercentEditor;
	}
	return IgPercentEditor;
}));

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgMaskEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgMaskEditor = React.createClass($.ig.react.core.buildComponent("igMaskEditor"));
	if (window) {
		window.IgMaskEditor = IgMaskEditor;
	}
	return IgMaskEditor;
}));

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgDateEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgDateEditor = React.createClass($.ig.react.core.buildComponent("igDateEditor"));
	if (window) {
		window.IgDateEditor = IgDateEditor;
	}
	return IgDateEditor;
}));

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgDatePicker", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgDatePicker = React.createClass($.ig.react.core.buildComponent("igDatePicker"));
	if (window) {
		window.IgDatePicker = IgDatePicker;
	}
	return IgDatePicker;
}));

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgCheckboxEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgCheckboxEditor = React.createClass($.ig.react.core.buildComponent("igCheckboxEditor"));
	if (window) {
		window.IgCheckboxEditor = IgCheckboxEditor;
	}
	return IgCheckboxEditor;
}));

