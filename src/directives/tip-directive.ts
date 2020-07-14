import Vue from 'vue';
// @ts-ignore
import tipComponent from '@/components/tip.vue';

export default function buildDirective() {
  return {
    bind(el, binding, vnode, oldVnode) {
      const tipConstruct = Vue.extend(tipComponent);
      let props = { el: el, ...binding.value };
      el.tip = new tipConstruct({ propsData: props }).$mount();
    },
    inserted(el, binding, vnode, oldVnode) {
      el.tip.$watch('visible', function () {
        document.body.appendChild(el.tip.$el);
      });
    },
    update(el, binding, vnode, oldVnode) {
      let props = { el: el, ...binding.value };
      Object.assign(el.tip, props);
    },
    unbind(el, binding, vnode, oldVnode) {
      if (document.body.contains(el.tip.$el)) {
        document.body.removeChild(el.tip.$el);
      }
      // el.tip.$destroy();
    },
  };
}
