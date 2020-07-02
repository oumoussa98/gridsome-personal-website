// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import vueSmoothScroll from 'vue-smooth-scroll'
import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/bootstrapGrid.min.css'
import '~/assets/css/sharedCss.css'
import '~/assets/css/markdown.css'

export default function (Vue, { router, head, isClient }) {

  head.link.push(
  
    {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.10.2/css/all.css"
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:400',
    },

  );
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  // Use v-smooth-scroll
  Vue.use(vueSmoothScroll)

  
}
