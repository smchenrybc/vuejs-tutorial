/**
 * app.js
 */

// set Vue instance
new Vue({
  el: "#vue-app",
  data: {
    available: false,
    nearby: false
  },
  methods: {
    toggleAvailable: function(available) {
      if (this.available) {
        this.available = false;
      } else {
        this.available = true;
      }
      this.nearby = false;
    },
    toggleNearby: function(nearby) {
      if (this.nearby) {
        this.nearby = false;
      } else {
        this.nearby = true;
      }
      this.available = false;
    }
  },
  computed: {
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});
