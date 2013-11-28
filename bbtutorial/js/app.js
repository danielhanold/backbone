var SearchView = Backbone.View.extend({
  initialize: function() {
    console.log('Search view was initialized');
    this.render();
  },

  render: function() {
    // Compile the template using underscore.
    var template = _.template($("#search_template").html());

    // Load the compiled HTML back into the template.
    this.$el.html(template);
  },
});

var searchView = new SearchView({el: $("#search_container") });