function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const e=document.querySelector("body"),r=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");e.addEventListener("click",(function(d){d.target===r?(e.style.backgroundColor=t(),r.setAttribute("disabled",""),o.removeAttribute("disabled"),a=setInterval((()=>{e.style.backgroundColor=t()}),1e3)):d.target===o&&(clearInterval(a),r.removeAttribute("disabled"),o.setAttribute("disabled",""))}));let a=null;
//# sourceMappingURL=01-color-switcher.e0f9faa0.js.map
