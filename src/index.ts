import Tip from './directives/tip-directive';
import buildDirective from './directives/tip-directive';


interface Options {
  directiveName?: string;
  theme?: string;
}
type Theme = 'dark' | 'light';
const tip = {
  install(Vue, options: Options = {}) {
    const name = options.directiveName || 'tip';
    Vue.directive(name, buildDirective());
  },
};

export default tip;
