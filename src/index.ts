import  Tip  from './directives/tip-directive';

function buildDirective() {
  return {
    bind(el, binding, vnode, oldVnode) {
      debugger
      el.tip = new Tip(el, binding);
    },
    inserted(el, binding, vnode, oldVnode) {
    },
    unbind(el, binding, vnode, oldVnode) {
      el.tip.desotry();
    },
  };
}
interface Options {
  directiveName?: string;
  theme?: string;
}
type Theme = 'dark' | 'light';
const tip = {
  install(Vue, options: Options = {}) {
    const name = options.directiveName || 'tip';
    Tip.defaults(options.theme as Theme || 'dark');
    Vue.directive(name, buildDirective());
  },
};

export default tip;
