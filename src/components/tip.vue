<template>
  <!--  v-show="visible" -->
  <transition name="v-tip-fade">
    <div
      ref="tip"
      id="_tip"
      class="v-tip"
      :class="tipClass"
      :style="tipStyle"
      v-show="visible"
    >
      {{ content }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'tip',
  computed: {
    tipStyle() {
      return {
        transform: `translate3d(${this.position.left}px, ${this.position.top}px,0px)`,
      };
    },
    tipClass() {
      let classList = [this.theme];
      if (['right', 'left', 'top', 'bottom'].indexOf(this.positions) !== -1) {
        classList.push(`${this.positions}-tip`);
      }
      if (this.class) {
        classList.push(this.class.split(' '));
      }
      return classList;
    },
  },
  data() {
    return {
      position: {
        left: 0,
        top: 0,
      },
      visible: false,
    };
  },
  props: {
    el: {
      require: true,
    },

    ref: {
      type: Object,
    },
    class: {
      type: String,
    },
    theme: {
      type: String,
      default: 'dark',
      validator: function (value) {
        return ['dark', 'light'].indexOf(value) !== -1;
      },
    },
    content: {
      default: '',
    },
    offset: {
      default: 10,
      type: Number,
    },
    delay: {
      default: 200,
      type: Number,
    },
    triggers: {
      default: 'hover',
      validator: function (value) {
        return ['hover', 'click'].indexOf(value) !== -1;
      },
    },
    positions: {
      type: String,
      default: 'bottom',
      validator: function (value) {
        return (
          ['right', 'left', 'top', 'bottom', 'cursor'].indexOf(value) !== -1
        );
      },
    },
  },
  watch: {
    ref:{
      immediate:true,
      handler(newValue){
        console.log(newValue)
        if(newValue){
          debugger
        }
      }
    },
    triggers: {
      immediate: true,
      handler(newValue, oldValue) {
        this.unBindEvent(oldValue);
        this.bindEvent();
      },
    },
    visible: {
      handler() {
        if (this.visible) {
          window.addEventListener('resize', this.handleResize);
        } else {
          window.removeEventListener('resize', this.handleResize);
        }
      },
    },
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    bindEvent() {
      if (this.triggers === 'hover') {
        this.el.addEventListener('mouseenter', this.handlerHover);
        this.el.addEventListener('mouseleave', this.tooltipHidden);
      }
      if (this.triggers === 'click') {
        this.el.addEventListener('click', this.tooltipToggle);
      }
    },
    unBindEvent(triggers) {
      if (triggers || this.triggers === 'hover') {
        this.el.removeEventListener('mouseenter', this.handlerHover);
        this.el.removeEventListener('mouseleave', this.tooltipHidden);
      }
      if (triggers || this.triggers === 'click') {
        this.el.removeEventListener('click', this.tooltipToggle);
      }
    },
    handleResize(event) {
      if (this.visible) {
        if (this.positions === 'cursor') {
          this.visible = false;
        }
        this.setPosition(event);
      }
    },
    tooltipToggle(event) {
      this.visible = !this.visible;
      if (this.visible) {
        this.$nextTick().then(() => this.setPosition(event));
      }
    },
    setPosition(event) {
      let elPosition = this.el.getBoundingClientRect();
      let tipPosition = this.$refs.tip.getBoundingClientRect();
      switch (this.positions) {
        case 'cursor':
          this.position = {
            left: event.pageX + this.offset,
            top: event.pageY + this.offset,
          };
          return;
        case 'left':
          this.position = {
            left: elPosition.left - this.offset - tipPosition.width,
            top:
              elPosition.top + elPosition.height / 2 - tipPosition.height / 2,
          };
          return;
        case 'right':
          this.position = {
            left: elPosition.right + this.offset,
            top:
              elPosition.top + elPosition.height / 2 - tipPosition.height / 2,
          };
          return;
        case 'top':
          this.position = {
            left:
              elPosition.left + elPosition.width / 2 - tipPosition.width / 2,
            top: elPosition.top - this.offset - tipPosition.height,
          };
          return;
        case 'bottom':
          this.position = {
            left:
              elPosition.left + elPosition.width / 2 - tipPosition.width / 2,
            top: elPosition.bottom + this.offset,
          };
      }
    },
    handlerHover(event) {
      if (this.visible) return;
      clearTimeout(this._scheduleTimer);
      this._scheduleTimer = window.setTimeout(() => {
        this.visible = true;
        this.$nextTick().then(() => this.setPosition(event));
      }, this.delay);
    },
    tooltipHidden() {
      this.visible = false;
      clearTimeout(this._scheduleTimer);
    },
  },
};
</script>

<style scoped>
.v-tip {
  will-change: transform;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  padding: 7px 10px;
  font-size: 14px;
  border-radius: 6px;
  line-height: 1.2;
  min-width: 10px;
  word-wrap: break-word;
  pointer-events: none;
  background: var(--backgroundColor);
  color: var(--color);
  border: 1px solid var(--borderColor);
}
.dark {
  --backgroundColor: #303133;
  --color: #fff;
  --borderColor: transparent;
}
.light {
  --backgroundColor: #fff;
  --color: #303133;
  --borderColor: #bdc3c6;
}

.v-tip-fade-enter-active,
.v-tip-fade-leave-active {
  transition: opacity 0.3s;
}
.v-tip-fade-enter,
.v-tip-fade-leave-to {
  opacity: 0;
}
.top-tip::after,
.top-tip::before {
  position: absolute;
  top: 100%;
  left: 50%;
  border: solid transparent;
  content: '';
  height: 0;
  width: 0;
  pointer-events: none;
}

.top-tip::after {
  border-color: transparent;
  border-top-color: var(--backgroundColor);
  border-width: 5px;
  margin-left: -5px;
}
.top-tip::before {
  border-color: transparent;
  border-top-color: var(--borderColor);
  border-width: 6px;
  margin-left: -6px;
}

.bottom-tip::after,
.bottom-tip::before {
  position: absolute;
  bottom: 100%;
  left: 50%;
  border: solid transparent;
  content: '';
  height: 0;
  width: 0;
  pointer-events: none;
}

.bottom-tip::after {
  border-color: transparent;
  border-bottom-color: var(--backgroundColor);
  border-width: 5px;
  margin-left: -5px;
}
.bottom-tip::before {
  border-color: transparent;
  border-bottom-color: var(--borderColor);
  border-width: 6px;
  margin-left: -6px;
}

.right-tip::after,
.right-tip::before {
  position: absolute;
  right: 100%;
  top: 50%;
  border: solid transparent;
  content: '';
  height: 0;
  width: 0;
  pointer-events: none;
}

.right-tip::after {
  border-color: transparent;
  border-right-color: var(--backgroundColor);
  border-width: 5px;
  margin-top: -5px;
}
.right-tip::before {
  border-color: transparent;
  border-right-color: var(--borderColor);
  border-width: 6px;
  margin-top: -6px;
}

.left-tip::after,
.left-tip::before {
  position: absolute;
  left: 100%;
  top: 50%;
  border: solid transparent;
  content: '';
  height: 0;
  width: 0;
  pointer-events: none;
}

.left-tip::after {
  border-color: transparent;
  border-left-color: var(--backgroundColor);
  border-width: 5px;
  margin-top: -5px;
}
.left-tip::before {
  border-color: transparent;
  border-left-color: var(--borderColor);
  border-width: 6px;
  margin-top: -6px;
}
</style>
