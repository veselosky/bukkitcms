<template>
  <header class="mb-4 border-bottom">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item">
          <router-link to="/sites">Sites</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ bucketname }}
        </li>
      </ol>
    </nav>
  </header>
  <main class="home">
    <div class="row">
      <div class="card col-md m-2 p-0">
        <h2 class="card-header">Pages</h2>
        <div class="card-body"></div>
      </div>
      <div class="card col-md m-2 p-0">
        <h2 class="card-header">My Visitors</h2>
        <div class="card-body">To do: Show page view stats for each site.</div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Site",
  computed: {
    bucketname() {
      return this.$route.params.bucketname;
    },
  },
};
</script>
