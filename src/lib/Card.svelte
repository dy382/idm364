<script>
    import { addToCart } from '$lib/cartStore.js';

  export let Name;
  export let Price;
  export let Description;
  export let Images;

  export let ID; // Ensure this exists
</script>

<a class="card" href={`/shop/${ID}`}>


      <div>
        <img src={Images}/>
          <h2>{Name}</h2>
          <p>{Price}</p>
          <p>{Description}</p>
      </div>

</a>
  