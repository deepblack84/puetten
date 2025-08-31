<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
	//let visible = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Puetten GmbH & Co KG - Haustechnik</title>
    
</svelte:head>


	<div class="bg-jomi w-auto overflow-hidden">
		<div class="md:p-5 ">
			<div class="px-8 pt-8 bg-white xl:px-0">
				<span >
					<!-- Navigation Bar-->
					 <Navbar />
				</span>
			
				<main>
					<div>
						{@render children?.()}
					</div>
				</main>

				
		  <!-- Footer -->
		  <span> 
			<Footer />
			</span>
			</div>
		</div>
	</div>
