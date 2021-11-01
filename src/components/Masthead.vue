<template>
  <header
    class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
  >
    <router-link
      to="/"
      class="
        d-flex
        align-items-center
        mb-3 mb-md-0
        me-md-auto
        text-dark text-decoration-none
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="32"
        fill="currentColor"
        stroke="blue"
        class="bi bi-bucket me-2"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z"
        />
      </svg>
      <span class="fs-4">Bukkit CMS | I has a bukkit!</span>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "Masthead",
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
