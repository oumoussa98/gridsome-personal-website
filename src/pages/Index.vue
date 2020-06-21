<template>
  <Layout>
  <div class="home container">
    <div class="row">
      <div class="col-md-10">
        <p class="display-3">I'm Abdelouahed Oumoussa </p>
        <p class="bio">
        A self-taught full-stack web developer and mobile apps developer with native script 
        I'v been coding since 2019 with different societies and different companies 
        I love building side projects. during this period i build a bunch of different 
        websites you can find them in my <a href="https://github.com/oumoussa98">
          GitHub<i class="fas fa-externel-link"></i></a> repository
          </p>
      </div>
    </div>
    <div>
      <div class="hire-div">
            <g-link to="/contact">
            <button class="hire">hire me</button>
            </g-link>
      </div>
      <div class="cv-div">
            <button href="https://www.doyoubuzz.com/us/" target="_blanck" class="cv" >
               see my resume
              <i class="fas fa-externel-link"></i>
            </button>
      </div>
    </div>
</div>

  <skills/>

  </Layout>
</template>

<script>
import skills from '~/components/homeComponents/Skills'
export default {

  metaInfo: {
    title: 'Home'
  },

  components: {
     skills,
  },
}
</script>

<style scoped>

  .home {
      min-height: 510px;
}
  .hire-div { display: inline-block; }
  .hire {
    margin: 10px 10px 10px 0;
    min-width: 170px;
    border: none;
    border-radius: 4px;
    background-color: rgb(36, 218, 148);
    padding: 15px 35px;
    color: white;
    box-shadow: 0px 10px 8px -2px rgb(142, 218, 182)  ;
      
} 
  .hire:hover {
        box-shadow: 0px 5px 8px -1px rgb(124, 165, 146) ;
}
  .cv-div { display: inline-block; }
  .cv {
      min-width: 170px;
      margin: 10px 10px 10px 0;
      border: none;
      border-radius: 4px;
      background-color: rgb(12, 148, 226);
      padding: 15px 35px;
      color: white;
      text-align: center;
      margin-top: 10px;
      box-shadow: 0px 10px 8px -2px rgb(124, 159, 211)  ;
      
}
  .cv:hover {
          box-shadow: 0px 5px 8px -1px rgb(124, 136, 155);
}
  .bio {

    font-size: 25px;
}
</style>
