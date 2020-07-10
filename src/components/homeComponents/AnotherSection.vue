<template>
  <div class="another-section clip-path-section">
    <div class="container">
      <div class="display-3">
        <p>another section</p>
      </div>
      <div class="row">
        <div :class="{ animate: animate }">
          <div class="col-md-4">
            <span>
              <h2>Some content</h2>Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Animi, aspernatur. Beatae atque ad consequatur
              est velit, laborum voluptatem perspiciatis dolorem
              Vel delectus est minus dolores deserunt saepe qua.
            </span>
          </div>
          <div class="col-md-4">
            <span>
              <h2>another content</h2>Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Animi, aspernatur. Beatae atque ad consequatur
              est velit, laborum voluptatem perspiciatis dolorem
              Vel delectus est minus dolores deserunt saepe qua.
            </span>
          </div>
          <div class="col-md-4">
            <span>
              <h2>yup! also other content</h2>Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Animi, aspernatur. Beatae atque ad consequatur
              est velit, laborum voluptatem perspiciatis dolorem
              Vel delectus est minus dolores deserunt saepe qua.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script defer>
export default {
  // data =================
  data: () => ({
    animate: false
  }),
  // Methods ================
  methods: {
    handleScroll() {
      let y = scrollY;
      if (y >= 2000) {
        this.animate = true;
      }
    }
  },

  // mounted function =============
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.another-section {
  margin: 50px 0 0 0;
  padding: 100px 0 200px 0;
  clip-path: polygon(100% 0%, 0% 10%, 0% 100%, 100% 90%);
  background-color: var(--bg2);
  transition: background-color 0.5s ease-in-out;
}
.display-3 {
  text-align: center;
}
.img {
  width: 100%;
  height: 150px;
  margin-top: 20px;
}
.col-md-4 {
  text-align: center;
}

.animate {
  animation: translateY 1s linear;
}
</style>
