<template>
  <div class="skills container">
      <div class="display-3"><p> My Skills </p></div>
      <div class="row">
        <div class="col-md-4">
            <g-image 
            src="~/assets/images/fullstack.svg"
            class="img"
            />
            <span>
                <h2>Full stack web developer</h2>
                Full stack web developer with laravel framework
                for backend and vuejs for frontend
                for CMS i'm familiar with drupal and wordpress
            </span>
        </div>
        <div class="col-md-4">
            <g-image 
            src="~/assets/images/ui.svg"
            class="img"
            />
            <span>
                <h2>UI and UX</h2>
                Build attratcive user intefaces and provide best user experience
                using lattest and hottest technologies and frameworks
            </span>
        </div>
        <div class="col-md-4">
            <g-image 
            src="~/assets/images/mobileApps.svg"
             class="img"
            />
            <span>
               <h2>Mobile apps developer</h2>
               Mobile apps development with hight performance and a super 
               integration with your website using nativeScript that support vuejs
               for mobile apps development
            </span>
        </div>
      </div>
  </div>   
</template>

<style scoped>
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
</style>
