/**
* @file
* Todo Router
*/

var Workspace = Backbone.Router.extend({
  routes: {
    '*filter': 'setFilter'
  },

  setFilter: function(param) {
    // Set the current filter to be used.
    app.TodoFilter = param || '';

    // Trigger a collection filter even, causing hiding/unhiding
    // of Todo view items.
    window.app.Todos.trigger('filter');
  }
});

app.TodoRouter = new Workspace();
Backbone.history.start();