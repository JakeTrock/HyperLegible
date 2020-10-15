// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.executeScript(tab.id, {file: "bookmarklet.js"})
// });

const cg = "@font-face {font-family: 'Atkinson';src: url('./Font/EOT/Atkinson-Hyperlegible-Regular-102.eof');src: url('./Font/EOT/Atkinson-Hyperlegible-Regular-102.eof?#iefix')format('embedded-opentype'), url('./Font/WOFF/Atkinson-Hyperlegible-Regular-102.woff') format('woff'), url('./Font/TTF/Atkinson-Hyperlegible-Regular-102.ttf')  format('truetype'), url('./Font/SVG/Atkinson-Hyperlegible-Regular-102.svg#svgFontName') format('svg');}";
const ct = "font-family: 'Atkinson';";
chrome.tabs.onUpdated.addListener(function(){
Array.prototype.slice.call(document.getElementsByTagName("head"))[0].appendChild(document.createElement('style')).innerHTML=cg;
Array.prototype.slice.call(document.getElementsByTagName("*")).forEach(b=>b.style.cssText=ct)
})
