"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[488],{3682:function(n,e,t){t.d(e,{V:function(){return s}});var r,a=t(168),c=t(6444).ZP.h2(r||(r=(0,a.Z)(["\ntext-align: center;\nmargin: 0 auto;\ncolor: ",";\n"])),(function(n){return n.theme.colors.errorColor})),u=t(184),s=function(n){var e=n.message;return(0,u.jsxs)(c,{children:[" ",e]})}},9488:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,c=t(5861),u=t(9439),s=t(7757),i=t.n(s),o=t(2791),f=t(7689),p=t(4390),l=t(168),h=t(6444),v=h.ZP.ul(r||(r=(0,l.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: ",";\n"])),(function(n){return n.theme.spacing(4)})),d=h.ZP.li(a||(a=(0,l.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: ",";\n"])),(function(n){return n.theme.spacing(1)})),x=t(184),m=function(n){var e=n.reviews;return(0,x.jsx)(v,{children:e.length>0?e.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,x.jsxs)(d,{children:[(0,x.jsxs)("p",{children:[(0,x.jsx)("b",{children:"Author:"})," ",t]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("b",{children:"Content:"})," ",r]})]},e)})):(0,x.jsx)("p",{children:(0,x.jsx)("b",{children:"Sorry, but at the moment there are no reviews for this movie. :("})})})},g=t(7013),w=t(3682),Z=function(){var n=(0,o.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,o.useState)(!1),s=(0,u.Z)(a,2),l=s[0],h=s[1],v=(0,o.useState)(null),d=(0,u.Z)(v,2),Z=d[0],y=d[1],k=(0,f.UO)().id;return(0,o.useEffect)((function(){function n(){return(n=(0,c.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),y(null),n.next=5,(0,p.tx)(k);case 5:e=n.sent,r(e.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),y(n.t0.message);case 12:return n.prev=12,h(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[k]),(0,x.jsxs)(x.Fragment,{children:[Z&&(0,x.jsx)(w.V,{message:"Sorry, but the ".concat(k," was not found. Please try again later!")}),l&&(0,x.jsx)(g.a,{}),(0,x.jsx)(m,{reviews:t})]})}},4390:function(n,e,t){t.d(e,{Df:function(){return i},M1:function(){return p},TP:function(){return f},V0:function(){return o},tx:function(){return l}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="3b3588da04245c6a18fc17ccb8868599",i=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,n.next=3,u.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(e,"&page=").concat(t));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=488.f7c178c5.chunk.js.map