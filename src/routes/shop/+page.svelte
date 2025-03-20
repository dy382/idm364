<script>
    import Card from '$lib/Card.svelte';
    import { addToCart } from '$lib/cartStore.js';

    export let data;
</script>

<svelte:head>
    <title>Shop</title>

</svelte:head>

<div class ="page">
  <h1>Check out our latest products</h1>
<h2>Don't Miss Out!</h2>
<p>Shop our exclusive collection today and enjoy amazing discounts.</p>

{#if data.products && data.products.length > 0}
    <div class="product-grid">
        {#each data.products as product}
            <div class="product-card">
                <Card
                    Images={product.Images}
                    Name={product.Name}
                    Price={product.Price}
                    Amount={product.Amount}
                    Description={product.Description}
                    ID={product.ID}

                />

    <button on:click={() => addToCart(product)}>Add to Cart</button>
            </div>
        {/each}
    </div>
{:else}
    <p class="no-products">No products found.</p>
{/if}
</div>

<style>


/* Product Grid */

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

}
  @media (min-width: 640px) {
    .grid-cols-1 {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  
  @media (min-width: 768px) {
    .grid-cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .grid-cols-3 {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  /* Product Card */

  
  .product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: white;
    padding: 10px;
    text-align: center;
    transition: transform 0.3s ease-in-out;
  }
  
  .product-card:hover {
    background-color: #f3e4d9;
  }

  .product-card img {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
  }
  
  .product-card h3 {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
  
  .product-card p {
    font-size: 1rem;
    color: #666;
  }
  
  .product-card button {
    background-color: white;
  color: #A4485E;
  border: 1.5px solid #A4485E;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.product-card button:hover {
  background-color: #A4485E;
  color: white
}

.product-card button:active {
  background-color: green;
}




/* No Products Message */
.no-products {
  font-size: 18px;
  color: #999;
  margin-top: 20px;
}
</style>