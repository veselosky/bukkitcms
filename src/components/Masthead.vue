<template>
  <header class="blog-header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-8">
        <a class="blog-header-logo text-dark" href="/"
          >{{ site.name }}
          <span v-if="site.tagline">| {{ site.tagline }}</span></a
        >
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <a class="text-muted" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mx-3"
          >
            <circle cx="10.5" cy="10.5" r="7.5"></circle>
            <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
          </svg>
        </a>
        <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Masthead",
  data() {
    return {
      site: {
        name: "Bukkit CMS",
        tagline: "I has a bukkit!",
      },
    };
  },
};
</script>

<style scoped>
.blog-header {
  line-height: 1;
}
.blog-header-logo {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
  font-size: 2.25rem;
}
.blog-header-logo:hover {
  text-decoration: none;
}
</style>
