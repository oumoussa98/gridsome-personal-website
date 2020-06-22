<template>
  <div >
      <!--              computer vesion                 -->
      <div class="header" v-if="!mobileView">
              <!------- brand area ------>
              <div class="brand">
                  <a class="brand-g-link" :href="brand.to">                  
                      <g-image class="brand-img" src="~/assets/images/logo.svg" alt="logo" width="60" />
                      <span class="brand-link">{{ brand.name }}</span>
                  </a>
              </div>
              <!-------- Links area ------>
              <div class="links">
                 <ul>
                     <li v-for="(link, i) in links" :key="i">
                         <g-link class="g-link" :to="link.to">{{link.name}}</g-link>
                     </li>
                 </ul>
              </div>
              <!------- other things area ------>
              <div class="other" v-if="!mobileView">                  
                 <ul>  
                     <li>              
                        <button v-on:click="setModeDarkLight"><i :class="fa"></i></button>
                     </li> 
                     <li v-for="(other, i) in others" :key="i">
                         <g-link class="g-link" :to="other.to">{{other.name}}</g-link>
                     </li>
                 </ul>
              </div>
      </div>

    <!--              mobile version              -->

        <div class="header" v-else>
             <div class="header">
              <!-------- brand area ------->
              <div class="brand">
                  <a class="brand-g-link" :href="brand.to">                  
                      <g-image class="brand-img" src="~/assets/images/logo.svg" alt="logo" width="60" />
                       <span class="brand-link">{{ brand.name }}</span>
                  </a>
              </div>
              <!-------- Links area -------->
              <div>
                    <button class="button-drawer" @click="toggle" >
                        <i class="fa fa-bars"></i>
                    </button>  

                    <div v-show="drawer" class="drop-down" >
                        <li v-for="(link, i) in links" :key="i" >
                           <g-link class="g-link" :to="link.to">{{link.name}}</g-link>
                        </li>
                        <li v-for="(other, i) in others" :key="i+10">
                          <g-link class="g-link" :to="other.to">{{other.name}}</g-link>
                        </li>
                        <li>              
                          <button v-on:click="modeToggler"><i :class="fa"></i></button>
                        </li> 
                    </div>
                </div>
              </div>
        </div>

    </div>
</template>

<script>
export default {

    data: () => ({
    // Brand --------------------
    brand: {
        name: 'Oumoussa' ,
        to: '/' ,
        //
    },
    // links --------------------
    links: [
        {name:'Home',to:'/'},
        {name:'About',to:'/about'},
        {name:'Contact',to:'/contact'},
        //
    ],

    //Other ---------------------
    others: [
        //
    ],
    // for mobile devices
    mobileView: false ,
    drawer: false ,

    // light and dark mode 
     fa: 'far fa-lightbulb',


    }),
// Methods =====================================
   methods: {

       // access css variables and change their values
       setCssVar(cssVar,newValue)  
            {
                window.getComputedStyle(document.documentElement).getPropertyValue(cssVar);
                document.documentElement.style.setProperty(cssVar, newValue);
            },
       // get cookies by its name
       getCookie(cname) 
            {
                    var name = cname + "=";
                    var decodedCookie = decodeURIComponent(document.cookie);
                    var ca = decodedCookie.split(';');
                    for(var i = 0; i <ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                        }
                        if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                        }
                    }
                    return "";
            },
       // create a new cookie
       setCookie(cname, cvalue, exdays) 
            {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            },
       // toggle links display in mobile devices
       toggle() 
            { 
            this.drawer = !this.drawer ;
            },
       // toggle between dark and light mode
       setModeDarkLight() 
            {
                    if(this.fa === 'far fa-lightbulb')
                                    { 
                                    this.fa = 'fas fa-lightbulb' ;
                                    this.setCssVar('--bg','#444647') ;
                                    this.setCssVar('--color','rgb(189, 184, 184)') ; 
                                    this.setCookie('oumoussaBg','#444647',7)  ;
                                    this.setCookie('oumoussaColor','rgb(189, 184, 184)',7)  ;                             

                                    }
                    else 
                                    {
                                        this.fa = 'far fa-lightbulb' ; 
                                        this.setCssVar('--bg','white') ;
                                        this.setCssVar('--color','#34495e')
                                        this.setCookie('oumoussaBg','white',7)  ;
                                        this.setCookie('oumoussaColor','#34495e',7)  ;
                                    } 
            },
      
   },
      // vueJs created function
      created() 
            {
                // get user settings of dark and light mode and load it
                let bg = this.getCookie('oumoussaBg'), color = this.getCookie('oumoussaColor') ;
                    if(bg && color)    
                        {
                            if(bg === '#444647') this.fa = 'fas fa-lightbulb' ;
                            else this.fa = 'far fa-lightbulb' ;
                            this.setCssVar('--bg',bg) ;
                            this.setCssVar('--color',color) ;
                        }
                // check the screen size
                if(window.innerWidth <= 700) this.mobileView = true ;
            },
  


}
</script>

<style scoped >
   .header {
       width: 100%;
       display: flex;
       align-items: center;
       position: fixed;
       top: 0;
       background-color: var(--bg);
       box-shadow: 5px -10px 10px 10px var(--color);
   }
   .drop-down {
     position: absolute;
     display: block;
     width: 120px ;
     background-color: var(--bg);
     box-shadow: 0px 4px 8px -2px var(--color);
     margin: 50px 5px 0 0;
     right: 0 ;
    }
    .drop-down li { 
        list-style-type: none;
        text-align: center;
        justify-items: center;
        padding: 10px 6px;
    }
    .button-drawer {
        float:right ;
        margin: 10px 10px 0 0 ;
        border: none;
        font-size: 30px;
        background-color: var(--bg);
        color: var(--color);
        outline: none;
    }
   .brand {
        float:left;
        min-width: 25%;
        margin-left: 10px;
        clear: left;
   }
   .brand-g-link {
      text-decoration: none;
      color: var(--color);
      font-size: 20px;
      padding-top: 100px;
  }
  .brand-img {transition: all 1s;}
  .brand-img:hover {
      transition: all 1s;
      transform: rotate(360deg);
  }
   .links {
       text-align: center;
       width: 50%;
   }
   .other {
       display: inline-block;
       text-align: right;
       width: 25%;
       margin-right: 10px;
   }
   .other ul li { 
       display: inline-block; 
       margin: 0 10px;
       padding: 0 5px ;
   }
   .other ul li button i {
       font-size: 25px;
   }

    .links ul li {
      display: inline-block;
      margin: 0 15px;
      padding: 0 5px ;
  }
  .g-link {
      text-decoration: none;
      color: var(--color);
      text-transform: uppercase;
      padding: 0 2px;
  }
  .g-link:hover {
      color: var(--color);
      border-bottom: 4px solid rgb(11, 230, 127);
      transition: all 0.2s;
      
  }


  ul li {
      list-style: none;
  }

@media only screen and (max-width: 700px) {
  .header {
    display: block;
  }
}



</style>