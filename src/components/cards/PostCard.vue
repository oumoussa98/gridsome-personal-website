<template>
  <div class="card">
    <div class="card-image">
      <g-image alt="Post Image" v-bind:src="img" />
    </div>
    <div class="card-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="card-footer">
      <p>{{ description }}</p>
      <h4 style="opacity:0.6">Published at: {{ date }}</h4>
    </div>
  </div>
</template>

<script defer>
export default {
  props: {
    title: String,
    img: String,
    description: String,
    date: String
  }
};
</script>

<style scoped>
.card {
  display: flow-root;
  width: 100%;
  min-height: 450px;
  text-align: center;
  border-radius: 6px;
  margin: 30px 0;
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.25);
  transition: transform 0.4s, box-shadow 0.4s;
}
.card:hover {
  transform: scale(1.02, 1.02);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
}
.card-image img {
  width: 100%;
  height: 250px;
  border-radius: 6px 6px 0 0;
}
.card-title {
  padding: 0 10px;
  margin: 0;
}
.card-footer {
  padding: 0 15px;
  font-size: 16px;
}
</style>
