import { getText, addClass} from "./src/js/utils/dom";

function nafis(selector) {
    var self = {
        element: document.querySelector(selector),
        html: () => self.element,
        text: (text) => getText(text, self),
        on: (event, callback) => {
            return self.element.addEventListener(event, callback)
        },
        addClass: (className) => addClass(className, self)
    };
    return self;
}
// Assign the initialization function to the global variable $n
window.$n = nafis;
