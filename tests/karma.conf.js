module.exports = function(config) {
	config.set({
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
		plugins: [
			require('karma-jasmine'),
			require('karma-coverage'),
			require('karma-chrome-launcher'),
			require('karma-jasmine-html-reporter')
		],
		crossOriginAttribute: false,
		client: {
		  clearContext: false // leave Jasmine Spec Runner output visible in browser
		},
		preprocessors: {
			'src/**/*.js': ['coverage']
		},
		coverageReporter: {
			dir: require('path').join(__dirname, '../coverage/'),
			subdir: '.',
			reporters: [
			  { type: 'lcovonly' }
			]
		},
		reporters: ['progress', 'coverage'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
		restartOnFileChange: true
	});
};