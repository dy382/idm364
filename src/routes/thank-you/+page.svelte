<script>
    import { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '$lib/cartStore.js';
    import { goto } from "$app/navigation";


    let cartItems = [];

    $: cart.subscribe(items => {
        cartItems = items;
    });

    function continueShopping() {
        if (cartItems.length > 0) {
            sessionStorage.setItem("orderDetails", JSON.stringify(cartItems));

            clearCart();


            goto("/shop");
        }
    }

    // Calculate total price
    $: totalPrice = cartItems.reduce((total, item) => total + item.Price * item.quantity, 0);
</script>

<div class="page thank-you">
    <h1>🎉 Thank You for Your Order!</h1>
    <p>Your order has been placed successfully. Below is your order summary:</p>


    {#if cartItems.length > 0}
        {#each cartItems as item}
            <div class="cart-item">

                <img alt="The project image" src={item.Images}/>
                    <div class="cart-info">
                    <h4>{item.Name}</h4>
                    <p>Price: ${item.Price} {item.Amount}</p>
                    <p>Quantity: {item.quantity}</p>

                    </div>

            </div>
        {/each}

        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button on:click={continueShopping} class="continueShopping" >Continue Shopping</button>

    {:else}
        <p>Your cart is empty.</p>
    {/if}
</div>

<style>
    .thank-you {
        text-align: center;
        padding: 20px;
        max-width: 600px;
        margin: auto;
        background: white;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    .order-summary {
        margin-top: 20px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: left;
    }

    th {
        background-color: #A4485E;
        color: white;
    }

    h3 span {
        color: green;
        font-weight: bold;
    }

    .continue-shopping {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        background: #A4485E;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        transition: background 0.3s ease-in-out;
    }

    .continue-shopping:hover {
        background: #872f4a;
    }

    .cart-info{
    margin: 0 5px;
}


    .cart-item img {
        max-width: 10rem;
        border-radius: 8px;
        margin: 10px;
    }
    .cart-item {
        display: flex;
        border-radius: 8px;
        margin-top: 20px;
        align-items: center;
        padding: 10px;
        justify-content: space-between;
        text-align: right;
    }
    button {
        margin: 5px;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        height: min-content;
    }
    .continueShopping {
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

.continueShopping:hover {
  background-color: #A4485E;
  color: white
}
</style>