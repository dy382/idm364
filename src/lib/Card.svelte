<script>
    export let image = "";
    export let title = "Product Title";
    export let description = "This is a short product description.";
  </script>
  
  <div class="card">
    <img src={image} alt={title} class="card-img" />
    <div class="card-content">
      <h3 class="card-title">{title}</h3>
      <p class="card-description">{description}</p>
      <button class="card-button">Add to Cart</button>
    </div>
  </div>
  