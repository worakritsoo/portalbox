<script>
  import { fuse, resultsStore } from "$lib/utils/dataStores";

  let q = "";
  $: {
    $resultsStore = fuse.search(q).flatMap((x) => x.item);
  }
</script>

<div class="grid place-items-center">
  <label class="bg-gray-200 rounded-full">
    🔍
    <input
      type="text"
      placeholder="Search"
      class="drop-shadow-sm bg-transparent outline-none"
      bind:value={q}
    />
  </label>
</div>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
