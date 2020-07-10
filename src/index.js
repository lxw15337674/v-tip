import { bindEvent, unbindEvent } from './directives/tip'


function buildDirective(theme) {
    return {
        inserted(el, binding, vnode, oldVnode) {
            bindEvent(el, binding, theme)
        },
        unbind: unbindEvent
    };
}

const tip = {
    install(Vue, options = {}) {
        const name = options.directiveName || 'tip';
        const theme = options.theme || 'dark';
        Vue.directive(name, buildDirective(theme))
    },

    directive: buildDirective()
}

export default tip