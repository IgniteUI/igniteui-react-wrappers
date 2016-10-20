describe("Init IgniteUI components", function () {
	var suite = $.ig.react.propTypes, component;

	for (component in suite) {
		if (suite.hasOwnProperty(component) && component.startsWith("ig")) {
			it("should fail when no id is supplied for component: " + component, function () {
				//var createComponent = function () {
				//	React.createElement(window[component], {});
				//}
				//expect(createComponent).toThrow();
			});

			it("has to render an " + component, function () {
				
			});
		}
	}
});