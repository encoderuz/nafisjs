import { getText, addClass, css } from "./src/js/utils/dom";

function nafis(selector) {
    var self = {
        element: document.querySelector(selector),
        html: () => self.element,
        text: (text) => getText(text, self),
        on: (event, callback) => {
            return self.element.addEventListener(event, callback)
        },
        css: (styles) => css(styles, self),
        addClass: (className) => addClass(className, self)
    };
    return self;
}
window.$n = nafis;
