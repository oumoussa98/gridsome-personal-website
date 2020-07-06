<template>
  <layout>
    <div class="container">
      <div class="row">
        <div v-for="{ node } in $page.allPost.edges" :key="node.id" class="col-md-6">
          <g-link id="g-link" :to="node.path">
            <Card
              :title="node.title"
              description="Lorem ipsum, dolor sit amet consectetur 
                                     adipisicing elit ipsa quos officiis dolorum, unde eius
                                     beatae cumque iusto maxime"
              :img="node.img"
              :date="node.date"
            />
          </g-link>
        </div>
      </div>
    </div>
  </layout>
</template>

<page-query>
  query Blog {
    allPost: allPost(sortBy: "asc") {
      edges {
        node {
          title
          path
          img
          date
        }
      }
    }
  }
</page-query>

<script defer>
import Card from "~/components/cards/PostCard";
export default {
  metaInfo: {
    title: "Blog"
  },

  components: {
    Card
  }
};
</script>

<style>
#g-link {
  text-decoration: none;
  color: var(--color);
}
</style>
