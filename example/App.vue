<template>
  <div class="app">
    <!-- <div v-tip="">test</div> -->
    <button
      v-tip.left.click.focus="{ content: 'test', delay: 500, offset: 40 }"
    >
      test
    </button>
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
