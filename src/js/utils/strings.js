function strLength(self) {
    return self.element.innerText.length;
}
function strSlice(from, to, self) {
    return self.element.innerText.slice(from, to)
}
function strSubstr(from, to, self) {
    return self.element.innerText.substring(from, to)
}
function strReplace(find, replace, self) {
    let replaced = self.element.innerText.replace(find, replace)
    self.element.innerText = replaced
    return self;
}
export {strLength, strSlice, strSubstr, strReplace}
