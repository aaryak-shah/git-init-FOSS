<script>
  import Navbar from './components/Navbar.svelte'
  import Projects from './components/Projects.svelte'
  import Leaderboard from './components/Leaderboard.svelte'
  import Footer from './components/Footer.svelte'
  import { getAvatars } from './getAvatars'
  import { onMount } from 'svelte'
  import Statistics from "./components/Statistics.svelte";
  import Toggle from "./components/Toggle.svelte";



  let tab = 0
  let data = [];

 
  onMount(() => {
    if (false) {
      getAvatars()
    }
    window.document.body.classList.toggle('dark-mode')
  })
  onMount(() => {
    const URL = "https://gitinitapi.jainkunal.me/leaderboardstats";
    fetch(URL).then((response) => {
      response
        .json()
        .then((dat) => {
          data.push(dat.TotalPR);
          data.push(dat.NumberOfActiveContributors);
          data.push(dat.NumberHard);
          data.push(dat.NumberMedium);
          data.push(dat.NumberEasy);
        })
        .catch((er) => {
          error = er;
        });
    });
    // const response = fetch(URL);
    // const data = response.json();
    // console.log(data);
  })
</script>

<main>
  <Navbar bind:tab />
  <Toggle />

  {#if tab === 0}
    <Projects />
  {:else if tab === 1}
    <Leaderboard />
  {:else }
  <Statistics {data} />
  <!-- {:else if tab === 3}
    <Toggle /> -->
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
