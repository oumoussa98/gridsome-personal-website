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
							<a href="https://github.com/oumoussa98">
								GitHub<i class="fas fa-externel-link"></i
							></a>
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
			<div class="circles">
				<div class="circle1"></div>
				<div class="circle2"></div>
				<div class="circle3"></div>
				<div class="circle4"></div>
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
	min-height: 90vh;
	animation: scaleDiv 1s linear;
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

/* Circles or waves */
.circles .circle1,
.circle2,
.circle3,
.circle4 {
	background-color: var(--bg2);
	transition: background-color 0.5s;
	z-index: -1;
	position: absolute;
	clip-path: circle(50% at 50% 50%);
}
.circles .circle1 {
	padding: 20vh;
	top: -5%;
	right: -10%;
	opacity: 1;
	animation: scaleCircles 3s infinite 0s linear;
}
.circles .circle2 {
	padding: 15vh;
	top: 45%;
	right: 20%;
	opacity: 0.8;
	animation: scaleCircles 2.8s infinite 0s linear;
}
.circles .circle3 {
	padding: 10vh;
	top: 75%;
	right: 45%;
	opacity: 0.6;
	animation: scaleCircles 2.6s infinite 0s linear;
}
.circles .circle4 {
	padding: 5vh;
	top: 95%;
	right: 65%;
	opacity: 0.4;
	animation: scaleCircles 2.4s infinite 0s linear;
}

@media only screen and (max-width: 900px) {
	.circles {
		display: none;
	}
}
</style>
