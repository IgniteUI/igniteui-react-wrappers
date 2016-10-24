function main() {
    describe("Test igBulletGraph", function() {
        $.ig.react.test.async("igBulletGraph", 
        {
            id: "igComponent",
            providerContainer: {},
            width: 300,
            height: 300
        });
    });
}
exports.main = main;