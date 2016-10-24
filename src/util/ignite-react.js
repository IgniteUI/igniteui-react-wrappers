(function (React, $) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.core = $.ig.react.core || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};

	$.ig.react.configWidgets = $.ig.react.configWidgets || {};

	$.ig.react.core.getElement = function (component) {
		return ReactDOM.findDOMNode(component);
	};
	$.ig.react.core.getWidgetInstance = function (component, name) {
		name = name || component.widgetName;
		return $($.ig.react.core.getElement(component)).data(name);
	};
	$.ig.react.core.mount = function (component, name) {
		var e = $.ig.react.core.getElement(component), $e = $(e),
			funcInitialized = component.props.initialized;
		// initialize widget
		$e[name](component.props);
		component.igControl = $e.data(name);
		component.widgetName = name;
		// if property initialized is set then call it
		if (funcInitialized) {
			$.ig.util.invokeCallback(funcInitialized,
				[component, e, component.igControl]
			);
		}
	};
	$.ig.react.core.update = function (component, nextProps) {
		var c = component,
			element = $.ig.react.core.getElement(component),
			op, np, t, option,
			changedOpts,
			oldProps = c.props,
			funcUpdate = c.props.shouldComponentUpdate;
		if (funcUpdate) {
			return $.ig.util.invokeCallback(funcUpdate, [
				component,
				element,
				component.widgetName,
				nextProps]);
		}
		// get changed primitive properties
		for (np in nextProps) {
			if (nextProps.hasOwnProperty(np)) {
				t = $.type(nextProps[np]);
				if (t !== "object" && t !== "array" &&
					nextProps[np] !== oldProps[np]) {
					changedOpts = changedOpts || {};
					changedOpts[np] = nextProps[np];
				}
			}
		}
		if (changedOpts) {
			$(element)[component.widgetName]("option", changedOpts);
		}
		return false;
	};
	$.ig.react.core.unmount = function (component) {
		$($.ig.react.core.getElement(component))[component.widgetName]("destroy");
	};

	////////////

	$.ig.react.core.buildComponent = function (name) {
		var config = ($.ig.react.core.configWidgets || {})[name] || {};
		return $.extend({
			render: function () {
				return React.createElement("div", { id: this.props.id }, this.props.children);
			},
			componentDidMount: function () {
				$.ig.react.core.mount(this, name);
			},
			propTypes: $.ig.react.propTypes[name],
			shouldComponentUpdate: function (nextProps) {
				return $.ig.react.core.update(this, nextProps);
			},
			componentWillUnmount: function () {
				$.ig.react.core.unmount(this);
			}
		}, config)
	};
}) (React, jQuery);