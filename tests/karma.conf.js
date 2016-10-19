module.exports = function(config) {
	var cfg = {
		basePath: "../",

		frameworks: ["jasmine"],

		files: [

			"http://code.jquery.com/jquery-1.12.4.js",
			"http://code.jquery.com/ui/1.11.4/jquery-ui.min.js",
			"http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.core.js",
			"http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.lob.js",
			"http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.dv.js",
			"https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js",

			// System.js for module loading
			"node_modules/systemjs/dist/system.src.js",

			// Polyfills
			"node_modules/core-js/client/shim.js",
			"node_modules/reflect-metadata/Reflect.js",

			// zone.js
			"node_modules/zone.js/dist/zone.js",
			"node_modules/zone.js/dist/long-stack-trace-zone.js",
			"node_modules/zone.js/dist/proxy.js",
			"node_modules/zone.js/dist/sync-test.js",
			"node_modules/zone.js/dist/jasmine-patch.js",
			"node_modules/zone.js/dist/async-test.js",
			"node_modules/zone.js/dist/fake-async-test.js",

			// Paths loaded via module imports:
			// React
			"node_modules/react/dist/react-with-addons.min.js",
			"node_modules/react-dom/dist/react-dom.min.js",

			// paths loaded via module imports
			// bundled react wrappers
			"dist/npm/*.min.js",

			// test files
			"tests/unit/render/*.js",
			"tests/unit/options/*.js"
		],

		// list of files to exclude
		exclude: [
		],

		autoWatch : true,

		browsers : ["Chrome"],

		singleRun: true,

		customLaunchers: {
			Chrome_travis_ci: {
				base: "Chrome",
				flags: ["--no-sandbox"]
			}
		},

		plugins : [
			"karma-chrome-launcher",
			"karma-jasmine",
			"karma-junit-reporter",
			"karma-coverage"
		],

		reporters: ["progress", "coverage"],

		coverageReporter: {
			reporters:[
				{ type: "lcov", dir:"coverage/karma-tmp/" },
				{ type: "json", dir:"coverage/karma-tmp", file: "coverage.json" }
			],
		},

		browserNoActivityTimeout: 20000
	};

	if (process.env.TRAVIS) {
		cfg.browsers = ["Chrome_travis_ci"];
	}
	config.set(cfg);
};