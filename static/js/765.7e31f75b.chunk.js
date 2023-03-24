"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[765],{3682:function(n,t,e){e.d(t,{V:function(){return u}});var r,a=e(168),c=e(6444).ZP.h2(r||(r=(0,a.Z)(["\ntext-align: center;\nmargin: 0 auto;\ncolor: ",";\n"])),(function(n){return n.theme.colors.errorColor})),o=e(184),u=function(n){var t=n.message;return(0,o.jsxs)(c,{children:[" ",t]})}},1765:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r,a,c,o=e(5861),u=e(9439),i=e(7757),s=e.n(i),f=e(2791),p=e(1087),l=e(5984),d=e(4390),h=e(1552),m=e(7689),v=e(1598),x=e(5652),g=e(184),b=function(n){var t=n.movies,e=(0,m.TH)();return(0,g.jsx)(v.eW,{children:t.map((function(n){var t=n.id,r=n.poster_path,a=n.title;return(0,g.jsx)(v.H2,{children:(0,g.jsxs)(v.n9,{to:"".concat(t),state:{from:e},children:[(0,g.jsx)(v.uf,{children:(0,g.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/"+r:x,alt:a,loading:"lazy"})}),(0,g.jsx)(v.rS,{children:a})]})},t)}))})},Z=e(1686),y=e(168),w=e(6444),j=w.ZP.form(r||(r=(0,y.Z)(["\ndisplay: flex;\njustify-content: center;\nmargin-bottom: ",";\ngap: ",";\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(2)})),k=w.ZP.input(a||(a=(0,y.Z)(["\npadding: 8px 16px;\nborder: ",";\nborder-radius: ",";\ntransition-property: border;\ntransition: ",";\n\n:focus {\noutline: none;\nborder: ",";\n}\n"])),(function(n){var t=n.theme;return"1px solid ".concat(t.colors.borderInputColor)}),(function(n){return n.theme.spacing(2)}),(function(n){var t=n.theme;return"border ".concat(t.transition)}),(function(n){var t=n.theme;return"1px solid ".concat(t.colors.accent)})),S=(0,w.ZP)(v.zx)(c||(c=(0,y.Z)(["\nmax-width: 152px;\npadding: 8px 32px;\nfont-weight: 500;\n"]))),_=function(n){var t=n.onSubmit,e=(0,f.useState)(""),r=(0,u.Z)(e,2),a=r[0],c=r[1],o=function(){c("")};return(0,g.jsxs)(j,{onSubmit:function(n){if(n.preventDefault(),""===a.trim())return Z.Notify.info("Please, fill in the search field!");t(a),o()},children:[(0,g.jsx)(k,{type:"text",name:"movieTitle",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:a,onChange:function(n){var t=n.target.value;c(t.toLowerCase())}}),(0,g.jsx)(S,{type:"submit",children:"Search"})]})},C=e(3682),P=e(7013),T=function(){var n,t=(0,f.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1],c=(0,f.useState)(!1),i=(0,u.Z)(c,2),m=i[0],v=i[1],x=(0,f.useState)(null),Z=(0,u.Z)(x,2),y=Z[0],w=Z[1],j=(0,f.useState)(null),k=(0,u.Z)(j,2),S=k[0],T=k[1],V=(0,p.lr)(),z=(0,u.Z)(V,2),D=z[0],H=z[1],L=null!==(n=D.get("movieTitle"))&&void 0!==n?n:"";(0,f.useEffect)((function(){function n(){return(n=(0,o.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,v(!0),w(null),n.next=5,(0,d.V0)(L);case 5:t=n.sent,a(t.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),w(n.t0.message);case 12:return n.prev=12,v(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}L&&function(){n.apply(this,arguments)}()}),[L,S]);return(0,g.jsx)(h.$,{children:(0,g.jsxs)(h.W,{children:[(0,g.jsx)(_,{onSubmit:function(n){H({movieTitle:n}),T((0,l.x0)()),a([]),w(null)}}),y&&(0,g.jsx)(C.V,{message:"Sorry, but the ".concat(L," was not found. Please try again later!")}),m&&(0,g.jsx)(P.a,{}),(0,g.jsx)(b,{movies:r})]})})}},4390:function(n,t,e){e.d(t,{Df:function(){return i},M1:function(){return p},TP:function(){return f},V0:function(){return s},tx:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),o=e(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="3b3588da04245c6a18fc17ccb8868599",i=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:1,n.next=3,o.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(t,"&page=").concat(e));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,r=e.data,console.log(r),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},5652:function(n,t,e){n.exports=e.p+"static/media/no-image.08ba4a3915c0ff049252.jpg"}}]);
//# sourceMappingURL=765.7e31f75b.chunk.js.map