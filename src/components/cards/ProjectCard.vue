<template>
  <div class="card">
    <div class="card-title">
      <h3>{{ title }}</h3>
    </div>
    <div class="card-image">
      <g-image alt="Project screenshot" v-bind:src="img" />
    </div>
    <div class="card-footer">
      <p>{{ description }}</p>
    </div>
    <div id="card-links">
      <a :href="href" target="_blanck">See The Project</a>
    </div>
  </div>
</template>

<script defer>
export default {
  props: {
    title: String,
    img: String,
    description: String,
    href: String
  }
};
</script>

<style scoped>
.card {
  display: flow-root;
  width: 100%;
  min-height: 420px;
  text-align: center;
  border-radius: 5px;
  margin: 30px 0;
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
}
.card-title {
  min-height: 50px;
  padding: 10px;
}
.card-image img {
  width: 100%;
  height: 200px;
}
#card-links {
  float: left;
  margin: 10px;
}
#card-links a {
  padding: 8px;
  color: rgb(7, 185, 185);
  cursor: pointer;
  text-decoration: none;
  border-radius: 6px;
}
#card-links a:hover {
  background-color: rgba(170, 164, 164, 0.171);
  transition: all 0.4s;
}
</style>
