<template>
  <div class="other">
    <button v-on:click="darkModeToggle">
      <i :class="fa"></i>
    </button>
  </div>
</template>

<script>
export default {
  // Data =================================
  data: () => ({
    // light and dark mode
    fa: "fas fa-moon",
    darkMode: null
  }),
  // Methods =====================================
  methods: {
    enableDarkMode() {
      // 1. Add the class to the body
      document.body.classList.add("darkmode");
      // 2. Update darkMode in localStorage
      localStorage.setItem("darkMode", "enabled");
      this.fa = "fas fa-sun";
    },

    disableDarkMode() {
      // 1. Remove the class from the body
      document.body.classList.remove("darkmode");
      // 2. Update darkMode in localStorage
      localStorage.setItem("darkMode", null);
      this.fa = "fas fa-moon";
    },

    // toggle between dark and light mode
    darkModeToggle() {
      // get their darkMode setting
      this.darkMode = localStorage.getItem("darkMode");
      // if it not current enabled, enable it
      if (this.darkMode !== "enabled") {
        this.enableDarkMode();
        // if it has been enabled, turn it off
      } else {
        this.disableDarkMode();
      }
    }
  },
  // vueJs mounted function
  mounted() {
    // check for saved 'darkMode' in localStorage
    this.darkMode = localStorage.getItem("darkMode");
    // If the user already visited and enabled darkMode
    // start things off with it on
    if (this.darkMode === "enabled") {
      this.enableDarkMode();
    }
  }
};
</script>

<style scoped>
.other {
  width: 10%;
  float: right;
  margin: 15px 20px 0 0;
}
.other button {
  float: right;
}
.other button i {
  font-size: 25px;
  float: right;
}
@media only screen and (max-width: 800px) {
  .other {
    width: 10%;
    text-align: center;
  }
  .other button i {
    font-size: 25px;
    margin: 0 20px 10px 0;
    text-align: center;
  }
}
</style>
