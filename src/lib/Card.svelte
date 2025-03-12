<script>
  export let Name;
  export let Price;
  export let Description;

  export let ID; // Ensure this exists
</script>

<a href={`/drugs/${ID}`} class="block">
  <div
      class="max-w-sm cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
  >

      <div class="p-6">
          <h2 class="mb-2 text-xl font-semibold text-gray-800">{Name}</h2>
          <p class="mb-2 text-gray-600">${Price}</p>
          <p class="mb-4 text-gray-600">{Description}</p>
      </div>
  </div>
</a>
  