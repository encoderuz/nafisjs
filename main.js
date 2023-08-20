import {nafisjs} from "./src/js/main";
import {nafisArray} from "./src/js/nafisarray";
import {nafisdom} from "./src/js/nafisdom";

function nafis(selector) {
    return nafisjs(selector);
}

window.$n = nafis;
window.$arr = nafisArray
window.$dom = nafisdom;
