(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb9c851c"],{"25f0":function(t,e,n){"use strict";var i=n("5e77").PROPER,s=n("cb2d"),r=n("825a"),o=n("577e"),a=n("d039"),c=n("90d8"),u="toString",h=RegExp.prototype,f=h[u],d=a((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),l=i&&f.name!=u;(d||l)&&s(RegExp.prototype,u,(function(){var t=r(this),e=o(t.source),n=o(c(t));return"/"+e+"/"+n}),{unsafe:!0})},"2ca0":function(t,e,n){"use strict";var i=n("23e7"),s=n("e330"),r=n("06cf").f,o=n("50c4"),a=n("577e"),c=n("5a34"),u=n("1d80"),h=n("ab13"),f=n("c430"),d=s("".startsWith),l=s("".slice),p=Math.min,m=h("startsWith"),v=!f&&!m&&!!function(){var t=r(String.prototype,"startsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!v&&!m},{startsWith:function(t){var e=a(u(this));c(t);var n=o(p(arguments.length>1?arguments[1]:void 0,e.length)),i=a(t);return d?d(e,i,n):l(e,n,n+i.length)===i}})},4988:function(t,e,n){"use strict";n("b393")},"7c23":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Generic",{attrs:{item:t.item},scopedSlots:t._u([{key:"content",fn:function(){return[n("p",{staticClass:"title is-4"},[t._v(t._s(t.item.name))]),n("p",{staticClass:"subtitle is-6"},[t.item.subtitle?[t._v(" "+t._s(t.item.subtitle)+" ")]:[t._v(" "+t._s(t.embyCount)+" ")]],2)]},proxy:!0},{key:"indicator",fn:function(){return[t.status?n("div",{staticClass:"status",class:t.status},[t._v(" "+t._s(t.status)+" ")]):t._e()]},proxy:!0}])})},s=[],r=n("1da1"),o=(n("96cf"),n("99af"),n("c55c")),a=n("fd6b"),c={name:"Emby",mixins:[o["a"]],props:{item:Object},components:{Generic:a["default"]},data:function(){return{status:"",albumCount:0,songCount:0,movieCount:0,seriesCount:0,episodeCount:0}},computed:{embyCount:function(){return"music"===this.item.libraryType?"".concat(this.songCount," songs, ").concat(this.albumCount," albums"):"movies"===this.item.libraryType?"".concat(this.movieCount," movies"):"series"===this.item.libraryType?"".concat(this.episodeCount," eps, ").concat(this.seriesCount," series"):"wrong library type 💀"}},created:function(){this.fetchServerStatus(),this.item.subtitle||"dead"===this.status||this.fetchServerMediaStats()},methods:{fetchServerStatus:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.fetch("/System/info/public").then((function(t){if(!t.Id)throw new Error;e.status="running"})).catch((function(t){console.log(t),e.status="dead"}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchServerMediaStats:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={"X-Emby-Token":this.item.apikey},t.next=3,this.fetch("/items/counts",{headers:e}).catch((function(t){console.log(t)}));case 3:n=t.sent,this.albumCount=n.AlbumCount,this.songCount=n.SongCount,this.movieCount=n.MovieCount,this.seriesCount=n.SeriesCount,this.episodeCount=n.EpisodeCount;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},u=c,h=(n("4988"),n("2877")),f=Object(h["a"])(u,i,s,!1,null,"6a5d3ff0",null);e["default"]=f.exports},"8a79":function(t,e,n){"use strict";var i=n("23e7"),s=n("e330"),r=n("06cf").f,o=n("50c4"),a=n("577e"),c=n("5a34"),u=n("1d80"),h=n("ab13"),f=n("c430"),d=s("".endsWith),l=s("".slice),p=Math.min,m=h("endsWith"),v=!f&&!m&&!!function(){var t=r(String.prototype,"endsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!v&&!m},{endsWith:function(t){var e=a(u(this));c(t);var n=arguments.length>1?arguments[1]:void 0,i=e.length,s=void 0===n?i:p(o(n),i),r=a(t);return d?d(e,r,s):l(e,s-r.length,s)===r}})},"90d8":function(t,e,n){var i=n("c65b"),s=n("1a2d"),r=n("3a9b"),o=n("ad6d"),a=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in a||s(t,"flags")||!r(a,t)?e:i(o,t)}},b393:function(t,e,n){},c55c:function(t,e,n){"use strict";n("8a79"),n("fb6a"),n("d3b7"),n("25f0"),n("2ca0"),n("99af");e["a"]={props:{proxy:Object},created:function(){this.endpoint=this.item.endpoint||this.item.url,this.endpoint.endsWith("/")&&(this.endpoint=this.endpoint.slice(0,-1))},methods:{fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var n,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s={};null!==(n=this.proxy)&&void 0!==n&&n.useCredentials&&(s.credentials="include"),void 0!==this.item.useCredentials&&(s.credentials=!0===this.item.useCredentials?"include":"omit"),s=Object.assign(s,e),t.startsWith("/")&&(t=t.slice(1));var r=this.endpoint;return t&&(r="".concat(this.endpoint,"/").concat(t)),fetch(r,s).then((function(t){if(!t.ok)throw new Error("Not 2xx response");return i?t.json():t}))}))}}}}]);
//# sourceMappingURL=chunk-cb9c851c.8d2905af.js.map