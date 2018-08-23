/**
 * app.js
 */

// set Vue instance
new Vue({
  el: "#vue-app",
  data: {
    name: "Sean",
    age: 33,
    coordsX: 0,
    coordsY: 0
  },
  methods: {
    addYears: function(inc) {
      this.age += inc;
    },
    minusYears: function(dec) {
      this.age -= dec;
    },
    updateXY: function(event) {
      // console.log(event);

      this.coordsX = event.offsetX;
      this.coordsY = event.offsetY;
    },
    clickAlert: function() {
      alert('You clicked me!');
    }
  }
});
