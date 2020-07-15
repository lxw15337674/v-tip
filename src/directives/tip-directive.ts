import Vue from 'vue';
// @ts-ignore
import tipComponent from '@/components/tip.vue';
import tool from 'src/utils';
import Tooltip from './tooltip';

export default function buildDirective(defaultOptions) {
  return {
    bind(el, binding,vnode ) {
      if (defaultOptions) {
        Tooltip.defaults(defaultOptions);
      }
    },
    inserted(el, binding, vnode, oldVnode) {
      el.tip = new Tooltip(el,vnode,binding.value);
      let unwatch = el.tip.$watch('visible', function () {
        appendChild();
      });
      function appendChild() {
        document.body.appendChild(el.tip.$el);
        unwatch();
      }
    },
    update(el, binding, vnode, oldVnode) {
      let props = tool.propsHandle(el, vnode, defaultOptions, binding.value);
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
