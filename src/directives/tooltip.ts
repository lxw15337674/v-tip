import Vue from 'vue';
// @ts-ignore
import tipComponent from '@/components/tip.vue';

type Theme = 'dark' | 'light';
type Positions = 'left' | 'right' | 'top' | 'bottom' | 'cursor';
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
  content: string;
}

interface Options extends defaultOptions {
  content: string;
}

export default class Tooltip {
  static defaultOptions: defaultOptions;
  public props: Props;
  public vnode;
  public tip;
  public ref: string;
  constructor(el, vnode, options) {
    this.vnode = vnode;
    this.props = {
      el: el,
      ...Tooltip.defaultOptions,
      ...this.propsHandle(options),
    };
    const tipConstruct = Vue.extend(tipComponent);
    this.tip = new tipConstruct({ propsData: this.props }).$mount();
    this.refHandle();
  }
  public updateProps(options) {
    Object.assign(this.tip, this.propsHandle(options));
  }
  public startWatch() {
    let that = this;
    let unwatch = this.tip.$watch('visible', function () {
      appendChild();
    });
    function appendChild() {
      document.body.appendChild(that.tip.$el);
      unwatch();
    }
  }
  public refHandle() {
    if (this.ref) {
      if (this.vnode.context.$refs[this.ref]) {
        // this.vnode.context.$refs[this.ref].style.display = 'inline';
        this.tip.$el.appendChild(this.vnode.context.$refs[this.ref]);
      } else {
        console.error(`[Tooltip] no REF element [${this.ref}]`);
      }
    }
  }
  destroy() {
    if (document.body.contains(this.tip.$el)) {
      document.body.removeChild(this.tip.$el);
    }
  }
  propsHandle(options: defaultOptions): Options;
  propsHandle(options: String): Options;
  propsHandle(options): Options {
    if (typeof options === 'string') {
      return { content: options };
    }
    if (typeof options === 'object') {
      if (options.ref && !options.context) {
        this.ref = options.ref;
        delete options.ref;
      }
      return { ...options };
    }
  }

  static defaults(options: defaultOptions) {
    this.defaultOptions = options;
  }
}
