function main() {
    describe("Basic test igMap", function() {
        var opts = {
            id: "igComponent",
            height: "200px",
            width: "200px"
        };
        $.ig.react.test.async("igMap", opts);
    });
}
exports.main = main;