<script>
  import SearchBox from "$lib/components/SearchBox.svelte";
  import "../app.postcss";
</script>

<nav class="flex justify-between p-4 fixed bg-white w-full">
  <a href="/">Home</a>
  <SearchBox />
  <a href="/articles">Articles</a>
</nav>
<div class="pt-16 m-2">
  <slot />
</div>
