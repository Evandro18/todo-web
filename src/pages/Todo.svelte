<script>
	import { Row, Col, Card } from 'svelte-chota';
	import { todos } from '../store';
	import { listTodos } from '../api/todos';
	import { onMount } from 'svelte';

	onMount(async () => {
		console.log('chamando onMount');
		const data = await listTodos();
		todos.set(data);
	})
</script>
<style>
	h2 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	* :global(.demo-list) {
    max-width: 600px;
		padding: 8px;
  }

	* :global(.list-item) {
		padding: 8px;
	}

</style>
<section class='todo-root'>
	<h2>Todo list</h2>
	{#if $todos?.length}
	<ul class="demo-list">
		{#each $todos as { title, description }}
			<li class="list-item">
				<Card>
					<Row>
						<Col size={12}>
							{title}
						</Col>
						<Col size={12}>
							{description}
						</Col>
					</Row>
				</Card>
			</li>
		{/each}
		</ul>
		{:else}
			<h4>Nenhum item na lista</h4>
		{/if}


</section>