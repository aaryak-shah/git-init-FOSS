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
  :global(body.dark-mode) ::placeholder{
    color: rgba(156, 156, 156, 0.89);
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
</style>
