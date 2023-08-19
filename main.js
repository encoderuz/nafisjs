import {nafisjs} from "./src/js/main";
import NafisArray from "./src/js/nafisarray";

function nafis(selector) {
    return nafisjs(selector);
}

window.$n = nafis;
window.$arr = new NafisArray;
