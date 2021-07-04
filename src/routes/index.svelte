<script>
  import CardArticle from "$lib/components/CardArticle.svelte";
  import { Articles } from "$lib/database/Articles.json";

  import { resultsStore } from "$lib/utils/dataStores";

  // your script goes here
</script>

{#if $resultsStore.length > 0}
  {$resultsStore.length} จาก {Articles.length}
  {#each $resultsStore as article}
    <CardArticle {article} />
    <!-- content here -->
  {/each}
{/if}

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
