<script lang="ts">
	import { page } from '$app/state';
	import TicketButton from '../common/TicketButton.svelte';
</script>

<header>
	<div>ロゴ</div>

	<div>
		<ul>
			<li aria-current={page.url.pathname === '/timetable' ? 'page' : undefined}>
				<a href="/timetable">タイムテーブル</a>
			</li>
			<li>
				<a href="#sponsor">スポンサー</a>
			</li>
			<li aria-current={page.url.pathname === '/job-board' ? 'page' : undefined}>
				<a href="/job-board">ジョブボード</a>
			</li>
			<TicketButton />
		</ul>
	</div>
</header>
