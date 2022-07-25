
<script>
  import "../app.css";
import NavBar from "../components/NavBar.svelte";
</script>

<header>
  <NavBar/>
</header>

<main class="container mx-auto px-4">
    <slot/>
</main>