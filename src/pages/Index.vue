<template>
	<Layout>
		<div class="home">
			<div class="container first-section">
				<!-- my info section -->
				<div class="row">
					<div class="col-md-10">
						<p class="display-3">I'm Abdelouahed Oumoussa</p>
						<p class="bio">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Alias a, voluptate ipsum ipsa aliquid earum
							corrupti qui nisi praesentium voluptatum in
							consequuntur autem soluta numquam architecto
							pariatur. Minus, voluptatum praesentium.
							<a href="https://github.com/oumoussa98">
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
