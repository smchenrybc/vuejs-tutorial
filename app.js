/**
 * app.js
 */

var app = new Vue({
  el: "#vue-app",
  data: {
    title: 'Referencing with $refs',
    food: 'Pizza'
  },
  methods: {
    readRefs: function() {
      this.food = this.$refs.input.value;

      console.log(this.$refs.food.innerText);
    }
  },
  computed: {

  }
});
