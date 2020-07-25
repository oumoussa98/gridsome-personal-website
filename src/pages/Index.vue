<template>
    <Layout>
        <div class="home">
            <div class="container first-section">
                <!-- my info section -->
                <div class="row">
                    <div class="col-md-10">
                        <p class="display-3">I'm Abdelouahed Oumoussa</p>
                        <p class="bio">
                            A self-taught full-stack web developer and mobile
                            apps developer with native script I'v been coding
                            since 2020 with different societies and different
                            companies I love building side projects. during this
                            period i build a bunch of different websites you can
                            find them in my
                            <a
                                href="https://github.com/oumoussa98"
                            >
                                GitHub
                                <i class="fas fa-externel-link"></i>
                            </a>
                            repository
                        </p>
                    </div>
                </div>
                <!-- buttons section -->
                <div class="hire-div">
                    <g-link to="/contact">
                        <button class="hire">Hire me</button>
                    </g-link>
                </div>
                <div class="cv-div">
                    <a
                        href="#my-projects"
                        class="cv"
                        v-smooth-scroll="{ duration: 3000, offset: -50 }"
                    >
                        See my work
                        <i class="fas fa-externel-link"></i>
                    </a>
                </div>
            </div>
            <div class="circles container-fluid">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle5"></div>
                <div class="circle6"></div>
            </div>
            <skills />
            <whatIBuilt />
            <anotherSection />
        </div>
    </Layout>
</template>

<script>
import skills from "~/components/homeComponents/Skills";
import whatIBuilt from "~/components/homeComponents/whatIBuilt";
import anotherSection from "~/components/homeComponents/AnotherSection";

export default {
    metaInfo: {
        title: "Home",
    },

    components: {
        skills,
        whatIBuilt,
        anotherSection,
    },
};
</script>

<style scoped>
/* home first section*/
.first-section {
    min-height: 80vh;
    animation: scaleDiv 1s linear;
}
.first-letters {
    color: black;
}
/* hire me button */
.hire-div {
    display: inline-block;
    margin: 10px 10px 20px 0;
}
.hire {
    min-width: 170px;
    border: none;
    border-radius: 4px;
    background-color: rgb(36, 218, 148);
    padding: 15px 35px;
    color: white;
    box-shadow: 0px 10px 10px -1px rgba(142, 218, 183, 0.7);
    transition: box-shadow 0.7s;
}
.hire:hover {
    box-shadow: none;
}
/* see my work button */
.cv-div {
    display: inline-block;
    margin: 10px 0 0 0;
}
.cv {
    min-width: 170px;
    border: none;
    text-decoration: none;
    border-radius: 4px;
    background-color: rgb(12, 148, 226);
    padding: 15px 40px;
    color: white;
    text-align: center;
    margin-top: 10px;
    box-shadow: 0px 10px 10px -1px rgb(124, 159, 211, 0.65);
    transition: box-shadow 0.7s;
}
.cv:hover {
    box-shadow: none;
}
.bio {
    font-size: 25px;
}

/* Circles or bubbles */
.circles .circle1,
.circle2,
.circle3,
.circle5,
.circle6 {
    background-color: var(--circles-color);
    transition: background-color 0.5s;
    z-index: -1;
    position: absolute;
    clip-path: circle(50% at 50% 50%);
    animation: scaleCircles 4s infinite linear;
    opacity: 1;
    padding: 4vh;
}
.circles .circle1 {
    top: 60%;
    right: 5%;
}
.circles .circle2 {
    top: 20%;
    right: 15%;
}
.circles .circle3 {
    top: 80%;
    right: 55%;
}
.circles .circle5 {
    top: 83%;
    right: 84%;
}
.circles .circle6 {
    top: 70%;
    right: 30%;
}

@media only screen and (max-width: 900px) {
    .circles {
        display: none;
    }
}
@media only screen and (max-width: 1300px) {
    .circle4,
    .circle5,
    .circle8 {
        display: none;
    }
}
</style>
