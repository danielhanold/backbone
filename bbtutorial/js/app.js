var SearchView = Backbone.View.extend({
  // Define the container for the element in the view.
  el: '#search_container',

  initialize: function() {
    console.log('Search view was initialized');
    this.render();
  },

  events: {
    'click input[type="button"]': 'doSearch',
  },

  render: function() {
    // Pass variables through to the Underscore template.
    var variables = {
      search_label: 'My Search',
    }

    // Compile the template using underscore.
    var template = _.template($("#search_template").html(), variables);

    // Load the compiled HTML back into the template.
    this.$el.html(template);
  },

  doSearch: function(e) {
    // Button was clicked.
    // Element that was clicked is available in e.currentTarget.
    var searchInputValue = $('#search_input').val();
    alert('Value of search field is: ' + searchInputValue);
  },
});

var searchView = new SearchView();