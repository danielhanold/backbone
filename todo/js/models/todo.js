/**
* @file
* Todo Model.
*
* Our basic Todo model has 'title', 'order', and 'completed' attributes.
*/

var app = app || {};

app.Todo = Backbone.Model.extend({
  // Default attrbitues ensure that each todo creates has
  // 'title' and 'completed' keys.
  defaults: {
    title: '',
    completed: false
  },

  // Toggle the 'completed' state of this todo item.
  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }
});

