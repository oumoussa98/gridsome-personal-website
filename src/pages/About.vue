<template>
	<Layout>
		<div class="container-fluid about">
			<div class="col-md-6">
				<h1>Get some info about me</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
					rerum nulla blanditiis cupiditate accusamus numquam, magni
					maxime iure nemo animi quos, dolor, quas est rem! Maxime
					architecto quod nemo deleniti. consectetur adipisicing elit.
					Tempore reiciendis asperiores non enim minima porro.
					Officiis libero vero rem nemo, ratione esse quas est ipsam!
					Animi nulla illo quidem eligendi.
				</p>
			</div>
			<div class="col-md-6 image-div">
				<g-image
					class="image"
					src="/uploads/myimg.png"
					alt="My photo"
				/>
				<div class="text">This image will be replaced</div>
			</div>
		</div>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: "About",
	},
};
</script>

<style scoped>
.about {
	min-height: 600px;
	font-size: 20px;
}
.image-div .image {
	width: 100%;
	height: 90vh;
	margin: 40px 0;
	border-radius: 6px;
}
.image-div .text {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	font-weight: bold;
}
p span {
	font-weight: 600;
	letter-spacing: 1px;
}
</style>
