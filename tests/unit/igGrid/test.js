function main() {
    describe("Test igGrid", function () {
        it("Init igGrid and change options ", function () {
            var component;
             $.ig.react.test.createOrUpdateComponent(IgGrid, {
                id: "igComponent",
                width: 300,
                height: 300,
                autoGenerateColumns: true,
                dataSource: [{Id: 0, ProductName: "Test"}],
                initialized: function (c, e, igControl) {
                    component = c;
                }
            });
            expect($("#igComponent").data("igGrid")).not.toBeUndefined();
            $.ig.react.test.createOrUpdateComponent(IgGrid, {
                width: 500
            });
            expect($("#igComponent_table_container").width()).toBe(500);
            expect($.ig.react.core.getWidgetInstance(component, "igGrid") instanceof $.ui.igGrid)
                .toBe(true);
        });
    });
}
exports.main = main;
