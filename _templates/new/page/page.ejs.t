---
to: pages/<%= h.changeCase.kebab(name) %>.vue
---
<template>
	<div/>
</template>

<script>
import pageMeta from '~/utilities/pageMeta';

export default {
	head() {
		return pageMeta({
			title: '',
			description: '',
		});
	},
};
</script>

<style lang="scss" scoped>

</style>
