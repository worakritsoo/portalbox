<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("/api/articles");
    return { props: { articles: await res.json() } };
  }
</script>

<script>
  import CardArticle from "$lib/components/CardArticle.svelte";

  export let articles = [];
</script>

{#each articles as article}
  <CardArticle {article} />
{/each}

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
