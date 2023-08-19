function nafis(selector) {
    var self = {
        element: document.querySelector(selector),
        html: () => self.element,
    };
    return self;
}
// Assign the initialization function to the global variable $n
window.$n = nafis;
