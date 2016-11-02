function main() {
    describe("Basic test igLinearGauge", function() {
        var opts = {
            id: "igComponent",
            height: "80px",
            width: "100%",
            value: 27,
            maximumValue: 30,
            ranges: [{ startValue: 0, endValue: 22, name: "target" }]
        };
        $.ig.react.test.async("igLinearGauge", opts);
    });
}
exports.main = main;