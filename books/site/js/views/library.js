/**
* @file
*
* Library View.
*/

var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: '#books',

  initialize: function() {
    // Render initial books.
    this.collection = new app.Library();
    this.collection.fetch({reset: true});
    this.render();

    // When a new book gets added to the library, add it.
    this.listenTo(this.collection, 'add', this.renderBook);

    // When the collection gets reset, render the library view.
    // Requires since collection.fetch loads data asynchronously.
    this.listenTo(this.collection, 'reset', this.render);
  },


  events: {
    'click button#add': 'addBook'
  },

  // Add a book.
  addBook: function(e) {
    e.preventDefault();
    var formData = {};

    $('#addBook div').children('input').each(function(i, el) {
      if ($(el).val() != '') {
        if (el.id === 'keywords') {
          formData[el.id] = [];
          _.each($(el).val().split(' '), function(keyword) {
            formData[el.id].push({
              'keyword': keyword
            });
          });
        } else if (el.id === 'releaseDate') {
          formData[el.id] = $('#releaseDate').datepicker('getDate').getTime();
        } else {
          formData[el.id] = $(el).val();
        }
      }
      // Clear input field value
      $(el).val('');
    });

    this.collection.create(formData);
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