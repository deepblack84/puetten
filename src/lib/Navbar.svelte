  <script>
    function toggleMenu() {
      const menu = document.getElementById("menu");
      menu.classList.toggle("hidden");
    }
  </script>
  
  <nav class=" bg-white bg-opacity-90 backdrop-blur-md">
    <div class="max-w-7xl mx-auto sm:px-6 ">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <a href="/" class="text-black font-bold text-2xl">
            P&uuml;tten
          </a>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a href="/about" class="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300">&Uuml;ber Uns</a>
            <a href="#" class="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300">Informationen</a>
            <a href="/service" class="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300">Service</a>
            <a href="#" class="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300">Kontakt</a>
        </div>
       
        </div>
        <div class="md:hidden">
          <button on:click={toggleMenu} class="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <svg id="menu-icon" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
            <svg id="close-icon" class="h-6 w-6 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div id="menu" class="md:hidden hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" class="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">&Uuml;ber Uns</a>
        <a href="#" class="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Informationen</a>
        <a href="#" class="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Service</a>
        <a href="#" class="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Kontakt</a>
      </div>
    </div>
  </nav>
