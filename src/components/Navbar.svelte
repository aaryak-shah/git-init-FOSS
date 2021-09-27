<script>
  import { onMount } from 'svelte'
  import { FaChevronUp } from 'svelte-icons/fa'
  import Menu from 'svelte-icons/fa/FaBars.svelte'
  import Close from 'svelte-icons/fa/FaChevronUp.svelte'

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
    <div class="tab" class:current={tab === 0} on:click={() => setTab(0)}>
      Projects
    </div>
    <div class="tab" class:current={tab === 1} on:click={() => setTab(1)}>
      Leaderboard
    </div>
  </div>
</div>

<style>
  .nav-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    border-bottom: 1px solid gray;
    background-color: rgba(0, 0, 0, 0.95);
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
  }

  .mob-tabs {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  .tabs {
    display: none;
    gap: 1rem;
    align-items: center;
  }

  .tab:hover {
    cursor: pointer;
    font-weight: bold;
  }

  .logo {
    font-size: larger;
    font-weight: bold;
  }

  .right {
    text-align: right;
  }

  .current {
    background-color: white;
    color: black;
  }

  .green {
    color: #00ff00;
  }

  h1 {
    margin: 0;
    cursor: pointer;
  }

  .right a {
    display: none;
  }

  .icon {
    height: 20px;
    width: 20px;
    color: #00ff00;
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
    .right h1 {
      display: none;
    }
    .icon {
      display: none;
    }
  }

  .hide {
    display: none;
  }
</style>
