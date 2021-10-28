<script>
  let stats = [];
  let error = null;

  import { onMount } from "svelte";
  onMount(() => {
    const URL = "https://gitinitapi.jainkunal.me/leaderboardstats";
    fetch(URL).then((response) => {
      response
        .json()
        .then((data) => {
          stats = data;
          console.log(data);
        })
        .catch((er) => {
          error = er;
        });
    });
    // const response = fetch(URL);
    // const data = response.json();
    // console.log(data);
  });
</script>

{#if error == null}
  <main>
    <div class="Statistics">
      <div class="stats">
        <h3>
          Total Number of Pull request :<span class="result"
            >{stats.TotalPR}</span
          ><br />
        </h3>
      </div>
      <div class="divider" />
      <div class="stats">
        <h3>
          Number Of Active Contributors:<span class="result"
            >{stats.NumberOfActiveContributors}</span
          ><br />
        </h3>
      </div>
      <div class="divider" />
      <div class="stats">
        <h3>
          Number Of Hard issue:<span class="result">{stats.NumberHard}</span><br
          />
        </h3>
      </div>
      <div class="divider" />
      <div class="stats">
        <h3>
          Number Of Medium issue:<span class="result">{stats.NumberMedium}</span
          ><br />
        </h3>
      </div>
      <div class="divider" />
      <div class="stats">
        <h3>
          Number Of Easy issue:<span class="result">{stats.NumberEasy}</span><br
          />
        </h3>
      </div>
      <div class="divider" />
    </div>
  </main>
{:else}
  <h2>loading stats ........</h2>
{/if}

<style>
  main {
    margin: 100px;
  }
  .Statistics {
    align-items: center;
    text-align: center;
    min-width: 75%;
  }
  .stats {
    padding: 1rem 1rem;
  }
  .result {
    color: #00ff00;
  }
  .divider {
    height: 1px;
    width: 100%;
    background: linear-gradient(to right, transparent, gray, transparent);
  }
</style>
