<script>
  export let name;
  let isDefault = true;
  let defaultName = name;
</script>

<h1>Hello {isDefault ? defaultName : "Svelte"}!</h1>
<button on:click={() => (isDefault = !isDefault)}>Change Name</button>
