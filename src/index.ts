import { Tip } from './directives/tip-directive';

function buildDirective(theme: string) {
  return {
    bind(el, binding, vnode, oldVnode) {
      el.tip = new Tip(el, binding);
    },
    inserted(el, binding, vnode, oldVnode) {},
    unbind(el, binding, vnode, oldVnode) {
      el.tip.desotry();
    },
  };
}
interface Options {
  directiveName?: string;
  theme?: string;
}
const tip = {
  install(Vue, options: Options = {}) {
    const name = options.directiveName || 'tip';
    Tip.defaults(options.theme || 'dark');
    Vue.directive(name, buildDirective);
  },
  directive: buildDirective,
};

export default tip;
