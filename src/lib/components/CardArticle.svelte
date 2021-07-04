<script>
  export let article;

  let { id, title, description, category, url } = article;
</script>

<div class="shadow-md">
  <fieldset>
    <details>
      <summary class="list-none font-bold">
          {article.title}
      </summary>
      {description}
    </details>
  </fieldset>
</div>

<!-- markup (zero or more items) goes here -->
<style>
  h1 {
    @apply text-2xl font-bold;
  }
  /* your styles go here */
</style>
