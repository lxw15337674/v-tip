export default tip;
declare namespace tip {
    export function install(Vue: any, options?: {}): void;
    export function install(Vue: any, options?: {}): void;
    export namespace directive {
        export function bind(el: any, binding: any, vnode: any, oldVnode: any): void;
        export function bind(el: any, binding: any, vnode: any, oldVnode: any): void;
        export { unbindEvent as unbind };
    }
}
import { unbindEvent } from "./directives/tip-directive.js";
