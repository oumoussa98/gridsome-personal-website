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
            <darkLight/>
        </div>

         <!--              mobile version              -->

        <div class="header" v-else>
            <!-------- brand area ------->
            <div class="brand">
                <a class="brand-g-link" :href="brand.to">                  
                    <g-image class="brand-img" src="~/assets/images/logo.svg" alt="logo" width="60" />
                    <span class="brand-link">{{ brand.name }}</span>
                </a>
            </div>
            <!-------- Links area -------->
            <div>
                <button class="button-drawer" v-on:click="drawer=!drawer" >
                    <i class="fa fa-bars"></i>
                </button>  

                <div v-show="drawer" class="drop-down" >
                    <li v-for="(link, i) in links" :key="i" >
                        <g-link class="g-link" :to="link.to">{{link.name}}</g-link>
                    </li>
                    <darkLight/>
                </div>
            </div>
        </div>
    </div>
</template>

<script defer>
import darkLight from '~/components/DarkLight'
export default {
// Components ==================
    components: {
        darkLight,
    },
// Data ===========================
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
        {name:'Blog',to:'/blog'},
        //
    ],

    // for mobile devices
    mobileView: false ,
    drawer: false ,
    }),
// mounted function ========================
    mounted() {
        if(window.innerWidth <= 800) this.mobileView = true
    }
}
</script>

<style scoped >
/* header */
.header {
    width: 100%;
    display: inline-block;
    align-items: center;
    align-content: center;
    position: fixed;
    top: 0;
    background-color: var(--bg);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    transition: background-color 0.5s ease-in-out;
}
/* brand area */
.brand {
    float:left;
    min-width: 25%;
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
/* links area */
.links {
    display: inline-block;
    text-align: center;
    margin: 6px 0 0 0;
    min-width: 40%;
}
.links ul li {
    display: inline-block;
    margin: 0 8px;
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
/* drawer div in mobile version */
.drop-down {
    position: absolute;
    display: block;
    width: 120px ;
    background-color: var(--bg);
    border-radius: 5px;
    box-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.3);
    margin: 50px 5px 0 0;
    right: 0 ;
    transition: background-color 0.5s ease-in-out;
}
.drop-down li { 
    list-style-type: none;
    text-align: center;
    justify-items: center;
    padding: 10px 6px;
}
.drop-down li button i {
    font-size: 20px;
}
.button-drawer {
    float:right ;
    margin: 10px 10px 0 0 ;
    border: none;
    font-size: 30px;
    background-color: var(--bg);
    color: var(--color);
    outline: none;
    transition: background-color 0.5s ease-in-out;
}

@media only screen and (max-width: 800px) {
.header {
display: block;
}
}
</style>