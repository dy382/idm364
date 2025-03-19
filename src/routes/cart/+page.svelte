<script>
    import { cart, removeFromCart, increaseQuantity, decreaseQuantity } from '$lib/cartStore.js';

    let cartItems = [];

    $: cart.subscribe(items => {
        cartItems = items;
    });

    // Calculate total price
    $: totalPrice = cartItems.reduce((total, item) => total + item.Price * item.quantity, 0);
</script>

<div class="cart">
    <h2>Shopping Cart</h2>

    {#if cartItems.length > 0}
        {#each cartItems as item}
            <div class="cart-item">
                <h4>{item.Name}</h4>
                <p>Price: {item.Price}</p>
                <p>Quantity: {item.quantity}</p>
                <button on:click={() => decreaseQuantity(item.ID)}>-</button>
                <button on:click={() => increaseQuantity(item.ID)}>+</button>
                <button class="remove" on:click={() => removeFromCart(item.ID)}>Remove</button>
            </div>
        {/each}

        <h3>Total: ${totalPrice.toFixed(2)}</h3>
    {:else}
        <p>Your cart is empty.</p>
    {/if}
</div>

<style>
/*     .cart {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-top: 20px;
        text-align: center;
        max-width: 400px;
    }

    .cart-item {
        border-bottom: 1px solid #ddd;
        padding: 10px 0;
    }

    button {
        margin: 5px;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .remove {
        background: red;
        color: white;
    }

    .remove:hover {
        background: darkred;
    } */
</style>
