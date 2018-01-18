import React, { Component } from 'react';
import MainComponent from './components/MainComponent.js';

import "bootstrap/dist/css/bootstrap.min.css";

var App = React.createClass({
	render: function () {
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
					<h1 className="push-down-md"><a href="https://igniteui.com/data-chart/overview" target="_blank">igChart</a></h1>

					<div className="row description">
						<div className="alert alert-info col-md-5 try-it-out">
							<span className="h4">TRY IT OUT:</span>
							<hr />
							<ul>
								<li>Select a month and edit its revenue and expenses</li>
								<li>Change month's revenue or expenses, using the editors or using the linear gauge</li>
								<li>All the related components' data is changed and new overall year profit is calculated</li>
							</ul>
						</div>
						<div className="col-md-4">
							<p className="lead">This sample demonstrates how ReactJS can be used to create igChart, igCombo, igLinearGauge together with several different types of igEditors and how a communication between them can be implemented. </p>
							<p><a href="https://github.com/IgniteUI/igniteui-react/blob/master/samples/ig-financial-state/" className="btn btn-default btn-lg btn-primary" target="_blank"><i className="fa fa-code fa-lg"></i> View Source</a></p>
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
});

export default App;

