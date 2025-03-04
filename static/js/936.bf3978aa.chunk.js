"use strict";(self.webpackChunkreact_hw_5_movies=self.webpackChunkreact_hw_5_movies||[]).push([[936],{639:function(r,t,e){e.d(t,{Z:function(){return c}});e(791);var n=e(900),a="Loader_loader_container__U7Y0c",u=e(184),c=function(){return(0,u.jsx)("div",{className:a,children:(0,u.jsx)(n.s5,{visible:!0,height:"96",width:"96",color:"grey",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading",wrapperStyle:{},wrapperClass:"",strokeColor:"grey"})})}},66:function(r,t,e){e.d(t,{Z:function(){return f}});var n=e(413),a=e(925),u=(e(791),e(901)),c="Movie_img_container__u2h4w",i="Movie_movie_title__qPYGh",s="Movie_movies_list_item__I9oWd",o=e(184),l=["link"],p=function(r){var t=r.link,e=(0,a.Z)(r,l),n="https://image.tmdb.org/t/p/w500".concat(e.poster_path),p=(0,u.TH)();return(0,o.jsx)("li",{className:s,children:(0,o.jsxs)(u.rU,{state:{from:p},to:"".concat(t).concat(e.id),children:[(0,o.jsx)("div",{className:c,children:(0,o.jsx)("img",{src:n,alt:e.original_title})}),(0,o.jsxs)("h4",{className:i,children:[" ",e.title]})]})})},v="MoviesList_movies_list__EAcLe",f=function(r){var t,e=r.movies,a=r.link;return(0,o.jsx)("div",{children:(0,o.jsx)("ul",{className:v,children:null===(t=e.results)||void 0===t?void 0:t.map((function(r){return(0,o.jsx)(p,(0,n.Z)({link:a},r),r.id)}))})})}},302:function(r,t,e){var n=e(861),a=e(439),u=e(757),c=e.n(u),i=e(791),s=e(329);t.Z=function(r,t){var e=(0,i.useState)(null),u=(0,a.Z)(e,2),o=u[0],l=u[1],p=(0,i.useState)(null),v=(0,a.Z)(p,2),f=v[0],h=v[1],d=(0,i.useState)(!1),m=(0,a.Z)(d,2),Z=m[0],_=m[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,r(t);case 4:n=e.sent,l(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),h(e.t0),s.Am.error(e.t0.message);case 12:return e.prev=12,_(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[r,t]),[o,f,Z]}},936:function(r,t,e){e.r(t),e.d(t,{default:function(){return l}});var n=e(439),a=(e(791),e(635)),u="Home_trending_title__NN5YF",c=e(302),i=e(639),s=e(66),o=e(184),l=function(){var r=(0,c.Z)(a.n2),t=(0,n.Z)(r,1)[0];return t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:u,children:"Trending today"}),(0,o.jsx)(s.Z,{movies:t,link:"/movies/"})]}):(0,o.jsx)(i.Z,{})}},635:function(r,t,e){e.d(t,{LI:function(){return p},Mc:function(){return s},n2:function(){return i},vJ:function(){return l},xc:function(){return o}});var n=e(861),a=e(757),u=e.n(a),c=e(16);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWRhN2ZhMzBjMjg4NTU0NDNmN2YyMDFmNDNlZTRjOCIsIm5iZiI6MTc0MDM2ODg2Ny43MzgsInN1YiI6IjY3YmJlYmUzYmY1MjFmMTkwZjBhODk2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EFwr4LaQKEuESAlDYYsAzQxG9q4WvzFF1ly-0RKrvi4",c.Z.defaults.headers.common.accept="application/json",c.Z.defaults.params={language:"en-US"};var i=function(){var r=(0,n.Z)(u().mark((function r(){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/trending/movie/day");case 3:return t=r.sent,e=t.data,r.abrupt("return",e);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(t));case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(t,"/credits"));case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(t,"/reviews"));case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/search/movie",{params:{query:t}});case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.bf3978aa.chunk.js.map