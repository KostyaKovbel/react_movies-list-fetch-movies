(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),a=(c(15),c(10)),n=c(8),r=c(2),o=c(6),d=c.n(o),l=(c(17),c(1)),j=(c(18),c(19),c(0)),b=function(e){var t=e.movie;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("figure",{className:"image is-4by3",children:Object(j.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("div",{className:"media",children:[Object(j.jsx)("div",{className:"media-left",children:Object(j.jsx)("figure",{className:"image is-48x48",children:Object(j.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(j.jsx)("div",{className:"media-content",children:Object(j.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(j.jsxs)("div",{className:"content",children:[t.Plot,Object(j.jsx)("br",{})]})]})]})},m=function(e){var t=e.movies;return Object(j.jsx)("div",{className:"movies",children:t.map((function(e){return Object(j.jsx)(b,{movie:e},e.imdbID)}))})},u=(c(21),c(9)),v=c.n(u),O=function(e){var t=e.movie,c=e.handleTitle,i=e.handleGetMovies,s=e.addMovie,a=e.addError,n=e.isFound,r=e.isLoading,o=e.noMovieError;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{className:"find-movie",children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:v()("input",{"is-danger":!n}),onChange:c})}),!n&&Object(j.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(j.jsxs)("div",{className:"field is-grouped",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"button",className:"button is-light",onClick:i,children:"Find a movie"})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"button",className:"button is-primary",onClick:s,children:"Add to the list"})})]})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{className:"title",children:"Preview"}),r?Object(j.jsx)("p",{children:"Loading..."}):t&&Object(j.jsx)(b,{movie:t}),a&&"Movie already added",o&&"You need to find Movie first :)"]})]})},h=function(){var e=Object(l.useState)(""),t=Object(r.a)(e,2),c=t[0],i=t[1],s=Object(l.useState)(),o=Object(r.a)(s,2),b=o[0],u=o[1],v=Object(l.useState)([]),h=Object(r.a)(v,2),x=h[0],f=h[1],p=Object(l.useState)(!1),N=Object(r.a)(p,2),g=N[0],w=N[1],y=Object(l.useState)(!0),M=Object(r.a)(y,2),S=M[0],k=M[1],E=Object(l.useState)(!1),F=Object(r.a)(E,2),C=F[0],I=F[1],D=Object(l.useState)(!1),L=Object(r.a)(D,2),P=L[0],T=L[1],G=function(){var e=Object(n.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.next=3,i=c,fetch("".concat("https://www.omdbapi.com/?apikey=4661256c&t=").concat(i)).then((function(e){return e.json()}));case 3:"False"!==(t=e.sent).Response?(k(!0),I(!1),w(!1),u(t)):(k(!1),u(void 0),I(!1)),T(!1);case 6:case"end":return e.stop()}var i}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("div",{className:"page-content",children:Object(j.jsx)(m,{movies:x})}),Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsx)(O,{movie:b,handleTitle:function(e){k(!0),i(e.target.value)},handleGetMovies:G,addMovie:function(){if(x.some((function(e){return e.imdbID===(null===b||void 0===b?void 0:b.imdbID)})))return u(void 0),void w(!0);b?(w(!1),I(!1),f([].concat(Object(a.a)(x),[b]))):I(!0),u(void 0)},addError:g,isFound:S,isLoading:P,noMovieError:C})})]})};s.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.7a7eb0b4.chunk.js.map