<script>
  import { onMount } from 'svelte'
  import { FaChevronUp } from 'svelte-icons/fa'
  import Menu from 'svelte-icons/fa/FaBars.svelte'
  import Close from 'svelte-icons/fa/FaChevronUp.svelte'
  // import ToggleOn from 'svelte-icons/fa/FaToggleOn.svelte'
  // import ToggleOf from 'svelte-icons/fa/FaToggleOf.svelte'

  // function toggle() {
  //   window.document.body.classList.toggle('dark-mode')
  // }
  export let tab = 0
  let openMenu = false

  const setTab = (i) => {
    tab = i
    openMenu = false
  }
  const toggleMenu = () => (openMenu = !openMenu)

  onMount(() => {
    document.querySelector('.nav-box').addEventListener('click', (e) => {
      e.stopPropagation()
    })

    window.addEventListener('click', (e) => {
      openMenu = false
    })
  })
</script>

<div class="nav-box">
  <div class="navbar">
    <div class="logo">git-init-FOSS<span class="green">@AASF</span></div>
    <div class="tabs">
      <div class="tab" class:current={tab === 0} on:click={() => setTab(0)}>
        Projects
      </div>
      <div class="tab" class:current={tab === 1} on:click={() => setTab(1)}>
        Leaderboard
      </div>
      <div class="tab" class:current={tab === 2} on:click={() => setTab(2)}>
        Statistics
      </div>
      <!-- <div class="tab" class:current={tab === 3} on:click={toggle}>
        Toggle
      </div> -->
    </div>
    <div class="right">
      <a rel="noopener" href="https://github.com/AASF-IIITM">GitHub</a>
      <div class="icon" class:hide={openMenu} on:click={toggleMenu}>
        <Menu />
      </div>
      <div class="icon" class:hide={!openMenu} on:click={toggleMenu}>
        <FaChevronUp />
      </div>
      <!-- <h1 class="green" class:hide={openMenu} on:click={toggleMenu}>+</h1>
      <h1 class="green" class:hide={!openMenu} on:click={toggleMenu}>-</h1> -->
    </div>
  </div>
  <div class="mob-tabs" class:hide={!openMenu}>
    <div class="tab" class:mob-current={tab === 0} on:click={() => setTab(0)}>
      Projects
    </div>
    <div class="tab" class:mob-current={tab === 1} on:click={() => setTab(1)}>
      Leaderboard
    </div>
    <div class="tab" class:mob-current={tab === 2} on:click={() => setTab(2)}>
      Statistics
    </div>
    <!-- <div class="tab" class:current={tab === 3} on:click={toggle}>
      Toggle
    </div> -->
  </div>
</div>

<style>
  *{color:rgb(0, 0, 0);}
  :global(body.dark-mode) *{
    color: white;
  }
  :global(body.dark-mode) .nav-box{
    background-color: black;
  }
  .nav-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    border-bottom: 1px solid gray;
    background-color:  #f2eee2;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
  }

  .mob-tabs {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
  }

  .tabs {
    display: none;
    gap: 1rem;
    align-items: center;
  }

  .tab{
    transition: all 0.2s ease-out;
  }
  :global(body.dark-mode) .tab:hover{
    background-color:white;
    color: rgba(0, 0, 0, 0.95);
    border: 2px solid white;
    border-radius: 3px;
  }
  .tab:hover {
    cursor: pointer;
    background-color:rgb(0, 0, 0);
    color: rgba(255, 255, 255, 0.95);
    padding: 6px 8px;
    border: 2px solid rgb(0, 0, 0);
    border-radius: 3px;
  }

  .logo {
    font-size: larger;
    font-weight: bold;
  }

  .right {
    text-align: right;
  }
  :global(body.dark-mode) .mob-current{
    color: #00ff00;
  }
  .mob-current{
    color: rgb(5, 153, 5);
    font-weight: bolder;
  }
  :global(body.dark-mode) .current{
    border: 2px solid white;
  }
  .current {
    padding: 5px 7px;
    border: 2px solid black;
    border-radius: 3px;
  }
  :global(body.dark-mode) .green{
    color: #00ff00;
  }
  .green {
    color: rgb(5, 153, 5);
  }

  /* h1 {
    margin: 0;
    cursor: pointer;
  } */

  .right a {
    display: none;
  }
  :global(body.dark-mode) a{
    border: 2px solid white;
  }
  a{
    text-decoration: none;
    border: 2px solid black;
    padding: 9px 18px;
    border-radius: 4px;
    transition: all 0.5s ease-in;
  }
  :global(body.dark-mode) a:hover{
    color: rgba(0, 0, 0, 0.95);
    background-color: white;
  }
  a:hover{
    background-color: rgb(0, 0, 0);
    color: rgba(255, 255, 255, 0.95);
    font-weight: bold;
  }
  :global(body.dark-mode) .icon{
    color: #00ff00;
  }

  .icon {
    height: 20px;
    width: 20px;
    color: rgb(5, 153, 5);
    cursor: pointer;
  }
  @media only screen and (min-width: 768px) {
    .navbar {
      padding: 20px 15%;
    }
  }
  @media only screen and (min-width: 1100px) {
    .tabs {
      display: flex;
    }
    .logo,
    .right {
      width: 300px;
    }
    .mob-tabs {
      display: none;
    }
    .right a {
      display: inline;
    }
    /* .right h1 {
      display: none;
    } */
    .icon {
      display: none;
    }
  }

  .hide {
    display: none;
  }
</style>
