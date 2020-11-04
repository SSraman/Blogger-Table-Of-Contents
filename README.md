# Blogger Table Of Contents
JavaScript script for Table Of Contents(TOC) for Blogger (Blogspot).
This script adds Table Of Contents to all your Blogger Blog Posts.
<h2>How to use?</h2>
<strong>You can use this script 2 ways.</strong><br>
1.Getting from CDN<br>
2.Using inline (Recommended)

<h3>1.  Getting from CDN</h3>
Put following code in your Blog's HTML Theme. This will automaticaly add the TOC to all the post.
<code>&lt;script src="https://rawcdn.githack.com/SSraman/Blogger-Table-Of-Contents/fdfe7fad99b5275e3105d0eda78713e5f6d58393/toc.js"&gt;&lt;/script&gt;</code>

<h3>2. Using inline (Recommended)</h3>
Use the following code just before <code>&lt;/data:post.body&gt;</code> of your Blog's HTML Theme.This will automaticaly add the TOC to all the post.<br>
<code>
&lt;b:if cond='data:blog.pageType == "item"'&gt;
&lt;!-- all item pages --&gt;
&lt;script&gt;/*&lt;![CDATA[ */
var el=document.createElement("ol");el.id="m";var z=0,targetElem="h2";function insertAfter(e,t){e.parentNode.insertBefore(t,e.nextSibling)}var postBody=document.getElementById("Blog1"),fPara=postBody.getElementsByTagName("p"),el1=document.createElement("div");el1.innerHTML="&lt;button class='toggle' onclick='listToggle();'&gt;Table Of Contents (Show/Hide)&lt;/button&gt;";try{insertAfter(fPara[z],el1)}catch(e){console.log("CSSMAGZ_TableOfContents: Document Doesn't Contain paragraphs!Trying for div"),insertAfter(postBody.getElementsByTagName("div")[z],el1)}var Elements=postBody.getElementsByTagName(targetElem);for(i=0;i&lt;Elements.length;i++)Elements[i].setAttribute("id","heading"+i),el.innerHTML+="&lt;li class='tgl'&gt;&lt;a class='clink' href='#heading"+i+"'&gt;"+Elements[i].textContent+"&lt;/a&gt;&lt;/li&gt;",insertAfter(el1,el);function listToggle(){var e=document.getElementById("m");"none"===e.style.display?e.style.display="block":e.style.display="none"}"undefined"!=typeof document&amp;&amp;function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"div .toggle{padding:.5em;background:#696969;border:none;color:#fff;font-weight:700;margin:.3em;}div .toggle:hover{border:.1px solid #000}#m{font-family:sans-serif;margin:0;margin-bottom:10px;background:#faebd7;padding:.3em;border:1px solid #faebd7;animation-name:fade;animation-duration:.3s}@keyframes fade{from{opacity:0}to{opacity:1}}.clink{text-decoration:none;color:##2c44ca}.clink:hover{text-decoration:underline;}div ol li,div ul li{padding:15px 0 0;margin:0 0 0 30px}");
/*]]&gt; */
&lt;/script&gt;
&lt;/b:if&gt;
</code><br> 
For more information regarding how to use thi script inline,<a href="https://css-magz.blogspot.com/2020/11/how-to-add-table-of-contents-in-blogger.html"> Refer This Page</a>.

<h3>Troubleshooting</h3>
Make sure you have enabled JavaScript in your browser. This script won't work for <code>&lt;noscript&gt;</code> users.
