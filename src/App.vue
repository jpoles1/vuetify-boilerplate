<template>
	<v-app dark>
		<Header />
		<v-content style="margin-top: 6px">
			<router-view></router-view>
		</v-content>
		<Footer />
	</v-app>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Vue from "vue";
export default Vue.extend({
	name: "App",
	components: {
		Header,
		Footer,
	},
	/*mounted() {
					if (window.location.host === "127.0.0.1:8080") {
						this.$store.commit("setLocalAPI");
					}
				},*/
});
</script>
