

<script>
    import { onMount } from "svelte";
    let cartItems = 0;
  
    // Simulate fetching cart count
    onMount(() => {
      cartItems = 2; // Replace with actual cart logic
    });
  </script>
  
  <header>
    <h1>MediSin</h1>
    <nav>
      <a href="/" class="hover:underline">Home</a>
      <a href="/shop" class="hover:underline">Shop</a>
      <a href="/about" class="hover:underline">About</a>
    </nav>
    <div class="relative">
      <a href="/cart">
        🛒
        <span>{cartItems}</span>
      </a>
    </div>
  </header>
  
  <style>
  /* Header Styles */
  header {
    background-color: #A4485E;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  header h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

    /* Cart Icon */
    header .relative {
    position: relative;
  }
  
  header .relative span {
    background-color: red;
    color: white;
    font-size: 0.75rem;
    padding: 3px 7px;
    border-radius: 100px;
    position: absolute;
    top: -5px;
    right: -10px;
  }


  </style>
  