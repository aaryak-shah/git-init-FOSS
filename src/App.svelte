<script>
  import Navbar from './components/Navbar.svelte'
  import Projects from './components/Projects.svelte'
  import Leaderboard from './components/Leaderboard.svelte'

  let tab = 0
</script>

<main>
  <Navbar bind:tab />
  {#if tab === 0}
    <Projects />
  {:else}
    <Leaderboard />
  {/if}
</main>

<style>
</style>
