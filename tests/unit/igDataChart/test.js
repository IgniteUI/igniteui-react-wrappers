function main() {
    describe("long asynchronous specs", function() {
        it("causes an interval to be called synchronously", function(done) {
             var data = [{
                    "CountryName": "China",
                    "Pop1995": 1216,
                    "Pop2005": 1297,
                    "Pop2015": 1361,
                    "Pop2025": 1394
                }],
                opts = {
                    dataSource: data,
                    axes: [{
                            name: "NameAxis",
                            type: "categoryX",
                            title: "Country",
                            label: "CountryName"
                        },
                        {
                            name: "PopulationAxis",
                            type: "numericY",
                            minimumvalue: 0,
                            title: "Milions of People"
                        }],
                    series: [{
                            name: "2015Population",
                            type: "column",
                            isHighlightingEnabled: true,
                            isTransitionInEnabled: true,
                            xAxis: "NameAxis",
                            yAxis: "PopulationAxis",
                            valueMemberPath: "Pop2015"
                        }]
                };

            $.ig.react.test.createOrUpdateComponent(IgDataChart, {
                id: "igComponent",
                providerContainer: {},
                width: 300,
                height: 300
            });
            setTimeout(function () {
                expect($("#igComponent").data("igDataChart")).not.toBeUndefined();
                done();
            }, 300);
            
        });
    });
}
exports.main = main;