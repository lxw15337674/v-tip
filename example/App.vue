<template>
  <div class="app">
    <!-- <div v-tip="">test</div> -->
    <div class="toggle">
      <button @click="toggle">切换</button>
    </div>
    <button
      class="button"
      @click="click('test1')"
      v-if="show"
      v-for="item in 10"
      v-tip="{
        content: content,
        delay: 500,
        positions: 'top',
        triggers: 'hover',
      }"
    >
      test1
    </button>
    <button
      class="button"
      @click="click('test2')"
      v-tip="{
        content: content,
        delay: 500,
        positions: 'top',
        triggers: 'hover',
      }"
    >
      test2
    </button>
    <button
      class="button"
      v-tip="{
        content: content,
        delay: 500,
        positions: 'cursor',
        triggers: 'click',
      }"
    >
      test
    </button>
    <!--    <div v-tip="{ content: '11' }">11</div>-->
    <!--      <div ref="ref">ref123123</div>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      content: 'left',
      show: false,
      loop: 1,
    };
  },
  methods: {
    click(content) {
      this.content = content;
    },
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.toggle {
  position: fixed;
}
.button {
  height: 100px;
  width: 100px;
}
</style>
