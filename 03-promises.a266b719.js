var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");const r={form:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]')};r.form.addEventListener("submit",(function(e){if(e.preventDefault(),r.inputDelay.value<0||r.inputStep.value<0||r.inputAmount.value<=0)return i.Notify.warning("Please, enter correctly values: DELAY>=0; STEP>=0; AMOUNT>0"),void r.form.reset();let t=Number(r.inputDelay.value);for(let e=1;e<=Number(r.inputAmount.value);e+=1){const n=t;setTimeout((()=>{var t,o;(t=e,o=n,new Promise(((e,n)=>{const i=Math.random()>.3;i?e({position:t,delay:o}):n({position:t,delay:o})}))).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}),t),t+=Number(r.inputStep.value)}}));
//# sourceMappingURL=03-promises.a266b719.js.map