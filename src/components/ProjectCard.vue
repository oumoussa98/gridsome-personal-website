<template>
<div class="card">
    <div class="card-title">
        <h3>{{ title }}</h3>
    </div>
    <div class="card-image">
        <img alt="Project screenshot" v-bind:src="img">
    </div>
    <div class="card-footer">
        <p>
            {{description }}
        </p>
    </div>
    <div id="card-links">
        <a :href="href" target="_blanck">See The Project</a>
    </div>
</div>

</template>

<script>
export default {
    props : {
        title: String ,
        img: String ,
        description: String,
        href: String ,
    },

}
</script>

<style scoped>
.card {
  width: 100%;
  height: 420px;
  text-align: center;
  border-radius: 6px;
  margin: 30px 0;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
}
.card-title {
  min-height: 50px ;
  padding: 10px;
}
.card-image img {
  width: 100%;
  height: 200px;
}
#card-links  {
  float: left ;
  margin: 10px 10px 0px 20px;  
}
#card-links a  {
  padding: 8px;
  color: rgb(7, 165, 170);
  cursor: pointer;
  text-decoration: none;
  border-radius:  6px;
}
#card-links a:hover {
    background-color: rgba(170, 164, 164, 0.171);
    transition: all 0.4s;
}
</style>