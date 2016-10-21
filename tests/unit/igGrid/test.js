function main() {
    describe("Test igGrid", function () {
        it("Init igGrid and change options ", function () {
             $.ig.react.test.createOrUpdateComponent(IgGrid, {
                id: "igComponent",
                width: 300,
                height: 300,
                autoGenerateColumns: true,
                dataSource: [{Id: 0, ProductName: "Test"}]
            });
            expect($("#igComponent").data("igGrid")).not.toBeUndefined();
            $.ig.react.test.createOrUpdateComponent(IgGrid, {
                width: 500
            });
            expect($("#igComponent_table_container").width()).toBe(500);
        });
    });
}
exports.main = main;
