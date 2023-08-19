import {addClass, css, getText} from "./utils/dom";
import {
    concat,
    lower, padEnd,
    padStart,
    strLength,
    strReplace,
    strReplaceAll,
    strSlice,
    strSubstr,
    trim,
    upper
} from "./utils/strings";
export function nafisjs (selector) {
    return {
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
        padEnd: (targetLength, padString) => padEnd(self, targetLength, padString),


    }
};
