/**
* @file
*
* Main app.js file.
*/

var app = app || {};

$(function() {
  $('#releaseDate').datepicker();
  new app.LibraryView();
});