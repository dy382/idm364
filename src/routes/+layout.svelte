<script>
    import '../style.css'
    import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

    let { children } = $props();
 </script>
<div>
    <Header/>
    <main>
        {@render children?.()}
    </main>
    <Footer/>
</div>