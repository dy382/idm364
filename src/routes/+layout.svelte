<script>
    import '../style.css'
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';

    let { children } = $props();
 </script>
<div>
    <Header/>
    <main>
        {@render children?.()}
    </main>
    <Footer/>
</div>