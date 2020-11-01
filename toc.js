var z = 0; //insert Table of Contents after how many paragraphs (arrey index value)
var targetElem = "h2"; //Deafult element to target
var el = document.createElement("ol");
el.id = "m";
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
//window.onload is required if your're calling this file from CDN, if inline use toc.inline.js
window.onload = function () {
    console.log("loaded");
    var postBody = document.getElementById("Blog1"); //deafult Blogger Widget id
    var fPara = postBody.getElementsByTagName("p");
    var el1 = document.createElement("div");
    el1.innerHTML = "<button class='toggle' onclick='listToggle();'>Table Of Contents (Show/Hide)</button>";
    try {
        insertAfter(fPara[z], el1);
    } catch (e) {
        console.log("CSSMAGZ_TableOfContents: Document Doesn't Contain paragraphs!Trying for div");
        insertAfter(postBody.getElementsByTagName("div")[z], el1);
    }
    var Elements = postBody.getElementsByTagName(targetElem);
    for (i = 0; i < Elements.length; i++) {
        Elements[i].setAttribute("id", "heading" + i);
        el.innerHTML += "<li class='tgl'><a class='clink' href='#heading" + i + "'>" + Elements[i].textContent + "</a></li>";
    }
    insertAfter(el1, el);
};
"undefined" != typeof document &&
    (function (e, t) {
        var n = e.createElement("style");
        if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)) n.styleSheet.disabled || (n.styleSheet.cssText = t);
        else
            try {
                n.innerHTML = t;
            } catch (e) {
                n.innerText = t;
            }
    })(
        document,
        "div .toggle{padding:.5em;background:#696969;border:none;color:#fff;font-weight:700;margin:.3em;}div .toggle:hover{border:.1px solid #000}#m{font-family:sans-serif;margin:0;margin-bottom:10px;background:#faebd7;padding:.3em;border:1px solid #faebd7;animation-name:fade;animation-duration:.3s}@keyframes fade{from{opacity:0}to{opacity:1}}.clink{text-decoration:none;color:##2c44ca}.clink:hover{text-decoration:underline;}div ol li,div ul li{padding:15px 0 0;margin:0 0 0 30px}"
    );
function listToggle() {
    var tgl = document.getElementById("m");
    if (tgl.style.display === "none") {
        tgl.style.display = "block";
    } else {
        tgl.style.display = "none";
    }
}
