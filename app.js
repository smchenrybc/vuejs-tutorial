/**
 * app.js
 */

// set Vue instance
new Vue({
  el: "#vue-app",
  data: {
    name: "Sean",
    age: 33
  },
  methods: {
    logName: function(event) {
      let name = event.target.value;
      console.log('You entered ' + name + '!');
    },
    logAge: function(event) {
      let age = event.target.value;
      console.log('You entered ' + age + '!');
    },
  }
});
