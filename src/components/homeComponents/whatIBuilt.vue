<template>
    <div class="skills container" id="my-projects">
        <div class="display-3">
            <p>What I Built</p>
        </div>
        <div class="row">
            <div v-for="(project,i) in projects" :key="i">
                <div class="col-md-4">
                    <div>
                        <Card
                            :title="project.title"
                            :img="project.img"
                            :description="project.description"
                            :href="project.href"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script defer>
import Card from "~/components/cards/ProjectCard";

export default {
    // Components
    components: {
        Card,
    },
    // Data ==========================
    data: () => ({
        projects: [
            {
                title: "Tool for management ",
                description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
                         ipsa quos officiis dolorum, unde eius beatae cumque iusto maxime `,
                href: "https://github.com/oumoussa98/tool-for-management",
                img: "/uploads/screenshot1.png",
            },
            {
                title: "Blog with php",
                description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit 
                          ipsa quos officiis dolorum, unde eius beatae cumque iusto maxime `,
                href: "https://github.com/oumoussa98/blog-with-php",
                img: "uploads/screenshot2.png",
            },

            {
                title: "Ourika blog",
                description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
                          ipsa quos officiis dolorum, unde eius beatae cumque iusto maxime `,
                href: "https://github.com/oumoussa98/Blog-laravel",
                img: "uploads/screenshot3.png",
            },
            {
                title: "Android app",
                description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
                          ipsa quos officiis dolorum, unde eius beatae cumque iusto maxime `,
                href: "https://something.com",
                img:
                    "https://i.pcmag.com/imagery/articles/06iVYK5P05qeiONvmtOi7s6-11.fit_scale.size_2698x1517.v1569483964.jpg",
            },
        ],
    }),
};
</script>

<style scoped>
.display-3 {
    text-align: center;
}
.animate {
    animation: scaleDiv 1.5s linear;
}
</style>
