import { getText, addClass, css } from "./src/js/utils/dom";
import {strLength, strSlice, strSubstr, strReplace, strReplaceAll, upper, lower, concat, trim, padStart, padEnd} from "./src/js/utils/strings";

function nafis(selector) {
    var self = {
        element: document.querySelector(selector),
        all: (callback) =>{
            if (callback){
                let query = document.querySelectorAll(selector);
                query.forEach(callback);
            }else{
                return document.querySelectorAll(selector)
            }
        },
        html: () => self.element,
        text: (text) => getText(text, self),
        on: (event, callback) => {
            self.element.addEventListener(event, callback)
            return self;
        },
        css: (styles) => css(styles, self),
        addClass: (className) => addClass(className, self),

        // loop methods
        // string methods
        strCount: () => strLength(self),
        strSlice: (from, to) => strSlice(from, to, self),
        strSubstr: (from, to) => strSubstr(from, to, self),
        strReplace: (find, replace) => strReplace(find, replace, self),
        strReplaceAll: (find, replace) => strReplaceAll(find, replace, self),
        upper: (text) => upper(self),
        lower: (text) => lower(self),
        concat: (string, target) => concat(self, string, target),
        trim: () => trim(self),
        padStart: (targetLength, padString) => padStart(self, targetLength, padString),
        padEnd: (targetLength, padString) => padEnd(self, targetLength, padString)
    };
    return self;
}
window.$n = nafis;
