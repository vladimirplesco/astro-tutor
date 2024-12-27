<script>
	let count = $state(0);
  // import { $props } from 'svelte';
  // const { count = $state(0) } = $props();

	function increment() {
		// TODO implement
    count += 1;
	}
</script>

<button onclick={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
