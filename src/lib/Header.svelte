<script>
    import { onMount } from "svelte";
    let cartItems = 0;
  
    // Simulate fetching cart count
    onMount(() => {
      cartItems = 2; // Replace with actual cart logic
    });
  </script>
  
  <header class="bg-gray-900 text-white p-4 flex justify-between items-center">
    <h1 class="text-xl font-bold">MyShop</h1>
    <nav class="flex gap-6">
      <a href="/" class="hover:underline">Home</a>
      <a href="/products" class="hover:underline">Shop</a>
      <a href="/about" class="hover:underline">About</a>
      <a href="/contact" class="hover:underline">Contact</a>
    </nav>
    <div class="relative">
      <a href="/cart" class="flex items-center">
        🛒
        <span class="absolute top-0 right-0 bg-red-500 text-xs px-2 py-1 rounded-full">{cartItems}</span>
      </a>
    </div>
  </header>
  
  <style>
    header { box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
  </style>
  