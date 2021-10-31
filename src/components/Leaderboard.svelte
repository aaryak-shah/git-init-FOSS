<script>
 
  import Search from 'svelte-icons/fa/FaSearch.svelte'
  import LeaderboardTile from './LeaderboardTile.svelte'
  import {
    leaderboard,
    pstringify,
    rankify,
    search,
    searchQueryStore,
  } from '../stores/leaderboard'
  import { onMount } from 'svelte'

  let query = ''
  let results = []
  let showLeaderboard = true

  $: {
    searchQueryStore.set(query)
  }

  onMount(() => {
    fetch('https://gitinitapi.jainkunal.me/leaderboard')
      .then((res) => {
        res
          .json()
          .then((data) => {
            showLeaderboard = true
            let lb = []
            for (let key in data) {
              data[key].profile = key
              lb.push(data[key])
            }
            leaderboard.set(lb)
            rankify()
            pstringify()
            searchQueryStore.subscribe((data) => (results = search()))
            console.log(results)
          })
          .catch((e) => {
            showLeaderboard = false
            console.error(e)
          })
      })
      .catch((e) => {
        showLeaderboard = false
        console.error(e)
      })
  })
</script>

{#if showLeaderboard}
  <main>
    <div class="search">
      <div class="icon"><Search /></div>
      <input type="text" placeholder="Search..." bind:value={query} />
    </div>
    {#each results as r, i}
      <LeaderboardTile {i} {r} />
      <div class="divider" />
    {/each}
  </main>
{:else}
  <main>
    <center>
      <h2>Leaderboard is currently not available. Please try again later</h2>
    </center>
  </main>
{/if}

<style>
  main {
    margin: 100px 5%;
  }
  .divider {
    height: 1px;
    width: 100%;
    background: linear-gradient(to right, transparent, gray, transparent);
  }

  :global(body.dark-mode) ::placeholder{
    color: rgba(156, 156, 156, 0.89);
    color: rgba(197, 197, 197, 0.89);

  }  
  ::placeholder{
    color: rgb(78, 78, 78);
  }

  :global(body.dark-mode) input{
    color: white;
  }
  input {
    background-color: transparent;
    color: rgb(39, 39, 39);
    font-size: large;
    border: none;
    outline: none;
    /* border-bottom: 2px solid gray; */
    padding: 10px 5px;
    width: 200px;
  }
  :global(body.dark-mode) input:focus {
    border-bottom: 3px solid white;
  }

  input:focus {
    border-bottom: 3px solid rgb(39, 39, 39);
  }
  
  .search {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 30px;
    color: rgb(39, 39, 39);
  }
   
  :global(body.dark-mode) .icon{
    color: white;
  }
  .icon {
    color: black;
    height: 30px;
    width: 30px;
  }

  @media only screen and (min-width: 768px) {
    main {
      margin: 100px 15%;
    }
  }
  @media only screen and (min-width: 1100px) {
    main {
      margin: 100px 30%;
    }
  }
</style>
