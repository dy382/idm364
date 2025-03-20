<script>
    import { onMount } from "svelte";

    let order = [];
    let total = 0;

    onMount(() => {
        const lastOrder = JSON.parse(localStorage.getItem("lastOrder")) || [];
        order = lastOrder;
        total = order.reduce((sum, item) => sum + item.Price * item.quantity, 0);
    });
</script>

<div class="thank-you">
    <h2>🎉 Thank You for Your Order! 🎉</h2>

    {#if order.length > 0}
        <div class="order-summary">
            {#each order as item}
                <div class="order-item">
                    <h4>{item.Name}</h4>
                    <p>Price: ${item.Price}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            {/each}

            <h3>Total Paid: ${total.toFixed(2)}</h3>
        </div>
    {:else}
        <p>No order found.</p>
    {/if}

    <a href="/products" class="back-to-shop">Continue Shopping</a>
</div>

<style>
    .thank-you {
        text-align: center;
        padding: 20px;
        background: #f4f4f4;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 500px;
        margin: 20px auto;
    }

    .order-summary {
        background: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .order-item {
        border-bottom: 1px solid #ddd;
        padding: 10px 0;
    }

    h2 {
        color: #333;
    }

    .back-to-shop {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 15px;
        background: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 5px;
    }

    .back-to-shop:hover {
        background: #0056b3;
    }
</style>
