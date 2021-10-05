<script>
  import Github from 'svelte-icons/fa/FaGithub.svelte'
  
  export let i = 0
  export let r

  const l2p = (l) => {
    let components = l.split('/')
    return components[components.length - 1]
  }
  r.rollNumber = r.rollNumber.toUpperCase();
</script>

<div class="tile" class:top={r.rank === 1}>
  <div class="left">
    <div class="rank">
      <h2>#{r.rank}</h2>
    </div>
    <div class="profile">
      <h3>{r.name}</h3>
      <div class="subtitle">
        <img src={`https://avatars.githubusercontent.com/${r.profile}`} class="avatar"  alt={r.profile} />
        <a rel="noopener" href="https://github.com/{r.profile}" target="_blank">{l2p(r.profile)}</a>
        <div class="muted">&bull;</div>
        <div class="muted">{r.rollNumber}</div>
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
  img {
    height: 20px;
    width: 20px;
    border-radius: 50px;
    border: 3px solid white;
    background-color: white;
    display: inline-block;
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
    color: white;
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
    
  }
</style>
