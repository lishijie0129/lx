<template>
  <div class="datails">
    <div v-html="this.$route.query.obj" class="deta"></div>
  </div>
</template>

<script>
export default {
  name: "datails",
  data() {
    return {};
  }
};
</script>

<style>
.datails {
  width: 100%;
}
.deta p img {
  width: 100%;
}
</style>