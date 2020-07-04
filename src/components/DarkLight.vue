<template>
	<div class="other">
		<button v-on:click="setModeDarkLight"><i :class="fa"></i></button>
	</div>
</template>

<script>
export default {
	// Data =================================
	data: () => ({
		// light and dark mode
		fa: "fas fa-moon",
	}),
	// Methods =====================================
	methods: {
		// access css variables and change their values
		setCssVar(cssVar, newValue) {
			window
				.getComputedStyle(document.documentElement)
				.getPropertyValue(cssVar);
			document.documentElement.style.setProperty(cssVar, newValue);
		},

		// get cookies by its name
		getCookie(cname) {
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(";");
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == " ") {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		},

		// create a new cookie
		setCookie(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
			var expires = "expires=" + d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		},

		// toggle between dark and light mode
		setModeDarkLight() {
			if (this.fa === "fas fa-moon") {
				this.fa = "fas fa-sun";
				// Set css variables
				this.setCssVar("--bg", "#444647");
				this.setCssVar("--bg2", "#5b5d5e");
				this.setCssVar("--color", "rgb(189, 184, 184)");
				// Set cookies
				this.setCookie("bg", "#444647", 7);
				this.setCookie("bg2", "#5b5d5e", 7);
				this.setCookie("color", "rgb(189, 184, 184)", 7);
			} else {
				this.fa = "fas fa-moon";
				// Set css variables
				this.setCssVar("--bg", "white");
				this.setCssVar("--bg2", "rgb(240, 243, 241)");
				this.setCssVar("--color", "#34495e");
				// Set cookies
				this.setCookie("bg", "white", 7);
				this.setCookie("bg2", "rgb(240, 243, 241)", 7);
				this.setCookie("color", "#34495e", 7);
			}
		},
	},
	// vueJs mounted function
	mounted() {
		// get user settings of dark and light mode and load it
		let bg = this.getCookie("bg");
		let bg2 = this.getCookie("bg2");
		let color = this.getCookie("color");
		if (bg && bg2 && color) {
			if (bg === "#444647") this.fa = "fas fa-sun";
			else this.fa = "fas fa-moon";
			// Set css variables
			this.setCssVar("--bg", bg);
			this.setCssVar("--bg2", bg2);
			this.setCssVar("--color", color);
		}
		// check the screen size
		if (window.innerWidth <= 800) this.mobileView = true;
	},
};
</script>

<style scoped>
.other {
	width: 10%;
	float: right;
	margin: 15px 20px 0 0;
}
.other button {
	float: right;
}
.other button i {
	font-size: 25px;
	float: right;
}
@media only screen and (max-width: 800px) {
	.other {
		width: 10%;
		text-align: center;
	}
	.other button i {
		font-size: 25px;
		margin: 0 20px 10px 0;
		text-align: center;
	}
}
</style>
