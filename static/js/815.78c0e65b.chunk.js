"use strict";(self.webpackChunkreact_hw_5_movies=self.webpackChunkreact_hw_5_movies||[]).push([[815],{214:function(r,t,e){e.d(t,{m:function(){return n}});var n=e.p+"static/media/Unknown_person.e3a2f2c43d65dafa94a6.jpg"},38:function(r,t,e){e.d(t,{Z:function(){return u}});e(791);var n="EmptySearch_emptyList__gBlVl",a=e(184),u=function(){return(0,a.jsx)("p",{className:n,children:"Sorry, no information was found"})}},639:function(r,t,e){e.d(t,{Z:function(){return c}});e(791);var n=e(900),a="Loader_loader_container__U7Y0c",u=e(184),c=function(){return(0,u.jsx)("div",{className:a,children:(0,u.jsx)(n.s5,{visible:!0,height:"96",width:"96",color:"grey",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading",wrapperStyle:{},wrapperClass:"",strokeColor:"grey"})})}},302:function(r,t,e){var n=e(861),a=e(439),u=e(757),c=e.n(u),s=e(791),i=e(329);t.Z=function(r,t){var e=(0,s.useState)(null),u=(0,a.Z)(e,2),o=u[0],p=u[1],f=(0,s.useState)(null),l=(0,a.Z)(f,2),v=l[0],h=l[1],d=(0,s.useState)(!1),m=(0,a.Z)(d,2),Z=m[0],w=m[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,r(t);case 4:n=e.sent,p(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),h(e.t0),i.Am.error(e.t0.message);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[r,t]),[o,v,Z]}},273:function(r,t,e){e.r(t),e.d(t,{default:function(){return m}});var n=e(413),a=e(439),u=(e(791),"ReviewInfo_review_item__L85lh"),c="ReviewInfo_author_name__bUnHs",s=e(214),i=e(184),o=function(r){var t=r.author,e=r.content,n=r.author_details,a=n.avatar_path?"https://image.tmdb.org/t/p/w500".concat(n.avatar_path):s.m;return(0,i.jsxs)("li",{className:u,children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:a,alt:t})}),(0,i.jsxs)("p",{children:[(0,i.jsxs)("span",{className:c,children:[t,": "]}),e]})]})},p=e(901),f=e(635),l="Reviews_reviews_list__CNHKy",v=e(302),h=e(38),d=e(639),m=function(){var r=(0,p.UO)().id,t=(0,v.Z)(f.vJ,r),e=(0,a.Z)(t,1)[0];return e?e.results.length?(0,i.jsx)("ul",{className:l,children:e.results.map((function(r){return(0,i.jsx)(o,(0,n.Z)({},r),r.id)}))}):(0,i.jsx)(h.Z,{}):(0,i.jsx)(d.Z,{})}},635:function(r,t,e){e.d(t,{LI:function(){return f},Mc:function(){return i},n2:function(){return s},vJ:function(){return p},xc:function(){return o}});var n=e(861),a=e(757),u=e.n(a),c=e(16);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWRhN2ZhMzBjMjg4NTU0NDNmN2YyMDFmNDNlZTRjOCIsIm5iZiI6MTc0MDM2ODg2Ny43MzgsInN1YiI6IjY3YmJlYmUzYmY1MjFmMTkwZjBhODk2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EFwr4LaQKEuESAlDYYsAzQxG9q4WvzFF1ly-0RKrvi4",c.Z.defaults.headers.common.accept="application/json",c.Z.defaults.params={language:"en-US"};var s=function(){var r=(0,n.Z)(u().mark((function r(){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/trending/movie/day");case 3:return t=r.sent,e=t.data,r.abrupt("return",e);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(t));case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(t,"/credits"));case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(t,"/reviews"));case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/search/movie",{params:{query:t}});case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=815.78c0e65b.chunk.js.map