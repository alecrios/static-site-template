<template>
	<div>
		<h1>{{ error.statusCode }}</h1>
		<p>{{ error.message }}</p>
	</div>
</template>

<script>
import pageMeta from '~/utilities/pageMeta';

export default {
	props: {
		error: {
			type: Object,
			required: true,
		},
	},
	head() {
		return pageMeta({
			title: this.error.statusCode,
			description: this.error.message,
		});
	},
};
</script>

<style lang="scss" scoped>

</style>
