<script>
  import Instagram from 'svelte-icons/fa/FaInstagram.svelte'
  import Facebook from 'svelte-icons/fa/FaFacebookSquare.svelte'
  import LinkedIn from 'svelte-icons/fa/FaLinkedin.svelte'
  import Medium from 'svelte-icons/fa/FaMedium.svelte'
</script>

<main>
  <div class="date">AASF/2021</div>
  <div class="socials">
    <a
      rel="noopener"
      aria-label="Instagram"
      href="https://instagram.com/aasf_iiitmg"
      target="_blank"
      class="icon"><Instagram /></a
    >
    <a
      rel="noopener"
      aria-label="Facebook"
      href="https://www.facebook.com/aasfiiitm/"
      target="_blank"
      class="icon"><Facebook /></a
    >
    <a
      rel="noopener"
      aria-label="LinkedIn"
      href="https://www.linkedin.com/company/aasf-iiitmg"
      target="_blank"
      class="icon"><LinkedIn /></a
    >
    <a
      rel="noopener"
      aria-label="Medium"
      href="https://medium.com/tech-iiitg"
      target="_blank"
      class="icon"><Medium /></a
    >
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  .socials {
    display: flex;
    gap: 1rem;
  }

  .icon{
    height: 40px;
    width: 40px;
    color: white;
  }

  .icon:hover {
    cursor: pointer;
    color: #00ff00;
  }
</style>
