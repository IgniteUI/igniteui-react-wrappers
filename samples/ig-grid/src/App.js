import React, { Component } from 'react';
import MainComponent from './components/MainComponent';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="navbar navbar-default navbar-fixed-top" role="navigation">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="/">Ignite UI ReactJS Component</a>
						</div>
						<div className="navbar-collapse collapse">
							<ul className="nav navbar-nav">
								<li><a href="/igniteui-react/index.html">Home</a></li>
								<li><a href="https://github.com/IgniteUI/igniteui-react">View on GitHub <i className="fa fa-github"></i></a></li>
							</ul>
						</div>
					</div>
				</div>

				<div>
					<h1 className="push-down-md"><a href="https://igniteui.com/grid/overview" target="_blank">igGrid</a></h1>

					<div className="row description">
						<div className="alert alert-info col-md-5 try-it-out">
							<span className="h4">TRY IT OUT:</span>
							<hr />
							<ul>
								<li>Select a row that you would like to edit</li>
								<li>Change a product's name in the group of textboxes below, click update and see how the names change in the grid</li>
								<li>Delete a product either through the grid's UI or with the button bellow the current selected product in the window next to the grid</li>
							</ul>
						</div>
						<div className="col-md-4">
							<p className="lead">This sample demonstrates how ReactJS can be used to create igGrid and add two-way data binding. </p>
							<p><a href="https://github.com/IgniteUI/igniteui-react/blob/master/samples/ig-grid/" className="btn btn-default btn-lg btn-primary" target="_blank"><i className="fa fa-code fa-lg"></i> View Source</a></p>
						</div>
					</div>

					<MainComponent/>
				</div>

				<footer>
					<p>
						<a href="/igniteui-react/index.html">Home</a> |
						<a href="https://github.com/IgniteUI/igniteui-react/issues">Feedback &amp; Questions</a> |
						<a href="https://github.com/IgniteUI/igniteui-react">Clone &amp; Fork</a>
					</p>
					<p className="small">For more information or to download a trial of Ignite UI, please visit: <a href="https://igniteui.com">https://igniteui.com</a></p>
				</footer>

			</div>
		);
	}
}

export default App;
