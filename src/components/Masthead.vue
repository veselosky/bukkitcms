<template>
  <header
    class="
      d-flex
      flex-wrap
      align-items-center
      justify-content-center justify-content-md-between
      py-3
      mb-4
      border-bottom
    "
  >
    <div class="brand d-flex col-md-3">
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
    </div>
    <ul
      class="nav d-flex col-12 col-md-auto mb-2 justify-content-center mb-md-0"
    >
      <li><a href="#" class="nav-link px-2 link-primary">Sites</a></li>
      <li><a href="#" class="nav-link px-2 link-primary">Apps</a></li>
      <li><a href="#" class="nav-link px-2 link-primary">Themes</a></li>
    </ul>
    <div class="dropdown col-md-3 text-end">
      <a
        href="#"
        class="d-block link-dark text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/veselosky.png"
          alt="mdo"
          width="32"
          height="32"
          class="rounded-circle"
        />
      </a>
      <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
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
