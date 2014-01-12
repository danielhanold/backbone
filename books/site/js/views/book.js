/**
* @file
*
* Book View.
*/

var app = app || {};

app.BookView = Backbone.View.extend({
  tagName: 'div',
  className: 'bookContainer',
  template: _.template($('#bookTemplate').html()),

  events: {
    'click button.delete': 'deleteBook',
  },

  initialize: function() {
    // When a model gets deleted, remove this view.
    this.listenTo(this.model, 'destroy', this.remove);
  },

  // Delete a book.
  deleteBook: function() {
    // Destroy the model.
    this.model.destroy();
  },

  render: function() {
    // this.el is what we defined in tagname. Use $el to get access
    // to jQuery html function.
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});