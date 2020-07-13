declare type Theme = 'dark' | 'light';
declare type Positions = 'left' | 'right' | 'top' | 'auto' | 'cursor';
declare type Triggers = 'click' | 'hover';
interface options {
    theme: Theme;
    positions: Positions;
    delay: number;
    offset: number;
    trigger: Triggers;
}
export default class Tip {
    private visible;
    private delay;
    private triggers;
    private positions;
    private tip;
    private offset;
    private timer;
    private el;
    static theme: Theme;
    constructor(el: Node, options: options);
    static defaults(theme: Theme): void;
    private bindEvent;
    destory(): void;
    private tooltipShow;
    private tooltipHidden;
    private bindHoverEvent;
    private unbindHoverEvent;
    bindClickEvent(): void;
    unbindClickEvent(): void;
}
export {};
