<script>
    export let data;

  import { addToCart } from '$lib/cartStore.js';

    // Debugging data
    console.log('Product data:', data);

    // Error handling
    $: product = data?.product || {};
    $: {
        if (!data?.product) {
            console.error('No product data available');
        }
    }

</script>


<svelte:head>
    <title>{product.Name}</title>
</svelte:head>

<div class ="page">
<div class="product-container">
  <img alt="The project image" src={product.Images}/>
    <div class="product-information">
      <h1>{product.Name}</h1>
      <p>${product.Price} {product.Amount}</p>
      <p>{product.Description}</p>

      <button on:click={() => addToCart(product)}>Add to Cart</button>
    </div>
    <!-- <a href="/products">← Back to Products</a> -->
</div>
</div>

<style>

.product-container {
  background: white;
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  
}

/* Product Name */
.product-container h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

/* Product Price */
.product-container p:first-of-type {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Product Description */
.product-container p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

/* Add to Cart Button */
.product-container button {
    background-color: white;
  color: #A4485E;
  border: 1.5px solid #A4485E;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.product-container button:hover {
  background: #A4485E;
  color: white
}

/* Back to Products Link */
.product-container a {
  display: inline-block;
  margin-top: 15px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.product-container a:hover {
  color: #007bff;
}

.product-information {
  Padding: 0 10px;
}

</style>