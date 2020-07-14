import Vue from 'vue';
// @ts-ignore
import tipComponent from '@/components/tip.vue';
interface Position {
  left: Number;
  top: Number;
}
type Theme = 'dark' | 'light';
type Positions = 'left' | 'right' | 'top' | 'auto' | 'cursor';
type Triggers = 'click' | 'hover';
interface TipInterface {
  theme?: Theme;
  positions?: Positions;
  offset?: Number;
  triggers?: Triggers;
  visible: Boolean;
  $el: Node;
  position: Position;
  content: any;
}
interface options {
  theme: Theme;
  positions: Positions;
  delay: number;
  offset: number;
  trigger: Triggers;
}
export default class Tip {
  private visible = false;
  private delay = 5;
  private triggers: Triggers = 'hover';
  private positions: Positions = 'cursor';
  private tip: TipInterface;
  private offset: number = 5;
  private timer;
  private el: Node;
  static theme: Theme;
  constructor(el:Node,options: options) {
    if (Vue.prototype.$tip) {
      this.tip = Vue.prototype.$tip;
    } else {
      const tipConstruct = Vue.extend(tipComponent);
      //   this.tip = new tipConstruct({ propsData: arguments }).$mount();
      // @ts-ignore
      this.tip = new tipConstruct().$mount();
      document.body.appendChild(this.tip.$el);
    }
    this.bindEvent();
  }
  //   public deafults(
  //     theme: Theme = 'dark',
  //     positions: Positions = 'cursor',
  //     delay: number = 200,
  //     offset: number = 5,
  //     trigger: Triggers
  //   ) {}

  static defaults(theme: Theme) {
    this.theme = theme;
  }
  private bindEvent() {
    if (this.triggers === 'hover') {
      this.bindHoverEvent();
    }
    if (this.triggers === 'click') {
      this.bindClickEvent();
    }
  }
  public destory() {
    if (this.triggers === 'hover') {
      this.unbindHoverEvent();
    }
    if (this.triggers === 'click') {
      this.unbindClickEvent();
    }
  }
  private tooltipShow(value) {
    let that = this
    function debounce(func, wait = that.delay) {
      return function (...args) {
        if (!that.tip.visible) {
          clearTimeout(that.timer);
          that.timer = setTimeout(() => {
            func(...args);
          }, wait);
        }
      };
    }
    return debounce((event) => {
      this.tip.content = value;
      this.tip.visible = false;
      this.tip.position = {
        left: event.pageX,
        top: event.pageY,
      };
    });
  }
  private tooltipHidden() {
    this.tip.visible = false;
    clearTimeout(this.timer);
  }
  private bindHoverEvent() {
    this.el.addEventListener('mousemove', this.tooltipShow);
    this.el.addEventListener('mouseleave', this.tooltipHidden);
  }
  private unbindHoverEvent() {
    this.el.removeEventListener('mousemove', this.tooltipShow);
    this.el.removeEventListener('mouseleave', this.tooltipHidden);
  }

  bindClickEvent() {}
  unbindClickEvent() {}
}

// export { bindEvent, unbindEvent };