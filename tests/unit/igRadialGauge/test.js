function main() {
    describe("Basic test igRadialGauge", function() {
        var opts = {
            id: "igComponent",
            height: "80px",
            width: "100%",
            value: 27,
            maximumValue: 30,
            ranges: [{ startValue: 0, endValue: 22, name: "target" }]
        };
        $.ig.react.test.async("igRadialGauge", opts);
    });
}
exports.main = main;