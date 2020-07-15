type Theme = 'dark' | 'light';
type Positions = 'left' | 'right' | 'top' | 'auto' | 'cursor';
type Triggers = 'click' | 'hover';
interface Options {
  class?: string;
  theme?: Theme;
  positions?: Positions;
  delay?: number;
  offset?: number;
  trigger?: Triggers;
  content?: String;
  ref?: Node;
}
function propsHandle(el, vnode, defaultOptions, options: Options): Options;
function propsHandle(el, vnode, defaultOptions, options: String): Options;
function propsHandle(el, vnode, defaultOptions, options): Options {
  let props = { el: el, vnode: vnode, ...defaultOptions}
  if (typeof options === 'string') {
    props.content= options
    return props
  }
  if (typeof options === 'object') {
    if(options.ref){
      // props.ref = rest
    }
    return { el: el, vnode: vnode, ...defaultOptions, ...options };
  }
}

export default propsHandle;
