(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{225:function(t,e,r){var content=r(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("7388ab72",content,!0,{sourceMap:!1})},245:function(t,e,r){"use strict";var n={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Empty Page",to:"/emptypage"},{icon:"mdi-apps",title:"Rendering",to:"/emptypage"},{icon:"mdi-apps",title:"discordbotthing",to:"/discord_msg_repeater"}],miniVariant:!1,title:"Stuff I did"}}},o=r(91),l=r(120),c=r.n(l),d=r(355),v=r(361),f=r(356),m=r(362),_=r(357),V=r(177),h=r(178),x=r(116),w=r(179),k=r(89),y=r(358),N=r(360),I=r(359),A=r(242),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-main",[r("v-container",[r("Nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:v.a,VAppBarNavIcon:f.a,VContainer:m.a,VFooter:_.a,VIcon:V.a,VList:h.a,VListItem:x.a,VListItemAction:w.a,VListItemContent:k.a,VListItemTitle:k.b,VMain:y.a,VNavigationDrawer:N.a,VSpacer:I.a,VToolbarTitle:A.a})},253:function(t,e,r){r(254),t.exports=r(255)},285:function(t,e,r){"use strict";r(225)},286:function(t,e,r){var n=r(19)(!1);n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},79:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(285),r(91)),l=r(120),c=r.n(l),d=r(355),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[253,11,2,12]]]);