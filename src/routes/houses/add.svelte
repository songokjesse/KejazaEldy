
<script>
  import { goto } from '$app/navigation';
  import { createForm } from "svelte-forms-lib";
// $: console.log(prisma)
</script>
<div class="text-sm breadcrumbs">
  <ul>
    <li>
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Home
      </a>
    </li> 
    <li>
      <a href="/houses">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Houses
      </a>
    </li> 
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
      Add House
    </li>
  </ul>
</div>

<div class="mt-4 mb-4">
<form >
<div class="card w-full bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Add House</h2>
  
<div class="form-control w-full ">
  <label class="label" >
    <span class="label-text">House Name?</span>
  </label>
  <input type="text" placeholder="Type here" class="input input-bordered w-full" />
</div>

<div class="form-control w-full ">
  <label class="label" >
    <span class="label-text">House Location</span>
  </label>
  <input type="text" placeholder="Type here" class="input input-bordered w-full" />
</div>


<div class="form-control w-full ">
  <label class="label" >
    <span class="label-text">House Size</span>
  </label>
  <input type="text" placeholder="Type here" class="input input-bordered w-full" />
</div>

<div class="form-control w-full ">
  <label class="label" >
    <span class="label-text">Price for Rent</span>
  </label>
  <input type="text" placeholder="Type here" class="input input-bordered w-full" />
</div>

    <div class="card-actions justify-end mt-2">
      <button class="btn btn-primary">Add</button>
    </div>
  </div>
</div>
</form>
</div>