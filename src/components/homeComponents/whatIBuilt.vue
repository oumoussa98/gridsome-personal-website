<template>
  <div class="skills container" id="my-projects">
      <div class="display-3" ><p> What I Built </p></div>
      <div class="row">
        <div v-for="(project,i) in projects" :key="i"  >
          <div class="col-md-4">
            <div class="card">
              <div class="card-title">
                <h3>{{ project.title }}</h3>
              </div>
              <div class="card-image">
                <img alt="Project screenshot" v-bind:src="project.img">
              </div>
              <div class="card-footer">
                <p>
                   {{ project.description }}
                </p>
              </div>
              <div id="card-links">
                <a :href="project.href" target="_blanck">See The Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>   
</template>

<script defer>
export default {


// Data ==========================
  data:() => ({

        projects: [
          {
            title: 'Tool for management ',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit ipsa quos officiis dolorum, unde eius beatae cumque iusto maxime ',
            href: 'https://github.com/oumoussa98/tool-for-management',
            img: 'https://raw.githubusercontent.com/oumoussa98/tool-for-management/master/screenshots/screenshot1.PNG'
          },
          {
            title: 'Blog with php',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit ipsa quos officiis dolorum, unde eius beatae cumque iusto maxime ',
            href: 'https://github.com/oumoussa98/blog-with-php',
            img: 'https://raw.githubusercontent.com/oumoussa98/blog-with-php/master/screenshots/screenshot1.PNG'
          },
          
          {
            title: 'Ourika blog',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit ipsa quos officiis dolorum, unde eius beatae cumque iusto maxime ',
            href: 'https://github.com/oumoussa98/Blog-laravel',
            img: "https://raw.githubusercontent.com/oumoussa98/Blog-laravel/master/screenshots/screenshot1.PNG"   
          },
        {
            title: 'Android app',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit ipsa quos officiis dolorum, unde eius beatae cumque iusto maxime ',
            href: 'https://something.com',
            img: 'https://i.pcmag.com/imagery/articles/06iVYK5P05qeiONvmtOi7s6-11.fit_scale.size_2698x1517.v1569483964.jpg'
          },
      ],
  }),
}
</script>

<style scoped>

.display-3 {
  text-align: center;
}

.card {
  width: 100%;
  height: 420px;
  text-align: center;
  border-radius: 6px;
  margin: 30px 0;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.3);
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
