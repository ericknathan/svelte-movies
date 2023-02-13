<nav>
	<a href="/">
    <img src="/svelte-logo.svg" alt="">
    Svelte Movies
  </a>
</nav>

<style>
	nav {
		display: flex;
		min-height: 15vh;
		align-items: center;
		justify-content: center;
	}

	a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

		font-size: 2rem;
		font-weight: bold;
		font-family: 'Poppins';
		color: #121212;
		text-decoration: none;
	}

  
	a::after {
		content: '';
    position: absolute;
    bottom: 5px;
    right: 0;
		
    display: block;
    
		width: 85%;
		height: 4px;
		border-radius: 999px;

    background-color: #ff3e00;
	}


  a img {
    height: 2rem;
  }
</style>
