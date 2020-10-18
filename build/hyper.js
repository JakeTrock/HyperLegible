window.onload = function(){
const cg = `@font-face {font-family: 'Atkinson';src: url('chrome-extension://__MSG_@@extension_id__/Font/EOT/Atkinson-Hyperlegible-Regular-102.eof');src: url('chrome-extension://__MSG_@@extension_id__/Font/EOT/Atkinson-Hyperlegible-Regular-102.eof?#iefix')format('embedded-opentype'), url('chrome-extension://__MSG_@@extension_id__/Font/WOFF/Atkinson-Hyperlegible-Regular-102.woff') format('woff'), url('chrome-extension://__MSG_@@extension_id__/Font/TTF/Atkinson-Hyperlegible-Regular-102.ttf')  format('truetype'), url('chrome-extension://__MSG_@@extension_id__/Font/SVG/Atkinson-Hyperlegible-Regular-102.svg#svgFontName') format('svg');}`;
const ct = 'Atkinson';
const wl = ["P","H1","H2","H3","H4","H5","H6","DIV","BODY","STRONG","EM","BLOCKQUOTE","PRE","CODE","SPAN","LI","DD","DT","MARK","INS","DEL","SUP","SUB","SMALL","I","B","A","TEXTAREA","BUTTON"];
Array.prototype.slice.call(document.getElementsByTagName("head"))[0].appendChild(document.createElement('style')).innerHTML=cg;
Array.prototype.slice.call(document.getElementsByTagName("*")).filter(n => wl.includes(n.nodeName)).forEach(b=>b.style.fontFamily=ct);
}
