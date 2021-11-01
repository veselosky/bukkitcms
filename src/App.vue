<template>
  <Masthead />
  <router-view />
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import Masthead from "@/components/Masthead.vue";
export default {
  name: "App",
  components: {
    Masthead,
  },
};
</script>
<style lang="scss"></style>
