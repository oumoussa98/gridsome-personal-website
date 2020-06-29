<template>
<div class="skills">
  <div class="container">
      <div class="display-3"><p> My Skills </p></div>
      <div class="row">
        <div class="col-md-4">
            <g-image 
            src="~/assets/images/fullstack.svg"
            class="img"
            />
            <span>
                <h2>Full stack web developer</h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Animi, aspernatur. Beatae atque ad consequatur est velit, 
                laborum voluptatem perspiciatis dolorem
                Vel delectus est minus dolores deserunt saepe qua.
            </span>
        </div>
        <div class="col-md-4">
            <g-image 
            src="~/assets/images/ui.svg"
            class="img"
            />
            <span>
                <h2>UI and UX</h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Animi, aspernatur. Beatae atque ad consequatur est velit, 
                laborum voluptatem perspiciatis dolorem
                Vel delectus est minus dolores deserunt saepe qua.
            </span>
        </div>
        <div class="col-md-4">
            <g-image 
            src="~/assets/images/mobileApps.svg"
             class="img"
            />
            <span>
                <h2>Mobile apps developer</h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Animi, aspernatur. Beatae atque ad consequatur est velit, 
                laborum voluptatem perspiciatis dolorem
                Vel delectus est minus dolores deserunt saepe qua.
            </span>
        </div>
      </div>
  </div>
  </div>   
</template>

<style scoped>
.skills {
    padding: 100px 0 200px 0;
    clip-path: polygon(0% 10%, 100% 0px, 100% 88%, 0px 100%);
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
</style>
