/**
* @file
* Basic node server.
*/

// Module dependencies.
var applicationRoot = __dirname;
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

// Create server.
var app = express();

// Configure server.
app.configure(function() {
  // Prases requrest body and populates request.body.
  app.use(express.bodyParser());

  // Checks request.body for HTTP method overrides.
  app.use(express.methodOverride());

  // Perform route lookup based on URL and HTTP method.
  app.use(app.router);

  // Defines where to server static content.
  app.use(express.static(path.join(applicationRoot, 'site')));

  // Show all errors in development.
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

// Start server.
var port = 4711;
app.listen(port, function() {
  console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});