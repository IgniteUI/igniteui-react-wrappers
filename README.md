# Ignite UI Component Wrappers for React

[![Node.js CI](https://github.com/IgniteUI/igniteui-react-wrappers/actions/workflows/node.js.yml/badge.svg)](https://github.com/IgniteUI/igniteui-react-wrappers/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/IgniteUI/igniteui-react-wrappers/badge.svg?branch=master)](https://coveralls.io/github/IgniteUI/igniteui-react-wrappers?branch=master)
[![npm version](https://badge.fury.io/js/igniteui-react-wrappers.svg)](https://badge.fury.io/js/igniteui-react-wrappers)

Use the declarations available in `igniteui-react.js` (or `igniteui-react.min.js`) to use [Ignite UI](http://igniteui.com) controls as [React](https://facebook.github.io/react/) components. [Work with the running samples here](https://igniteui.github.io/igniteui-react-wrappers/).

**IMPORTANT** The package and repository have been renamed from `igniteui-react` to `igniteui-react-wrappers`.
There is a new product [Ignite UI for React](https://www.infragistics.com/products/ignite-ui-react) from Infragistics that you may want to consider when starting your next React project. It features a high-performance data grid, high-volume data charts and a complete Microsoft Excel Solution. Please check out the announcement [here](https://www.infragistics.com/community/blogs/b/infragistics/posts/announcing-ignite-ui-for-react-components).

# Requirements

- [jQuery](http://www.jquery.com) v1.9 and later
- [ReactJS](https://facebook.github.io/react/) 15.3.2 and later
- [Ignite UI](http://www.igniteui.com) 16.1 and later
- [Babel-Core](https://babeljs.io/) 5.8.38 and later for optional [JSX](https://facebook.github.io/jsx/) support

# Install

You can install the package with `npm`.

```shell
npm install igniteui-react-wrappers
```

# Build

The build will bundle all files available in `src/*` producing `dist/npm/igniteui-react.js` and then minify it producing `dist/npm/igniteui-react.min.js`. Either can be used for obtaining the Ignite UI React components, however, the minified file is preferable for production due to its reduced size. You need [Node.js](http://nodejs.org/) installed on your machine.

To build the project use the following steps:

1. Open a console in the folder where the **igniteui-react-wrappers** project is located
2. run `npm install`
3. run `npm run build`

`igniteui-react-wrappers` depends on the `ignite-ui-full` licensed package. Follow [this guide](https://www.igniteui.com/help/using-ignite-ui-npm-packages) on setting up access to the Ignite UI private npm feed and add the dependency to the `package.json`.

```
"dependencies": {
	"@infragistics/ignite-ui-full": "latest"
}
```

# Getting Started

## Ignite UI CLI
To get started with the Ignite UI CLI and the Ignite UI React wrappers:

```
npm i -g igniteui-cli
ig new <project name> --framework=react
cd <project name>
ig add combo <component name>
ig start
```

## Page setup

In the page markup include the Ignite UI React components bundle found in `dist/npm/igniteui-react.min.js` along with the Ignite UI scripts:

	<script src="jquery.min.js"></script>
	<script src="jquery-ui.min.js"></script>
	<script src="react.min.js"></script>

	<script src="infragistics.core.js"></script>
	<script src="infragistics.lob.js"></script>

	<script src="igniteui-react.min.js"></script>

Optionally include `browser.js` found in the `Babel-core` package for [JSX](https://facebook.github.io/jsx/) support.

	<script src="browser.js"></script>

This provides all supported Ignite UI components as React classes available in the global namespace.

## Initializing controls
In general React components can be initialized in two ways:

1. In `JavaScript` using React's API.
2. With pseudo-markup by utilizing `JSX` syntax.

#### Examples:

|  Control Name   |                 JavaScript                   |          JSX         |
|-----------------|----------------------------------------------|----------------------|
| igCombo         | `React.createElement(IgCombo, null);`        | `<IgCombo/>`         |
| igGrid          | `React.createElement(IgGrid, null);`         | `<IgGrid/>`          |
| igTreeGrid      | `React.createElement(IgTreeGrid, null);`     | `<IgTreeGrid/>`      |
| igDataChart     | `React.createElement(IgDataChart, null);`    | `<IgDataChart/>`     |
| igDialog        | `React.createElement(IgDialog, null);`       | `<IgDialog/>`        |
| igDateEditor    | `React.createElement(IgDateEditor, null);`   | `<IgDateEditor/>`    |
| igMaskEditor    | `React.createElement(IgMaskEditor, null);`   | `<IgMaskEditor/>`    |
| igNumericEditor | `React.createElement(IgNumericEditor, null);`| `<igNumericEditor/>` |
| igPercentEditor | `React.createElement(IgPercentEditor, null);`| `<igPercentEditor/>` |
| igTextEditor    | `React.createElement(IgTextEditor, null);`   | `<igTextEditor/>`    |
| igDatePicker    | `React.createElement(IgDatePicker, null);`   | `<igDatePicker/>`    |
| igTree          | `React.createElement(IgTree, null);`         | `<igTree/>`          |
| igMap           | `React.createElement(IgMap, null);`          | `<igMap/>`           |
| igUpload        | `React.createElement(IgUpload, null);`       | `<igUpload/>`        |
| igVideoPlayer   | `React.createElement(IgVideoPlayer, null);`  | `<igVideoPlayer/>`   |

**Note:** All Ignite UI React class names are in [PascalCase](https://en.wikipedia.org/wiki/PascalCase) so that they are [JSX-friendly](https://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components).

### Configuring Control Options

If you are using `JavaScript` options can be applied by adding them as an object to the `createElement` call. In `JSX` they are represented by attributes to the component's pseudo-element.

#### Examples:

|               Option               |                          JavaScript                            |                   JSX                    |
|------------------------------------|----------------------------------------------------------------|------------------------------------------|
| igGrid.options.autoGenerateColumns | `React.createElement(IgGrid, { autoGenerateColumns: false });` | `<IgGrid autoGenerateColumns={false} />` |
| igCombo.options.width              | `React.createElement(IgCombo, { width: "700px" });`            | `<IgCombo width="700px" />`              |

Defining complex type control options (`arrays` & `objects`) in `JSX` is done by wrapping their declarations braces `{}`.

#### Example:

	<IgGrid
		id="grid1"
		columns={[
			{ headerText: "Product ID", key: "ProductID", dataType: "number" },
			{ headerText: "Stock", key: "UnitsInStock", dataType: "number" },
			{ headerText: "Description", key: "ProductDescription", dataType: "string" },
			{ headerText: "UnitPrice", key: "UnitPrice", dataType: "number", format: "#.##" },
			{ headerText: "DateAdded", key: "DateAdded", dataType: "date", format: "dateTime" }
		]}
	/>

**Note:** Some Ignite UI controls require an `id` attribute for the DOM element they initialize on. It can be passed through the control's React class `id` property.

### Updating options

Option updates during runtime can be achieved by using React's [setState](https://facebook.github.io/react/docs/react-component.html#setstate) method. Some of Ignite UI widgets options are not settable at runtime. For these, prop changes have no effect.

#### Example:

	var App = React.createClass({
		getInitialState: function () {
			return {
				alternateRowStyles: true
			}
		},
		render: function () {
			return (
				<div>
					<IgGrid
						id="grid1"
						autoGenerateColumns={true}
						dataSource={sourceData}
						alternateRowStyles={this.state.alternateRowStyles}
					/>
					<button onClick={this.buttonClick}>Change</button>
				</div>
			);
		},
		buttonClick: function (evt) {
			this.setState({ alternateRowStyles: !this.state.alternateRowStyles });
		}
	});

### Handling events

Binding to control events is done by passing the event name as a property and assigning the handling function as its value.

#### Example:

	<IgTextEditor
		id="editor1"
		valueChanged={this.editorValueChanged}
	/>

In addition to the events available for each Ignite UI widget the React controls will also invoke the function passed for the `initialized` property when the widget is ready for use.

#### Example:

	<IgTextEditor
		id="editor1"
		initialized={this.controlInitialized}
	/>

### Calling widget methods

Calling widget methods can be done in two ways both utilizing functions available in the `$.ig.react.core` namespace. You can either obtain the widget's instance using the React component and its name directly.

#### Example:

```JavaScript
	$.ig.react.core.getWidgetInstance(gridComponent, "igGrid").commit();
```

Or get the DOM element it is initialized on and calling the method through jQuery UI's plugin.

#### Example:

```JavaScript
	$.ig.react.core.getElement(gridComponent).igGrid("commit");
```

## Running our samples:

Go to the folder of the sample you want to run:

	npm install
	npm start

Alternatively you can view them from [here](https://igniteui.github.io/igniteui-react-wrappers/).

## Testing

Testing IgniteUI React is done through Unit tests. All of them are written in [Jasmine](http://jasmine.github.io/).

#### Setup

	npm install

#### Running the tests

The easiest way to run the unit tests is to use the npm script:

	npm test

This will start the [Karma](http://karma-runner.github.io/0.12/index.html) test runner and execute the tests. By default the browser is Chrome.

### Code coverage

After running the Karma test a coverage file will be created for the `src/util/ignite-react.js` file containing the bulk of the functionality available for the Ignite UI React components.
The report is available at `coverage/karma-tmp/**/lcov-report/`.

---------------------------------------

## What is Ignite UI?

[![Ignite UI Logo](http://infragistics-blogs.github.io/github-assets/logos/igniteui.png)](http://igniteui.com)

[Ignite UI](http://igniteui.com/) is an advanced HTML5+ toolset that helps you create stunning, modern Web apps. Building on jQuery and jQuery UI, it primarily consists of feature rich, high-performing UI controls/widgets such as all kinds of charts, data visualization maps, (hierarchical, editable) data grids, pivot grids, enhanced editors (combo box, masked editors, HTML editor, date picker, to name a few), flexible data source connectors, and a whole lot more.  Too many to list here - check out [the site](http://igniteui.com/) for more info and to [download](https://igniteui.com/download) a trial.

Ignite UI is not just another library created in someone's free time. It is commercial-ready, extremely well-tested, tuned for top performance, designed for good UX, and backed by [Infragistics](http://www.infragistics.com/), an experience-focused company with a track record of over 24 years of experience in providing enterprise-ready, high-performance user interface tools for web, windows and mobile environments.

[![Infragistics Logo](http://infragistics-blogs.github.io/github-assets/logos/infragistics.png)](http://infragistics.com)
