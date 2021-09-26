<script>
  import Github from 'svelte-icons/fa/FaGithub.svelte'
  export let p

  const l2r = (l) => l.split('/').at(-1)
</script>

<div class="card">
  <div class="">
    <div class="title">
      <h2>&gt; {p.title}</h2>
    </div>
    <div class="repo">
      <div class="icon"><Github /></div>
      <a href={p.repo}> {l2r(p.repo)}</a>
    </div>
    <div class="stack">
      {#each p.stack as s}
        <div class="chip">{s}</div>
      {/each}
    </div>
    <p class="desc">
      {p.desc}
    </p>
  </div>
  <div class="mentor">
    <!-- <div class="avatar">
      <img src="https://avatars.githubusercontent.com/u/56076061?v=4" alt="" />
    </div> -->
    <div class="text">
      <h3>Project Maintainers</h3>
      <div class="maintainers">
        {#each p.maintainers as m, i}
          <a href="https://github.com/{m}" class="uname">{m}</a
          >{#if i < p.maintainers.length - 1}
            <span class="comma">,</span>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .card {
    border: 1px solid white;
    border-radius: 5px;
    padding: 20px;
    /* width: 300px; */
    /* height: 400px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card:hover {
    border: 1px solid #00ff00;
  }

  h2,
  h3 {
    margin: 0;
    color: #00ff00;
  }

  .stack {
    margin: 10px 0;
  }

  .chip {
    display: inline-block;
    font-size: small;
    background-color: #181818;
    margin: 2px;
    padding: 5px 10px;
    border-radius: 100px;
    width: max-content;
  }

  .desc {
    /* margin: 10px 0; */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }

  .mentor {
    display: flex;
    gap: 1rem;
    margin: 20px 0;
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
    height: 20px;
    width: 20px;
    color: white;
    display: inline-block;
  }
</style>
