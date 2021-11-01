<template>
  <header class="mb-4 border-bottom">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Home</li>
      </ol>
    </nav>
  </header>
  <main class="home">
    <div class="row">
      <div class="card col-md m-2 p-0">
        <h2 class="card-header">My Drafts</h2>
        <div class="card-body">
          <table class="table">
            <tbody>
              <tr>
                <td>Webquills</td>
                <td>That article I promised to write by Thursday.</td>
                <td>
                  <span class="text-danger fw-bold"
                    >Overdue Thursday, November 4, 2021</span
                  >
                </td>
              </tr>
              <tr>
                <td>Mindvessel</td>
                <td>A Cool New Article</td>
                <td>
                  <span>Due Friday, November 4, 2022</span>
                </td>
              </tr>
              <tr>
                <td><span class="text-muted">quick draft</span></td>
                <td>
                  A working title that should be replaced before publishing
                </td>
                <td>
                  <span>No due date</span>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-square"
              viewBox="0 0 16 16"
            >
              <path
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
            Start a quick draft
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="card col-md m-2 p-0">
        <h2 class="card-header">My Sites</h2>
        <div class="card-body">
          <table class="table">
            <thead>
              <th scope="col">Name</th>
              <th scope="col">Domain</th>
              <th scope="col">Bucket</th>
            </thead>
            <tbody>
              <tr>
                <td>Webquills</td>
                <td>www.webquills.com</td>
                <td>webquills.net</td>
              </tr>
              <tr>
                <td>Mindvessel</td>
                <td>www.mindvessel.net</td>
                <td>www-mindevessel-net</td>
              </tr>
              <tr>
                <td>Super Site</td>
                <td>None</td>
                <td>super-site-asdf1234</td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-square"
              viewBox="0 0 16 16"
            >
              <path
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
            Add a Site
          </button>
        </div>
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
  name: "Home",
  components: {},
};
</script>
