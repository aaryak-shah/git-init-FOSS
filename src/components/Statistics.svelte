<script defer>
  let stats = [0];
  let Showstats = null;

  import { onMount } from "svelte";
  onMount(() => {
    fetch("https://gitinitapi.jainkunal.me/leaderboardstats").then(
      (response) => {
        response
          .json()
          .then((data) => {
            Showstats = true;
            stats = data;
          })
          .catch((er) => {
            Showstats = false;
            error = er;
          });
      }
    );
    // const response = fetch(URL);
    // const data = response.json();
    // console.log(data);
  });
  export let data;
  // -------------------------------------------------------------------------------------------//
  function createchart() {
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Total PR",
          "Active Contributors",
          "Hard issues",
          "Medium issue",
          "Easy issue",
        ],
        datasets: [
          {
            label: "Statistics",
            data,
            backgroundColor: [
              "rgba(0, 255, 0,1)",
              "rgba(0, 255, 0,1)",
              "rgba(0, 255, 0,1)",
              "rgba(0, 255, 0,1)",
              "rgba(0, 255, 0,1)",
            ],
            borderWidth: 2,
            barThickness: 50,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        maintainAspectRatio: false,
      },
    });
  }
  onMount(createchart);
</script>

{#if Showstats}
  <main>
    <div class="Statistics">
      <div class="stats">
        <h3>
          Total Number of Pull Requests:<span class="result"
            >{stats.TotalPR}</span
          >
          <br />
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
          Number Of Hard Issues:<span class="result">{stats.NumberHard}</span
          ><br />
        </h3>
      </div>
      <div class="divider" />
      <div class="stats">
        <h3>
          Number Of Medium Issues:<span class="result"
            >{stats.NumberMedium}</span
          ><br />
        </h3>
      </div>
      <div class="divider" />
      <div class="stats">
        <h3>
          Number Of Easy Issues:<span class="result">{stats.NumberEasy}</span
          ><br />
        </h3>
      </div>
      <div class="divider" />
    </div>
  </main>
{:else}
  <h2>loading stats ........</h2>
{/if}

<div class="flexbox">
  <div class="Chartbox"><canvas id="myChart" width="3" height="1" /></div>
</div>

<style>
  .Chartbox {
    width: 70%;
    padding: 10px;
    min-height: 400px;
    min-width: 300px;
  }
  .flexbox {
    display: flex;
    margin-bottom: 3rem;
    margin-top: 6rem;
    justify-content: center;
    align-items: center;
    min-height: 200px;
  }
  h2 {
    text-align: center;
  }

  main {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .Statistics {
    align-items: center;
    text-align: center;
    min-width: 75%;
  }
  .stats {
    padding: 1rem 1rem;
  }
  :global(body.dark-mode) .result{
    color: #00ff00;
  }
  .result {
    color: rgb(5, 153, 5);
  }
  .divider {
    height: 1px;
    width: 100%;
    background: linear-gradient(to right, transparent, gray, transparent);
  }
</style>
