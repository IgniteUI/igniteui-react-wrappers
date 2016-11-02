function main() {
    describe("Basic test igHtmlEditor", function() {
        var val = "<p>Ignite UI controls:</p>";
        $.ig.react.test.async("igHtmlEditor", {
            value: val,
            height: "400px",
            width: "700px"
        }, function (e, c) {
            expect(c.igControl.getContent("html") === val).toBe(true);
        });
    });
}
exports.main = main;