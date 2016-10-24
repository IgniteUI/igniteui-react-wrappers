(function ($) {
    $.ig = $.ig || {};
	$.ig.react = $.ig.react || {};

    $.ig.react.test = $.ig.react.test || {};
    $.ig.react.test.elementId = "testbed";
    $.ig.react.test.getElement = function (id) {
        id = id || $.ig.react.test.elementId; 
        return $("#" + id);
    };
    $.ig.react.test.getOrCreateElement = function (id) {
        id = id || $.ig.react.test.elementId;
        var $e = $.ig.react.test.getElement(id);
        if (!$e.length) {
            $e = $("<div id=\"" + id +"\"></div>")
                    .appendTo(document.body); 
        }
        return $e;
    };
    $.ig.react.test.emptyElement = function (id) {
        $.ig.react.test.getElement(id).empty();
    };
    $.ig.react.test.createOrUpdateComponent = function (component, options, elementId) {
        options = options || {};
        ReactDOM.render(React.createElement(component, options), 
            $.ig.react.test.getOrCreateElement(elementId)[0]);
    };
    $.ig.react.test.async = function (componentName, options, callback, timeout) {
        it("Test component " + componentName, function (done) {
            var initCalled = false,
                component = null,
                id = options.id || "igComponent",
                reactCompName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
            options.id = id;
            options.initialized = options.initialized ||
                function (c, e, igControl) { initCalled = true; component = c;};
            $.ig.react.test.createOrUpdateComponent(window[reactCompName], options); 
            expect($("#" + id).data(componentName)).not.toBeUndefined();
            setTimeout(function () {
                expect(initCalled).toBe(true);
                expect(component instanceof window[reactCompName])
                    .toBe(true);
                if (callback) {
                    callback(id, component);
                }
                done();
            }, timeout || 300);
        });
    };
})(jQuery);