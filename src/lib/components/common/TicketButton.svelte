<script lang="ts">
	export let href: string = '#';
	export let text: string = 'チケットを購入';
</script>

<a
	{href}
>
	{text}
</a>

<style>
	a {
		text-decoration: none;
	}
</style>
