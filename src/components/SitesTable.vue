<template>
  <table class="table">
    <thead>
      <th v-for="col in cols" :key="`${col}-header`" scope="col">
        {{ col.charAt(0).toUpperCase() + col.slice(1) }}
      </th>
    </thead>
    <tbody>
      <tr v-for="site in sites" :key="site.bucket">
        <td v-for="(col, index) in cols" :key="col">
          <router-link v-if="index == 0" :to="`/sites/${site.bucket}`">{{
            site[col] || "None"
          }}</router-link>
          <span v-else>{{ site[col] || "None" }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "SitesList",
  props: {
    cols: {
      type: Array,
      default() {
        return ["name", "domain", "bucket"];
      },
    },
  },
  data() {
    return {
      sites: [
        {
          name: "Webquills",
          bucket: "webquills.net",
          domain: "www.webquills.net",
          theme: "bs5_blog",
        },
        {
          name: "Mindvessel",
          bucket: "www-mindvessel-net",
          domain: "www.mindvessel.net",
          theme: "bs5_blog",
        },
        {
          name: "Super Site",
          bucket: "super-site-asdf1234",
          domain: "",
          theme: "bs5_blog",
        },
      ],
    };
  },
};
</script>
