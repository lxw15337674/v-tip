<template>
  <div class="app">
    <!-- <div v-tip="">test</div> -->
    <div class="toggle">
<!--      <button @click="toggle">切换</button>-->
    </div>
    <button
      class="button"
      @click="click('test1')"
      v-if="show"
      v-for="item in 1000"
      v-tip="{
        content: content,
        delay: 1000,
        positions: 'top',
        triggers: 'click',
        class: 'tooltip-custom tip',
      }"
    >
      test1
    </button>
    <button
      ref="test1"
      @click="click('test1')"
      v-tip="{
        content: content,
        delay: 1000,
        theme: 'dark',
        positions: 'top',
        triggers: 'click',
        class: 'tooltip-custom tip',
      }"
    >
      test1
    </button>
    <button
      ref="test2"
      @click="click('test2')"
      v-tip="{
        content: content,
        delay: 500,
        positions: 'left',
        triggers: 'click',
      }"
    >
      test2
    </button>
    <button
      class="button"
      ref="button"
      v-tip="{
        content: content,
        delay: 500,
        positions: 'cursor',
        triggers: 'click',
      }"
    >
      {{ content }}
    </button>
    <button
      class="button"
      v-tip="{
        ref: content,
        delay: 500,
        positions: 'cursor',
        triggers: 'click',
      }"
    >
      ref
    </button>
    <button
      class="button"
      v-tip="{
        ref: 'content',
        delay: 500,
        positions: 'cursor',
        triggers: 'click',
      }"
    >
      ref
    </button>
    <!--    <button ref="button" class="button" v-tip="content">-->
    <!--      test-->
    <!--    </button>-->

    <!--    <div v-tip="{ content: '11' }">11</div>-->
    <!--    <div ref="tooltipRef">ref123123</div>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      content: 'button',
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
button {
  height: 100px;
  width: 100px;
}
</style>
