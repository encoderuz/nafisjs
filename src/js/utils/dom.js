const selfMsg = "First you need select node element";
function  selfError(self, msg){
    if (self.element === null){
        console.error(msg)
    }
}
function getText(text, self) {
    selfError(self,selfMsg)
    if (text){
        self.element.innerText = text;
        return self;
    }
     return self.element.innerText
}
function addClass(className, self) {
    selfError(self,selfMsg);
    className.split(' ').forEach((cls) => self.element.classList.add(cls))
}

 function css(styles, self){
     selfError(self,selfMsg)
     for (let key  in styles) {
         self.element.style[key] = styles[key]
     }
     return self;
 }
 function attr(self, attr, value = null){
    selfError(self,selfMsg)
    if (value === null){
        return self.element.getAttribute(attr);
    }else{
        const att = document.createAttribute(attr);
        att.value = value;
        self.element.setAttributeNode(att);
        return self;
    }
 }
 function cmnt(self, comment) {
     selfError(self,selfMsg)
     const cmnt = document.createComment(comment);
     self.element.prepend(cmnt);
     return self;
 }
 function createEl(self, tagName) {
    let tag = document.createElement(tagName);
    if (self.element == null){
        return tag;
    }else{
        self.element.appendChild(tag)
        return self;
    }

 }
export {getText, addClass, css, attr, cmnt, createEl};
