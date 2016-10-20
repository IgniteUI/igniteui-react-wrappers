describe("igGrid component", function () {

	var data = { 
		"Products": [
			{ "ProductID": 1, "UnitsInStock": 989, "ProductDescription": "hhiivm", "UnitPrice": 661.3712164859154, "DateAdded": "2006-12-25T17:29:46.108" },
			{ "ProductID": 2, "UnitsInStock": 853, "ProductDescription": "v", "UnitPrice": 351.86312736564463, "DateAdded": "1997-06-18T07:28:54.737" },
			{ "ProductID": 3, "UnitsInStock": 226, "ProductDescription": "hwn", "UnitPrice": 322.57021792352674, "DateAdded": "2008-03-22T23:57:11.966" },
			{ "ProductID": 4, "UnitsInStock": 480, "ProductDescription": " os", "UnitPrice": 758.28264968389772, "DateAdded": "1998-04-10T02:06:32.486" },
			{ "ProductID": 5, "UnitsInStock": 290, "ProductDescription": "yaxrhvufbsj ", "UnitPrice": 245.75594870641641, "DateAdded": "1998-06-08T18:12:46.175" },
			{ "ProductID": 6, "UnitsInStock": 882, "ProductDescription": "jgggiuanb", "UnitPrice": 952.47738526783769, "DateAdded": "1996-08-13T02:18:57.885" },
			{ "ProductID": 7, "UnitsInStock": 277, "ProductDescription": "obgiuvxwpu", "UnitPrice": 365.10401748358458, "DateAdded": "2000-12-10T18:15:56.766" },
			{ "ProductID": 8, "UnitsInStock": 56, "ProductDescription": "uwvfycvhlx", "UnitPrice": 989.65917108098938, "DateAdded": "2004-04-17T05:46:07.239" },
			{ "ProductID": 9, "UnitsInStock": 143, "ProductDescription": "joismllpcpki", "UnitPrice": 928.07773916426936, "DateAdded": "2006-12-28T05:11:23.373" },
			{ "ProductID": 10, "UnitsInStock": 790, "ProductDescription": "wwh fp", "UnitPrice": 228.61830295464878, "DateAdded": "2005-10-12T07:35:48.515" }
		],
		"TotalRecordsCount": 10,
		"Metadata": {}
	};

	it("Should render a grid", function () {
		var grid, renderFunc = function () {
			grid = React.createElement(IgGrid, {
				id: "grid1",
				autoGenerateColumns: false,
				primaryKey: "ProductID",
				width: "700px",
				height: "500px",
				columns: [
					{ headerText: "Product ID", key: "ProductID", dataType: "number" },
					{ headerText: "Stock", key: "UnitsInStock", dataType: "number" },
					{ headerText: "Description", key: "ProductDescription", dataType: "string" },
					{ headerText: "UnitPrice", key: "UnitPrice", dataType: "number", format: "#.##" },
					{ headerText: "DateAdded", key: "DateAdded", dataType: "date", format: "dateTime" }
				],
				dataSource: sourceData,
				responseDataKey: "Products"
			});
		}
		expect(renderFunc).not.toThrow();
		expect($("#grid1").data("igGrid")).not.toBe(null);
		expect($("#grid1").igGrid("rows").length).toBe(10);
	});
});