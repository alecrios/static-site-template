<template>
	<div>
		<h1>{{ $content.home.heading }}</h1>
		<div v-html="$content.home.body"/>
	</div>
</template>

<script>
import pageMeta from '~/utilities/pageMeta';

export default {
	head() {
		return pageMeta({
			title: this.$content.home.title,
			description: this.$content.home.description,
		});
	},
};
</script>

<style lang="scss" scoped>

</style>
