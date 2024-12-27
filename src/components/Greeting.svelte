<script>
  export let name;
</script>

<h1>Hello {name}!</h1>
<button on:click={() => (name = 'Svelte')}>Change Name</button>
