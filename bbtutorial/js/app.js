/**
* Define a search view.
*/
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

/**
* Define a "Person" model.
*/
var Person = Backbone.Model.extend({
  // Set a few defaults if none are passed.
  defaults: {
    name: 'Fetus',
    age: 0,
    child: '',
  },
  initialize: function() {
    console.log('A new person just got created');
  },

  // Create a public function 'adpot'.
  adopt: function(newChildsName) {
    console.log('Will adopt child: ' + newChildsName);
    newChildsName = newChildsName || '';
    this.set('child', newChildsName);
  }
});

var searchView = new SearchView();

// Set the child on creation.
var person = new Person({
  child: 'Ryan'
});

// Set attributes for this person.
person.set({
  name: 'Thomas',
  age: 67
});

// Get all attributes of a model in an object.
var personAllAttributes = person.attributes;

// Get individual attributes.
var personName = person.get('name');
var personChild = person.get('child');

console.log('All Person Attributes: ' + JSON.stringify(personAllAttributes));
console.log('Person Name: ' + personName);
console.log('Person\'s Child: ' + personChild);

// Add this person's adopted child.
person.adopt('John Resig');
console.log('Person\'s child after adoption: ' + person.get('child'));


/**
* Create a "character" model.
*/
var Character = Backbone.Model.extend({
  defaults: {
    name: 'Fetus',
    age: 0,
  },

  initialize: function() {
    console.log("Character was initalized");
    this.on('change:name', function(e) {
      console.log(e);
      var name = e.get('name');
      console.log('Changed name to: ' + name);
    });
  }
});

var thomas = new Character();
thomas.set('name', 'Stewie Griffin');
