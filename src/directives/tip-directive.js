import Vue from 'vue';
import tipComponent from '@/components/tip.vue';

let timer, isFocus = false;
function tooltipShow(value, theme) {
    let props = { content: value, theme: theme }
    if (!Vue.prototype.$tip) {
        let Tip = tip({ ...props });
        document.body.appendChild(Tip.$el);
        Vue.prototype.$tip = Tip;
    }
    function debounce(func, wait = 500) {
        return function (...args) {
            if (!isFocus) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func(...args);
                    isFocus = true;
                }, wait);
            }
        };
    }
    return debounce((event) => {
        let Tip = Vue.prototype.$tip;
        Tip.content = value;
        Tip.visible = true;
        Tip.position = {
            left: event.pageX,
            top: event.pageY,
        };
    })
}
function tip(options = {}) {
    const tipConstruct = Vue.extend(tipComponent);
    let tip;
    if (!tip) {
        tip = new tipConstruct({ propsData: options }).$mount();
    }
    return tip;
}

function tooltipHidden() {
    Vue.prototype.$tip.visible = false;
    isFocus = false;
    clearTimeout(timer);
}

function bindEvent(el, { value, modifiers }, theme) {
    el.addEventListener(
        'mousemove',
        tooltipShow(value, theme)
    );
    el.addEventListener('mouseleave', tooltipHidden)
}

function unbindEvent(el) {
    document.removeEventListener('mousemove', tooltipShow)
    document.removeEventListener('mouseleave', tooltipHidden)
}

export {
    bindEvent,
    unbindEvent
}