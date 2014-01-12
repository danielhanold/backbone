/**
* @file
* Define book model.
*/

var app = app || {};

app.Book = Backbone.Model.extend({
  defaults: {
    coverImage: 'img/placeholder.png',
    title: 'No title',
    author: 'Unknown',
    releaseDate: 'Unknown',
    keywords: 'None',
  },

  // Parse function required when new models are
  // saved locally. The server stores the id of
  // a book as "_id", we need to account for that
  // here to keep everything in sync.
  parse: function(response) {
    response.id = response._id;
    return response;
  }
});