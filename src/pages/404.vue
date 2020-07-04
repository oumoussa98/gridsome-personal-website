<template>
	<Layout>
		<div class="page404">
			<h1>Error 404</h1>
			<p>
				Oops!! this page could not be found
				<br />Sorry but the page you looking for doesn't exist
			</p>
			<g-image
				class="img"
				alt="No data image"
				src="~/assets/images/no_data.svg"
				width="450"
			/>
		</div>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: "404",
	},
};
</script>

<style scoped>
.page404 {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
}
.page404 h1,
p {
	padding: none;
}
.page404,
img {
	padding: 0 30px;
}
</style>
