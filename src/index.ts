import buildDirective from './directives/tip-directive';

type Theme = 'dark' | 'light';

interface Options {
  directiveName?: string;
  theme?: Theme;
}
const tip = {
  install(Vue, options: Options = {}) {
    const name = options.directiveName || 'tip';
    console.log(options);
    Vue.directive(name, buildDirective(options));
    console.log('注册成功');
  },
};
export default tip;
