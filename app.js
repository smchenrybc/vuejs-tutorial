/**
 * app.js
 */

Vue.component('greeting', {
  template: '<p>Hey there, my name is {{ name }}. <button class="pure-button" v-on:click="changeName">Change name</button></p>',
  data: function() {
    return {
      name: "Yoshi"
    }
  },
  methods: {
    changeName: function() {
      this.name = "Mario";
    }
  }
});

// set Vue instance
var one = new Vue({
  el: "#vue-app-one",
  data: {

  },
  methods: {

  },
  computed: {

  }
});

var two = new Vue({
  el: "#vue-app-two",
  data: {

  },
  methods: {

  },
  computed: {

  }
});
