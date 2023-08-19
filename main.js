import {nafisjs} from "./src/js/main";
import {nafisArray} from "./src/js/nafisarray";

function nafis(selector) {
    return nafisjs(selector);
}

window.$n = nafis;
window.$arr = nafisArray
