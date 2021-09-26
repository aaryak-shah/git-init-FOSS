<script>
  import Search from 'svelte-icons/fa/FaSearch.svelte'
  import ProjectCard from './ProjectCard.svelte'
  import { pstringify, searchQueryStore, search } from '../stores/projects'

  let query = ''
  let results = []

  $: {
    searchQueryStore.set(query)
  }

  pstringify()
  searchQueryStore.subscribe((data) => (results = search()))
</script>

<main>
  <div class="search">
    <div class="icon"><Search /></div>
    <input type="text" placeholder="Search..." bind:value={query} />
  </div>
  <div class="projects">
    {#each results as p}
      <ProjectCard {p} />
    {/each}
  </div>
</main>

<style>
  main {
    margin: 100px 5%;
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
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
</style>
