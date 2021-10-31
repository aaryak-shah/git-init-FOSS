<script>
  import Github from 'svelte-icons/fa/FaGithub.svelte'
  export let p
  const l2r = (l) => {
    let components = l.split('/')
    return components[components.length - 1]
  }
</script>

<div class="card">
  <div class="">
    <div class="title">
      <h2>&gt; {p.title}</h2>
    </div>
    <div class="repo">
      <div class="icon"><Github /></div>
      <a rel="noopener" href={p.repo} target="_blank" class="repo-link"> {l2r(p.repo)}</a>
    </div>
    <div class="stack">
      {#each p.stack as s}
        <div class="chip">{s}</div>
      {/each}
    </div>
    <p class="desc">
      {p.desc}
    </p>
    <div class="prereqs">
      {#if p.pre}
      <b class="pre">Prerequisites: </b>
      {p.pre}
      {/if}
    </div>
    
  </div>
  <div class="mentor">
    <div class="avatar">
      {#each p.maintainers as m, i}
        <img src={`https://avatars.githubusercontent.com/${m}`} class="t-{i}" alt={m} />
      {/each}
    </div>
    <div class="text">
      <h3>Project Maintainers</h3>
      <div class="maintainers">
        {#each p.maintainers as m, i}
          <a
            rel="noopener"
            href="https://github.com/{m}"
            class="uname"
            target="_blank">{m}</a
          >{#if i < p.maintainers.length - 1}
            <span class="comma">,</span>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  *{
    color: black;
  }
  :global(body.dark-mode) .desc{
		background-color: null;
		color: #bfc2c7;
	}
  :global(body.dark-mode) .uname{
		color: white;
	}
  :global(body.dark-mode) .comma{
		color: white;
	}
  :global(body.dark-mode) .repo-link{
		color: white;
	}
  :global(body.dark-mode) .prereqs{
		color: white;
	}
  :global(body.dark-mode) .pre{
		color: white;
	}
  :global(body.dark-mode) .icon{
    color: white;
  }
  
  .card {
    border: 1px solid black;
    border-radius: 5px;
    padding: 20px;
    /* width: 300px; */
    /* height: 400px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  :global(body.dark-mode) .card:hover {
    border: 1px solid #00ff00;
  }
  :global(body.dark-mode) .card{
    border: 1px solid white;
	}
  .card:hover {
    border: 1px solid rgb(5, 153, 5);
  }
  :global(body.dark-mode) h3{
    color: #00ff00;
  }
  :global(body.dark-mode) h2{
    color: #00ff00;
  }
  
  h2,
  h3 {
    margin: 0;
    color: rgb(5, 153, 5);
  }
  .stack {
    margin: 10px 0;
  }
  :global(body.dark-mode) .chip{
    color: rgb(255, 255, 255);
    background-color: rgb(2, 31, 32);
  }
  .chip {
    display: inline-block;
    font-size: small;
    margin: 2px;
    padding: 5px 10px;
    border-radius: 100px;
    width: max-content;
    border: 1px solid black;
    color: rgb(22, 22, 22);
    background-color: rgb(255, 255, 255);
  }

  .desc {
    /* margin-right: 10px; */
    word-wrap: break-word;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .avatar {
    display: flex;
    margin: 10px 0;
  }

  img {
    height: 40px;
    width: 40px;
    border-radius: 50px;
    border: 4px solid white;
    background-color: white;
  }

  .t-1 {
    transform: translateX(-20px);
  }
  .t-2 {
    transform: translateX(-40px);
  }
  .t-3 {
    transform: translateX(-60px);
  }
  .t-4 {
    transform: translateX(-80px);
  }

  .mentor {
    /* display: flex; */
    gap: 10px;
    margin: 20px 0;
  }

  .maintainers a {
    display: inline-block;
  }

  .comma {
    margin-right: 10px;
  }

  .repo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .icon {
    color: rgb(0, 0, 0);
    height: 20px;
    width: 20px;
    display: inline-block;
  }
</style>
