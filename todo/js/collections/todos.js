/**
* Todo Collection.
*
* The collection of todos is backed by "localStorage" instaed of a remote server.
*/

var app = app || {};

var TodoList = Backbone.Collection.extend({
  // Reference to this collection's model.
  model: app.Todo,

  // Save all of the todo items under the 'todos-backbone' namespace.
  // Requires the Backbone.LocalStorage plugin.
  localStorage: new Backbone.LocalStorage('todos-backbone'),

  // Filter down the list of all todo items that are finished.
  completed: function() {
    return this.filter(function(todo) {
      return todo.get('completed');
    });
  },

  // Filter down the list to only todo items that are still not finished.
  remaining: function() {
    // apply allows us to define the context of "this" within our function scope.
    return this.without.apply(this, this.completed());
  },

  // We keep the Todos in sequential order, despite being saved by unordered
  // GUIDs in the database. This generates the next oder number for new items.
  nextOrder: function() {
    if (!this.length) {
      return 1;
    }
    return this.last().get('order') + 1;
  },

  // Todos are sorted by their original insertion order.
  comparator: function(todo) {
    return todo.get('order');
  }
});

// Create our global collection of "Todos".
app.Todos = new TodoList();
