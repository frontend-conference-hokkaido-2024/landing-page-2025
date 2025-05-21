<script lang="ts">
	import { onMount } from 'svelte';

	let note = $props();
</script>

<svelte:head>
	<title>フロントエンドカンファレンス北海道2025</title>
	<meta name="description" content="フロントエンドカンファレンス北海道2025" />
</svelte:head>

<section class="p-4">
	<h1 class="text-2xl font-bold mt-3 mb-5">フロントエンドカンファレンス北海道2025</h1>

	<div class="mb-6">
		<p class="my-6">2025/09/06</p>
		<p>エア・ウォーターの森</p>
		<p>北海道札幌市中央区北8条西13丁目28-21</p>
	</div>

	<div>
		<a href="https://x.com/fec_hokkaido" class="underline mr-3" rel="noreferrer">X</a>
		<a href="https://note.com/fec_hokkaido/m/m88550dbf59dd" class="underline" rel="noreferrer"
			>note</a
		>
	</div>

	<div class="my-6">
		<h2 class="font-bold mb-4">最新の投稿</h2>
		<ul class="space-y-2 list-disc pl-5">
			<!-- {#if note.data.articles != null} -->
				{#each note.data.articles as article}
					<li>
						<a href={article.link} class="underline" target="_blank" rel="noreferrer">
							{article.title}
						</a>
					</li>
				{/each}
			<!-- {/if} -->
		</ul>
	</div>

	<div class="mb-6">
		<a
			href="https://esa-pages.io/p/sharing/22435/posts/13/3a8f7d0dddaeb2ea656e.html"
			class="underline mr-3"
			rel="noreferrer">行動規範</a
		>
		<a
			href="https://aback-jasmine-06b.notion.site/cf184497a6414a97aea49c1f1b2f5b5f"
			class="underline"
			rel="noreferrer"
		>
			プライバシーポリシー
		</a>
	</div>
	<a href="https://www.frontend-conf.jp/" class="underline" rel="noreferrer">2024</a>
</section>
