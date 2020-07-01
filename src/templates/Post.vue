<template>
<layout>
  <div id="markdown" class="container markdown-body">
      <h1>{{$page.post.title}} post</h1>
      <div class="img">
                <g-image id="img" :src="$page.post.img" alt="Post image" />
      </div>
      <div v-html="$page.post.content">
      </div>

  </div>
</layout>
</template>

<page-query>

    query Post($path: String!) {
        post: post (path: $path){
        title
        content
        img
    }
}
       
</page-query>

<script defer>
export default {
    metaInfo() {
        return {
            title: this.$page.post.title
        }
    }

}
</script>

<style scoped>
	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
        padding: 45px;
        color: var(--color);
    }
	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
    }
    #img {
        width: 100%;
        height: 150px;   
    }
    .img {
        padding: 15px 0px;
    }
    
</style>