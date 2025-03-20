<script>
    import { onMount } from "svelte";
    import Card from "$lib/Card.svelte";
    import { goto } from "$app/navigation";

    export let data;
    let featuredProducts = [];

    onMount(() => {
        if (data?.products?.length > 0) {
            featuredProducts = [...data.products]
                .sort(() => 0.5 - Math.random())
                .slice(0, 3);
        }
    });

    function shopNow() {
        goto("/shop");
    }
</script>

<svelte:head>
    <title>MediSin | Home</title>
</svelte:head>

<div class="homepage">
    <section class="hero">
        <div class="hero-content">
            <h1>Welcome to MediSin</h1>
            <p>Your trusted destination for premium medical products and wellness essentials.</p>
            <button class="shop-now" on:click={shopNow}>Shop Now</button>
        </div>
    </section>

    <section class="featured">
        <h2>🌟 Featured Products</h2>
        {#if featuredProducts.length > 0}
            <div class="featured-grid">
                {#each featuredProducts as product}
                    <div class="product-card">
                        <Card
                            Images={product.Images}
                            Name={product.Name}
                            Price={product.Price}
                            Amount={product.Amount}
                            Description={product.Description}
                            ID={product.ID}
                        />
                        <button class="shop-now" on:click={() => goto('/shop')}>View More</button>
                    </div>
                {/each}
            </div>
        {:else}
            <p class="no-products">No featured products available.</p>
        {/if}
    </section>
</div>

<style>
    .homepage {
        text-align: center;
        padding: 20px;
    }


    .hero {
        background: linear-gradient(135deg, #A4485E, #872f4a);
        color: white;
        padding: 80px 20px;
        text-align: center;
        border-radius: 10px;
        margin-bottom: 40px;
    }

    .hero h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }

    .hero p {
        font-size: 1.2rem;
        margin-bottom: 20px;
    }

    .shop-now {
        background: white;
        color: #A4485E;
        border: 1.5px solid #A4485E;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .shop-now:hover {
        background: #A4485E;
        color: white;
    }

    .featured {
        margin-top: 40px;
    }

    .featured h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    .featured-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
    }

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

    .no-products {
        font-size: 18px;
        color: #999;
        margin-top: 20px;
    }

    @media (max-width: 768px) {
        .hero h1 {
            font-size: 2rem;
        }

        .hero p {
            font-size: 1rem;
        }
    }
</style>
