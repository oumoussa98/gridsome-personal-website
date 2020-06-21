<template>
  <v-container class="skills" >
      <div class="display-3 my-10" ><p> What I Built </p></div>
      <v-row>
        <span v-for="(project,i) in projects" :key="i"  >
        <v-col  align="start" col="4">
         <v-card
          raised
          max-width="344"
          class="mx-auto"
        >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">{{project.headline}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img
      :src="project.img"
      height="194"
    ></v-img>

    <v-card-text>
    {{ project.description }}
    </v-card-text>

    <v-card-actions>
      <v-btn
        :href="project.href"
        text
        color="deep-purple accent-4"
        class="blue--text"
        target="_blanck"
        
      >
        See the project
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
        </v-col>
      </span>
      </v-row>
  </v-container>   
</template>

<style lang="scss" scoped>
  
</style>

<script>
export default {


// Data ==========================
  data:() => ({

        projects: [
          {
            headline: 'Ecommerce website',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit ipsa quos officiis dolorum, unde eius beatae cumque iusto maxime ',
            href: 'https://something.com',
            img: 'https://sabg.online/wp-content/uploads/2020/04/woocommerce-wholesale-storm-creek-983x553-1.jpg'
          },
          {
            headline: 'Bank website',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit ipsa quos officiis dolorum, unde eius beatae cumque iusto maxime ',
            href: 'https://something.com',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6EKwSZtkv_Wyq-dxiVviQSWwFjPLJ8IGJ-5EaMYBi1l1P61S0&usqp=CAU'
          },
          {
            headline: 'Android app',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit ipsa quos officiis dolorum, unde eius beatae cumque iusto maxime ',
            href: 'https://something.com',
           img: 'https://i.pcmag.com/imagery/articles/06iVYK5P05qeiONvmtOi7s6-11.fit_scale.size_2698x1517.v1569483964.jpg'
          },
          {
            headline: 'Ourika blog',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit ipsa quos officiis dolorum, unde eius beatae cumque iusto maxime ',
            href: 'https://something.com',
            img: '/images/screenshot7.png'
          },
        ],

  }),
}
</script>
