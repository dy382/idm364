<script>
    import { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '$lib/cartStore.js';
    import { goto } from "$app/navigation";


    let cartItems = [];

    $: cart.subscribe(items => {
        cartItems = items;
    });

    function handleCheckout() {
        if (cartItems.length > 0) {
            sessionStorage.setItem("orderDetails", JSON.stringify(cartItems));

            // clearCart();


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
                <div class="addsubtract">
                    <button on:click={() => decreaseQuantity(item.ID)}>-</button>
                    <button on:click={() => increaseQuantity(item.ID)}>+</button>
                </div>
                    </div>
                </div>
                <button class="remove" on:click={() => removeFromCart(item.ID)}>Remove</button>
            </div>
        {/each}

        <div class="totalcheckout">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button on:click={handleCheckout} class="checkout-btn" >Checkout</button>
        </div>
    {:else}
        <p>Your cart is empty.</p>
    {/if}
</div>

<style>
.cart-info{
    margin: 0 5px;
}


    .cart img {
        max-width: 10rem;
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

.addsubtract {
    background-color: white;
  color: #A4485E;
  border: 1.5px solid #A4485E;

  font-size: 10px;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  justify-content: space-between;
  width: fit-content;
}

.addsubtract button {
    text-decoration: none;
    color: #A4485E;
    background-color: white;
}

.checkout-btn {
    background-color: white;
  color: #A4485E;
  border: 1.5px solid #A4485E;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  width: fit-content;
}

.checkout-btn:hover {
  background-color: #A4485E;
  color: white
}

.totalcheckout {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;
}
    .remove {
        background: red;
        color: white;
        margin: 0 5px;
    }

    .remove:hover {
        background: darkred;
    } 
</style>
