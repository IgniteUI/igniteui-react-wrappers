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
        var $e = $.ig.react.test.getElement(id);
        if (!$e.length) {
            id = id || $.ig.react.test.elementId;
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
})(jQuery);