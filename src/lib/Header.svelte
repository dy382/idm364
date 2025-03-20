<script>
  import { totalCartItems } from "$lib/cartStore.js";
  import cartimg from '$lib/assets/cart.png';

  let menuOpen = false;

  function toggleMenu() {
      menuOpen = !menuOpen;
  }
</script>

<header>
  <div class="logo">
      <h1>MediSin</h1>
  </div>

  <!-- Hamburger Menu for Mobile -->
  <button class="menu-toggle" on:click={toggleMenu}>
      ☰
  </button>

  <nav class={menuOpen ? "open" : ""}>
      <a href="/" on:click={() => (menuOpen = false)}>Home</a>
      <a href="/shop" on:click={() => (menuOpen = false)}>Shop</a>
      <a href="/about" on:click={() => (menuOpen = false)}>About</a>
  </nav>

  <div class="cart">
      <a href="/cart">
          <img alt="cart" src={cartimg}/>
          <span>{$totalCartItems}</span>
      </a>
  </div>
</header>

<style>

header {
  background-color: #A4485E;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;

  z-index: 1000;
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: bold;
}

nav {
    display: flex;
    gap: 1.5rem;
  }
  
  nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
  }
  
  nav a:hover {
    border-bottom: 2px black;
    text-decoration: underline;
  }


.cart {
  position: relative;
}

.cart img {
  width: 30px;
}

.cart span {
  background-color: red;
  color: white;
  font-size: 0.75rem;
  padding: 3px 7px;
  border-radius: 100px;
  position: absolute;
  top: -5px;
  right: -10px;
}

/* Mobile Styles */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }

    nav {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      background: #A4485E;
      width: 100%;
      text-align: center;
      padding: 1rem 0;
    }

    nav.open {
      display: flex;
    }

    nav a {
      padding: 10px 0;
    }
  }
</style>
