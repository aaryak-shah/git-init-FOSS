<script>
  import Search from 'svelte-icons/fa/FaSearch.svelte'
  import LeaderboardTile from './LeaderboardTile.svelte'
  import { rankify, search, searchQueryStore } from '../stores/leaderboard'
  import { onMount } from 'svelte'

  let query = ''
  let results = []

  $: {
    searchQueryStore.set(query)
  }

  onMount(() => {
    // fetch('http://localhost:3000/').then((res) => {
    //   console.log(res)
    // })
  })

  rankify()
  searchQueryStore.subscribe((data) => (results = search()))

  // let n = [...Array(25).keys()]
</script>

{#if false}
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
      <h1>- Coming Soon -</h1>
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

  input {
    background-color: transparent;
    color: white;
    font-size: large;
    border: none;
    outline: none;
    /* border-bottom: 2px solid gray; */
    padding: 10px 5px;
  }

  input:focus {
    border-bottom: 3px solid white;
  }

  .search {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 30px;
  }

  .icon {
    height: 30px;
    width: 30px;
    color: white;
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
