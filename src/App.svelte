<script>
  import Navbar from './components/Navbar.svelte'
  import Projects from './components/Projects.svelte'
  import Leaderboard from './components/Leaderboard.svelte'
  import Footer from './components/Footer.svelte'
  import { getAvatars } from './getAvatars'
  import { onMount } from 'svelte'
  import Button from './components/Toggle.svelte'


  let tab = 0

  onMount(() => {
    if (false) {
      getAvatars()
    }
  })
</script>
<br><br><br><br>
<div class="button">
  <Button>
    Toggle
  </Button>
</div>


<main>
  <Navbar bind:tab />
  {#if tab === 0}
    <Projects />
  {:else if tab === 1}
    <Leaderboard />
  {:else}
    <Button />
  {/if}
  <Footer />
</main>

<style>
  :global(body) {
		background-color: #f2eee2;
		color: black;
		transition: background-color 0.3s
	}
 
	:global(body.dark-mode) {
		background-color: rgb(0, 1, 2);
		color: #bfc2c7;
	}
  
</style>
