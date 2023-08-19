import { getText, addClass, css } from "./src/js/utils/dom";
import {strLength, strSlice, strSubstr, strReplace} from "./src/js/utils/strings";

function nafis(selector) {
    var self = {
        element: document.querySelector(selector),
        all: () => {
            return  document.querySelectorAll(selector)
        },
        html: () => self.element,
        text: (text) => getText(text, self),
        on: (event, callback) => {
            self.element.addEventListener(event, callback)
            return self;
        },
        css: (styles) => css(styles, self),
        addClass: (className) => addClass(className, self),


        // string methods
        strCount: () => strLength(self),
        strSlice: (from, to) => strSlice(from, to, self),
        strSubstr: (from, to) => strSubstr(from, to, self),
        strReplace: (find, replace) => strReplace(find, replace, self),
    };
    return self;
}
window.$n = nafis;
