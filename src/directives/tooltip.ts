import Vue from 'vue';
// @ts-ignore
import tipComponent from '@/components/tip.vue';
import tool from 'src/utils';
import { inspect } from 'util';

type Theme = 'dark' | 'light';
type Positions = 'left' | 'right' | 'top' | 'auto' | 'cursor';
type Triggers = 'click' | 'hover';

interface defaultOptions {
  theme?: Theme;
  class?: String;
  positions?: Positions;
  delay?: number;
  offset?: number;
  trigger?: Triggers;
}
interface Props extends defaultOptions {
  el: Node;
  context?: string;
  ref?: string;
}
export default class Tooltip {
  static defaultOptions: defaultOptions;
  public props: Props;

  constructor(el, vnode, options: Props) {
    if(options.ref){
      this.refHandle()
    }
    this.props = { el: el, ...Tooltip.defaultOptions, ...options };
    // const tipConstruct = Vue.extend(tipComponent);
    // return new tipConstruct({ propsData: options });
  }

  public refHandle() {

  }
  static defaults(options: defaultOptions) {
    this.defaultOptions = options;
  }
}
