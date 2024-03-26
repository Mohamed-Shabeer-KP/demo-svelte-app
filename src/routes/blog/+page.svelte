<script>
    export let data;
</script>

<h2 class="h2">Blog Posts</h2>
<div class="card p-4">
    <ol class="list">
        {#each data.summaries as {slug, title}, i}
        <li>
            <span class="rounded-token ring-outline-token h-6 w-6 text-center "> {i} </span>
            <a class="flex-auto  hover:underline text-primary-900" href="blog/{slug}">{title}</a>
        </li>
        {/each}
    </ol>
</div>

         