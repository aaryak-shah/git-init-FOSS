<script>
  import Navbar from './components/Navbar.svelte'
  import Projects from './components/Projects.svelte'
  import Leaderboard from './components/Leaderboard.svelte'
  import Footer from './components/Footer.svelte'
  import { getAvatars } from './getAvatars'
  import { onMount } from 'svelte'

  let tab = 0

  onMount(() => {
    if (false) {
      getAvatars()
    }
  })
</script>

<main>
  <Navbar bind:tab />
  {#if tab === 0}
    <Projects />
  {:else}
    <Leaderboard />
  {/if}
  <Footer />
</main>

<style>
</style>
