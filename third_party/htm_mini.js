// @ts-nocheck
// deno-fmt-ignore-file
// deno-lint-ignore-file
// Authors: https://github.com/developit/htm
// Source: https://unpkg.com/htm@3.1.1/mini/index.mjs
export default function(n){for(var l,e,s=arguments,t=1,r="",u="",a=[0],c=function(n){1===t&&(n||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(n?s[n]:r):3===t&&(n||r)?(a[1]=n?s[n]:r,t=2):2===t&&"..."===r&&n?a[2]=Object.assign(a[2]||{},s[n]):2===t&&r&&!n?(a[2]=a[2]||{})[r]=!0:t>=5&&(5===t?((a[2]=a[2]||{})[e]=n?r?r+s[n]:s[n]:r,t=6):(n||r)&&(a[2][e]+=n?r+s[n]:r)),r=""},h=0;h<n.length;h++){h&&(1===t&&c(),c(h));for(var i=0;i<n[h].length;i++)l=n[h][i],1===t?"<"===l?(c(),a=[a,"",null],t=3):r+=l:4===t?"--"===r&&">"===l?(t=1,r=""):r=l+r[0]:u?l===u?u="":r+=l:'"'===l||"'"===l?u=l:">"===l?(c(),t=1):t&&("="===l?(t=5,e=r,r=""):"/"===l&&(t<5||">"===n[h][i+1])?(c(),3===t&&(a=a[0]),t=a,(a=a[0]).push(this.apply(null,t.slice(1))),t=0):" "===l||"\t"===l||"\n"===l||"\r"===l?(c(),t=2):r+=l),3===t&&"!--"===r&&(t=4,a=a[0])}return c(),a.length>2?a.slice(1):a[1]}
