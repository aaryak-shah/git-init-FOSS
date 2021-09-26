<script>
  import Github from 'svelte-icons/fa/FaGithub.svelte'

  export let i = 0
  export let r

  const l2p = (l) => l.split('/').at(-1)
</script>

<div class="tile" class:top={r.rank === 1}>
  <div class="left">
    <div class="rank">
      <h2>#{r.rank}</h2>
    </div>
    <div class="profile">
      <h3>{r.name}</h3>
      <div class="subtitle">
        <div class="icon"><Github /></div>
        <a href={r.profile}>{l2p(r.profile)}</a>
        <div class="muted">&bull;</div>
        <div class="muted">{r.rollno}</div>
      </div>
    </div>
  </div>
  <div class="score">
    <h2>Score: {r.score}</h2>
  </div>
</div>

<style>
  .tile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    gap: 20px;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .rank {
    width: 30px;
    text-align: right;
  }

  h3 {
    margin: 0;
    font-size: small;
  }

  h2 {
    font-size: medium;
  }

  a {
    font-size: small;
    display: inline-block;
  }

  .top h2,
  .top h3 {
    color: #00ff00;
  }

  .muted {
    color: gray;
    font-size: small;
    display: inline-block;
  }

  .score {
    text-align: right;
  }

  .icon {
    height: 15px;
    width: 15px;
    color: white;
    display: inline-block;
  }

  @media only screen and (min-width: 768px) {
    .rank {
      width: 50px;
    }
    h2 {
      font-size: x-large;
    }
    h3 {
      font-size: large;
    }
    a,
    .muted {
      font-size: medium;
    }
    .icon {
      height: 20px;
      width: 20px;
    }
  }
</style>
