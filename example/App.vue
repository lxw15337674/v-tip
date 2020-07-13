<template>
  <div class="app">
    <!-- <div v-tip="">test</div> -->
    <button
      v-tip.left.click.focus="{
        content: 'test',
        delay: 500,
        offset: 40,
        triggers: 'hover',
      }"
    >
      test1
    </button>
    <div v-tip="'test'">11</div>
    <div ref="ref">ref123123</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style></style>
