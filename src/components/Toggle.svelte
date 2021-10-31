<script>
  import Toggle from "svelte-toggle";
  let toggled = false;
  function toggle() {
    window.document.body.classList.toggle('dark-mode')
  }
</script>

<main>
  <div class="right" on:click={toggle}>
    <Toggle
    label=""
    switchColor="rgba(197, 197, 197, 0.89)"
    toggledColor="black"
    untoggledColor="white"
    bind:toggled />
  </div>
</main>

<style>
  .right {
    float: right ;
    padding-right: 5%;
    /* padding-right: 40rem; */
  }

  @media only screen and (min-width: 768px) {
    .right {
      padding-right: 15%;
    }
  }
  
</style>