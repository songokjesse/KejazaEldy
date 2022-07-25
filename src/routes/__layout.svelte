
<script>
  import "../app.css";
import NavBar from "../components/NavBar.svelte";
</script>

<svelte:head>
	<title>KejaZaEldy</title>
	<html lang="en" />
</svelte:head>
<header>
  <NavBar/>
</header>

<main class="container mx-auto px-4">
    <slot/>
</main>