(self.webpackChunk=self.webpackChunk||[]).push([[120],{3120:(t,e,n)=>{"use strict";function c(t){let e=null,n=null;document.addEventListener("touchstart",(t=>{const{clientX:c,clientY:l}=t.touches[0];e=c,n=l}),!1),document.addEventListener("touchmove",(c=>{if(!e||!n)return;const l=c.touches[0];let u=e-l.clientX,s=n-l.clientY;Math.abs(u)>Math.abs(s)&&t(u>0?"+":"-"),e=null,n=null}),!1)}n.r(e),n.d(e,{swipeEvent:()=>c})}}]);