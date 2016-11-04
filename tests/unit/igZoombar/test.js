function main() {
    describe("Basic test igZoombar", function() {
        var data = [{
            "CountryName": "China",
            "Pop1995": 1216,
            "Pop2005": 1297,
            "Pop2015": 1361,
            "Pop2025": 1394
        }],
        chartOpts = {
            id: "datachart1",
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
        $.ig.react.test.createOrUpdateComponent(IgDataChart, chartOpts, "datachart1_wrapper");
        $.ig.react.test.async("igZoombar", {
            id: "igComponent",
            target: "#datachart1"
        });
    });
}
exports.main = main;