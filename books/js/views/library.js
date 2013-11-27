/**
* @file
*
* Library View.
*/

var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: '#books',

  initialize: function(initialBooks) {
    this.collection = new app.Library(initialBooks);
    this.render();
  },

  // Render library by rendering each book in its collection.
  render: function() {
    this.collection.each(function(item) {
      this.renderBook(item);
    }, this);
  },

  // Render a book by creating a BookView and appending the
  // element it renders to the library's element.
  renderBook: function(item) {
    var bookView = new app.BookView({
      model: item
    });
    this.$el.append(bookView.render().el);
  },
});