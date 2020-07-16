import Tooltip from './tooltip';

export default function buildDirective(defaultOptions) {
  return {
    bind(el, binding, vnode) {
      if (defaultOptions) {
        Tooltip.defaults(defaultOptions);
      }
    },
    inserted(el, binding, vnode, oldVnode) {
      el.tip = new Tooltip(el, vnode, binding.value);
      el.tip.startWatch();
    },
    update(el, binding, vnode, oldVnode) {
      el.tip.updateProps(binding.value)
    },
    unbind(el, binding, vnode, oldVnode) {
      el.tip.destroy();
    },
  };
}
