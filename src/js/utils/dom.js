 function getText(text, self) {
    if (text){
        self.element.innerText = text;
        return self;
    }
     return self.element.innerText
}
function addClass(className, self) { className.split(' ').forEach((cls) => self.element.classList.add(cls)) }

 function css(styles, self){
     for (let key  in styles) {
         self.element.style[key] = styles[key]
     }
     return self;
 }
 function activeTag(){

 }
export {getText, addClass, css, activeTag};
