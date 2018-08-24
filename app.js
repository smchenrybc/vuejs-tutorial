/**
 * app.js
 */

// set Vue instance
var one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue App One"
  },
  methods: {

  },
  computed: {
    greet: function() {
      return 'Hello from App One!';
    }
  }
});

var two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue App Two"
  },
  methods: {
    changeTitle: function(event) {
      one.title = "App 1 New Title";
      event.target.disabled = true;
    }
  },
  computed: {
    greet: function() {
      return 'Hello from App Two!';
    }
  }
});

// It even works outside instantiation
// two.title = "Changed from outside!";
