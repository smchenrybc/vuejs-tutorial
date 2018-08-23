/**
 * app.js
 */

// set Vue instance
new Vue({
  el: "#vue-app",
  data: {
    age: 33,
    a: 0,
    b: 0
  },
  methods: {
    // addToA: function() {
    //   return this.a + this.age;
    // },
    // addToB: function() {
    //   return this.b + this.age;
    // }
  },
  computed: {
    addToA: function() {
      console.log("addToA");
      return this.a + this.age;
    },
    addToB: function() {
      console.log("addToB");
      return this.b + this.age;
    }
  }
});
