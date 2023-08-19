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
function strReplaceAll(find, replace, self) {
    let replaced = self.element.innerText.replaceAll(find, replace)
    self.element.innerText = replaced
    return self;
}
function upper(self) {
    self.element.innerText = self.element.innerText.toUpperCase();
    return self;
}
function lower(self) {
    self.element.innerText = self.element.innerText.toLowerCase();
    return self;
}
function concat(self, string, target){
    self.element.innerText = self.element.innerText.concat(string,target)
    return self;
}
function trim(self){
    self.element.innerText.trim();
    return self;
}
function padStart(self,targetLength, padString){
    const fullNumber = self.element.innerText.toString();
    const slicenum = fullNumber.slice(targetLength);
    self.element.innerText = slicenum.padStart(fullNumber.length, padString);
    return self;
}
function padEnd(self,targetLength, padString){
    const fullNumber = self.element.innerText.toString();
    const slicenum = fullNumber.slice(targetLength);
    self.element.innerText = slicenum.padEnd(fullNumber.length, padString);
    return self;
}
export {strLength, strSlice, strSubstr, strReplace, strReplaceAll, upper, lower, concat, trim, padStart, padEnd}
