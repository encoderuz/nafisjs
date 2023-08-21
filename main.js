import {nafisjs} from "./src/js/main";
import {nafisArray} from "./src/js/nafisarray";
import {nafisdom} from "./src/js/nafisdom";
import { nafisdate } from "./src/js/nafisdate";
import {nafisscreen} from "./src/js/nafisscreen";
import {nafislocation} from "./src/js/nafislocation";
import {nafishistory} from "./src/js/nafishistory";

function nafis(selector) {
    return nafisjs(selector);
}

window.$n = nafis;
window.$arr = nafisArray
window.$dom = nafisdom;
window.$date = nafisdate;
window.$screen = nafisscreen();
window.$location = nafislocation();
window.$history = nafishistory();
