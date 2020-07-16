declare type Theme = 'dark' | 'light';
declare type Positions = 'left' | 'right' | 'top' | 'bottom' | 'cursor';
declare type Triggers = 'click' | 'hover';
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
    props: Props;
    vnode: any;
    tip: any;
    ref: string;
    constructor(el: any, vnode: any, options: any);
    updateProps(options: any): void;
    startWatch(): void;
    refHandle(): void;
    destroy(): void;
    propsHandle(options: defaultOptions): Options;
    propsHandle(options: String): Options;
    static defaults(options: defaultOptions): void;
}
export {};
