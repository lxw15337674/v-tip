import buildDirective from './directives/tip-directive';

const tip = {
  install(Vue, options={}) {
    const name = options.directiveName || 'tip';
    Vue.directive(name, buildDirective(options));
  },
};
export default tip;
