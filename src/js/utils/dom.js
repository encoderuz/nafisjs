 function getText(text, self) {
    if (text){
        return self.element.innerText = text;
    }else{
        return self.element.innerText
    }
}
function addClass(className, self) { className.split(' ').forEach((cls) => self.element.classList.add(cls)) }
export {getText, addClass};
