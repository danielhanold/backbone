/**
* @file
* Todo Item View.
*/

var app = app || {};

// The DOM element for a todo item.
app.TodoView = Backbone.View.extend({
  // Define the tag name.
  tagName: 'li',

  // Cache the template function for a single todo item.
  template: _.template($('#item-template').html()),

  // The DOm events specific to an item.
  events: {
    'click .toggle': 'toggleCompleted',
    'dblclick label': 'edit',
    'click .destroy': 'clear',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  // The todoView listens for changes to its model, rerending.
  // Since there's a one-to-one correspondence between a "Todo" and a "TodoView"
  // in this app, we set a direct reference on the model for convenience.
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'visible', this.toggleVisible);
  },

  // Rerenders the titles of the todo item.
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    this.$el.toggleClass('completed', this.model.get('completed'));
    this.toggleVisible();

    this.$input = this.$('.edit');
    return this;
  },

  // Switch this view into 'editing' mode, displaying the input field.
  edit: function() {
    this.$el.addClass('editing');
    this.$input.focus();
  },

  // Toggles visibility of this Todo.
  toggleVisible: function() {
    this.$el.toggleClass('hidden', this.isHidden());
  },

  // Determines if the item should be hidden.
  isHidden: function() {
    var isCompleted = this.model.get('completed');
    // Hidden cases only.
    return ((!isCompleted && app.TodoFilter === 'completed') || (isCompleted && app.TodoFilter === 'active'));
  },

  // Toggle the "completed" state of the model.
  toggleCompleted: function() {
    this.model.toggle();
  },

  // Close the 'editing' mode, saving changes to the Todo.
  close: function() {
    var value = this.$input.val().trim();

    if (value) {
      this.model.save({
        title: value
      });
    }
    else {
      this.clear();
    }

    this.$el.removeClass('editing');
  },

  // If you hit "enter", we're done editing the item.
  updateOnEnter: function(e) {
    if (e.which === ENTER_KEY) {
      this.close();
    }
  },

  // Remove the item, destroy the model from "localStorage" and delete its view.
  clear: function() {
    this.model.destroy();
  }
});