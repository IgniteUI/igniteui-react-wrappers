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

			// css files
			"http://cdn-na.infragistics.com/igniteui/latest/css/themes/infragistics/infragistics.theme.css",
			"http://cdn-na.infragistics.com/igniteui/latest/css/structure/infragistics.css",
			// System.js for module loading
			"node_modules/systemjs/dist/system.src.js",

			// Paths loaded via module imports:
			// React
			"node_modules/react/umd/react.production.min.js",
            "node_modules/react-dom/umd/react-dom.production.min.js",
            "node_modules/create-react-class/create-react-class.min.js",
            "node_modules/prop-types/prop-types.min.js",
			// paths loaded via module imports
			// bundled react wrappers
			//"dist/npm/igniteui-react.js",
			"src/util/**/*.js",
			"src/props/**/*.js",
			"src/components/**/*.js",

			// spec files need to be loaded in the shim file IN CONTEXT of the main module, don't include:            
            { pattern: 'tests/unit/**/*.js', included: false, watched: true },
			// test files
			"tests/util.js",
			"tests/karma-test-shim.js"
		],

		// list of files to exclude
		exclude: [
		],

		autoWatch : true,

		browsers : ["Chrome"],
		singleRun: false,

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

		preprocessors: {
			"src/util/**/*.js": ["coverage"]
		},

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