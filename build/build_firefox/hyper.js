const cg = `@font-face {font-family: 'Atkinson';src: url('${browser.runtime.getURL("Font/EOT/Atkinson-Hyperlegible-Regular-102.eof")}');src: url('${browser.runtime.getURL("Font/EOT/Atkinson-Hyperlegible-Regular-102.eof")}?#iefix')format('embedded-opentype'), url('${browser.runtime.getURL("Font/WOFF/Atkinson-Hyperlegible-Regular-102.woff")}') format('woff'), url('${browser.runtime.getURL("Font/TTF/Atkinson-Hyperlegible-Regular-102.ttf")}')  format('truetype'), url('${browser.runtime.getURL("Font/SVG/Atkinson-Hyperlegible-Regular-102.svg")}#Atkinson') format('svg');}`;
const ct = 'Atkinson';
const wl = ["P", "H1", "H2", "H3", "H4", "H5", "H6", "DIV", "BODY", "STRONG", "EM", "BLOCKQUOTE", "PRE", "CODE", "SPAN", "LI", "DD", "DT", "MARK", "INS", "DEL", "SUP", "SUB", "SMALL", "I", "B", "A", "TEXTAREA", "BUTTON"];
const changeStyle = function (x) {
    console.log(x);
    x.filter(n => wl.includes(n.nodeName)).forEach(b => b.style.fontFamily = ct)
}
const changeElems = function (mutationList, observer) {
    mutationList
        .filter(n => mutationList.length != 0 && n.type == 'childList')
        .forEach(b => changeStyle(Array.prototype.slice.call(b.addedNodes)));
}
const observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
}
const observer = new MutationObserver(changeElems);
window.onload = function () {
    const targetNode = document.querySelector("body");
    observer.observe(targetNode, observerOptions);
    Array.prototype.slice.call(document.getElementsByTagName("head"))[0].appendChild(document.createElement('style')).innerHTML = cg;
    changeStyle(Array.prototype.slice.call(targetNode.getElementsByTagName("*")));
}