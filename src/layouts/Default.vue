<template>
<div class="layout">

  <div class="header">
    <Header />
  </div>
   
  <div class="content"> 
    <slot/>
  </div>

  <div class="footer">
    <Footer/>
  </div>

      
      <!-- <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong> -->
   
</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from '~/layouts/partials/Header'
import Footer from '~/layouts/partials/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

.content {
  margin-top: 80px;
  min-height: 100vh;
}


</style>
