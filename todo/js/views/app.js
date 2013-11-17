/**
* @file
*
* The Application.
*/

var app = app || {};

// Our overall "AppView" is the top-level piece of UI.
app.AppView = Backbone.View.extend({
  // Instead of generatinga  new element, bin to the extisting skeleton
  // of the app already prsent in the HTML.
  el: '#todoapp',

  // Our template for the line of statistics at the bottom of the app.
  statsTemplate: _.template($('#stats-template').html()),

  // At initialization, we bind to the relvent events on the "Todos" collection,
  // when items are added or changed.
  initialize: function() {
    this.allCheckbox = this.$('#toggle-all')[0];
    this.$input = this.$('#new-todo');
    this.$footer = this.$('#footer');
    this.$.main = this.$('#main');

    this.listenTo(app.Todos, 'add', this.addOne);
    this.listenTo(app.Todos, 'reset', this.addAll);
  },

  // Add a single todo item to the list by creating a view for it,
  // and appending its element to the '<ul>'.
  addOne: function(todo) {
    var view = new app.TodoView({model: todo});
    $('#todo-list').append(view.render().el);
  },

  //Add all items in the "Todos" collection at once.
  addAll: function() {
    this.$('todo-list').html('');
    app.Todos.each(this.addOne, this);e
  }
});