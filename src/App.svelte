<script>
	import 'chota';
	import Todo from './pages/Todo.svelte';
</script>

<main>
	<section id='root'>
		<Todo/>
	</section>
</main>

<style>
	main {
		overflow: hidden !important;
		margin: 0 0;
		padding: 0 0 0 0;
	}

	#root {
		background: #fff;
		height: 100vh;
		width: 100vw;
		padding: 16px;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>