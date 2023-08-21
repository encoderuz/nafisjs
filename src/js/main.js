import {addClass, css, getText, attr, cmnt, createEl} from "./utils/dom";
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
    const self =  {
        // Dom methods
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
        activeTag: () => document.activeElement.tagName,
        url: document.URL,
        uri: document.baseURI,
        charsetSet: document.characterSet,
        open: () => document.open(),
        write: (write) => document.write(write),
        close: () => document.close(),
        cookie: (cookie) => {
            if (cookie){
                return document.cookie = cookie;
            }else{
                return document.cookie
            }
        },
        createEl: (tagName) => createEl(self, tagName),
        attr: (attribute, value = null) => attr(self, attribute, value),
        cmnt: (comment) => cmnt(self, comment),
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
    return self;
};
