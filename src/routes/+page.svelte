<script lang="ts">
    const { data } = $props();
        $inspect(data);
    // $inspect(data);
</script>


<h1>Welcome</h1>

{#if data.products.length > 0}
        <ul>
            {#each data.products as product}
                <li>{product.Name}</li>
                <li>{product.Description}</li>
            {/each}
        </ul>
    {:else}
        <p>No products found.</p>
    {/if}