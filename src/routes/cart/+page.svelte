<script>
    import { cart, removeFromCart, increaseQuantity, decreaseQuantity } from '$lib/cartStore.js';

    let cartItems = [];

    $: cart.subscribe(items => {
        cartItems = items;
    });

    function handleCheckout() {
        if (cartItems.length > 0) {
            checkout();
            goto("/thank-you");
        }
    }

    // Calculate total price
    $: totalPrice = cartItems.reduce((total, item) => total + item.Price * item.quantity, 0);
</script>

<div class="page cart">
    <h2>Shopping Cart</h2>

    {#if cartItems.length > 0}
        {#each cartItems as item}
            <div class="cart-item">
                <div class="cart-product">
                <img alt="The project image" src={item.Images}/>
                    <div class="cart-info">
                    <h4>{item.Name}</h4>
                    <p>Price: ${item.Price} {item.Amount}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button on:click={() => decreaseQuantity(item.ID)}>-</button>
                    <button on:click={() => increaseQuantity(item.ID)}>+</button>
                    </div>
                </div>
                <button class="remove" on:click={() => removeFromCart(item.ID)}>Remove</button>
            </div>
        {/each}

        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button on:click={handleCheckout} class="checkout-btn">Checkout</button>
    {:else}
        <p>Your cart is empty.</p>
    {/if}
</div>

<style>

    .cart img {
        width: 10rem;
        border-radius: 8px;
        margin: 10px;
    }
    .cart-item {
        border-bottom: 1px solid #ddd;
        display: flex;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-top: 20px;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    .cart-product {
        display: flex;
    }
    button {
        margin: 5px;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        height: min-content;
    }

    .remove {
        background: red;
        color: white;
    }

    .remove:hover {
        background: darkred;
    } 
</style>
