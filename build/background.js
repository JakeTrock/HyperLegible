const pth="chrome-extension://__MSG_@@extension_id__/";
const cg = `@font-face {font-family: 'Atkinson';src: url('${pth}Font/EOT/Atkinson-Hyperlegible-Regular-102.eof');src: url('${pth}Font/EOT/Atkinson-Hyperlegible-Regular-102.eof?#iefix')format('embedded-opentype'), url('${pth}Font/WOFF/Atkinson-Hyperlegible-Regular-102.woff') format('woff'), url('${pth}Font/TTF/Atkinson-Hyperlegible-Regular-102.ttf')  format('truetype'), url('${pth}Font/SVG/Atkinson-Hyperlegible-Regular-102.svg#svgFontName') format('svg');}`;
const ct = "font-family: 'Atkinson';";
const wl = ["p","h1","h2","h3","h4","h5","h6","div","BODY","strong","em","blockquote","code","li","dd","dt","mark","ins","del","sup","sub","small","i","b","a"];
chrome.tabs.onUpdated.addListener(function(){
console.log(pth);
Array.prototype.slice.call(document.getElementsByTagName("head"))[0].appendChild(document.createElement('style')).innerHTML=cg;
Array.prototype.slice.call(document.getElementsByTagName("*")).filter(n => wl.includes(n.nodeName)).forEach(b=>b.style.cssText=ct)
})
