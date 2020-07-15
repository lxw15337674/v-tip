import Tip from './directives/tip-directive';
import buildDirective from './directives/tip-directive';

type Theme = 'dark' | 'light';

interface Options {
  directiveName?: string;
  theme?: Theme;
}
const tip = {
  install(Vue, options: Options = {}) {
    const name = options.directiveName || 'tip';
    Vue.directive(name, buildDirective(options));
  },
};

export default tip;
