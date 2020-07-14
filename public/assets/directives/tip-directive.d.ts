export default function buildDirective(): {
    bind(el: any, binding: any, vnode: any, oldVnode: any): void;
    inserted(el: any, binding: any, vnode: any, oldVnode: any): void;
    update(el: any, binding: any, vnode: any, oldVnode: any): void;
    unbind(el: any, binding: any, vnode: any, oldVnode: any): void;
};
