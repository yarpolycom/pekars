(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)o=c[l],a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"281ab9b4":"b45cdbe9","17b753c1":"00cab04a","4b47640d":"21cfc388"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"281ab9b4":1,"17b753c1":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"281ab9b4":"31290a2e","17b753c1":"f93cf187","4b47640d":"31d6cfe0"}[e]+".css",o=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=a[i],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){c=l[i],s=c.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var s,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e),s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,l.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/pekars/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"vendor"]),n()})({0:function(e,t,n){e.exports=n("2f39")},"034f":function(e,t,n){"use strict";var r=n("fb1c"),o=n.n(r);o.a},"1e5d":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("ac6a"),n("a114"),n("d14b"),n("1e5d"),n("7e6d");var r=n("2b0e"),o=n("5372"),a=n("e84f"),i=n("7051"),c=n("2040"),u=n("cf12"),s=n("46a9"),l=n("32a1"),d=n("f30c"),f=n("ce67"),p=n("482e"),b=n("52b5"),g=n("1180"),m=n("1e55"),h=n("506f"),v=n("b8d9"),w=n("7d43"),y=n("7ea0"),Q=n("7646"),S=n("6580"),T=n("3a08"),P=n("3054"),_=n("6ddb"),O=n("3d5b"),k=n("0952"),C=n("2a70"),L=n("6186"),j=n("c604"),E=n("66d7"),x=n("7b38"),D=n("5d8b"),A=n("5931"),I=n("0ed2"),M=n("9541"),R=n("91c8"),N=n("525b"),V=n("bc9b"),B=n("1526"),q=n("2bd2"),G=n("133b"),U=n("a9a0");r["a"].use(a["a"],{config:{},i18n:o["a"],components:{QLayout:i["a"],QLayoutHeader:c["a"],QLayoutDrawer:u["a"],QPageContainer:s["a"],QPage:l["a"],QToolbar:d["a"],QToolbarTitle:f["a"],QBtn:p["a"],QIcon:b["a"],QList:g["a"],QListHeader:m["a"],QItem:h["a"],QItemMain:v["a"],QItemSide:w["a"],QAutocomplete:y["a"],QCard:Q["a"],QCardTitle:S["a"],QCardMain:T["a"],QCardSeparator:P["a"],QCardActions:_["a"],QDatetime:O["a"],QModal:k["a"],QModalLayout:C["a"],QSearch:L["a"],QTable:j["a"],QTr:E["a"],QTd:x["a"],QInput:D["a"],QSelect:A["a"],QPopupEdit:I["a"],QItemTile:M["a"],QItemSeparator:R["a"],QCheckbox:N["a"],QToggle:V["a"]},directives:{Ripple:B["a"],CloseOverlay:q["a"]},plugins:{Notify:G["a"],Loading:U["a"]}});var $=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},H=[];$._withStripped=!0;var J={name:"App"},W=J,z=(n("034f"),n("2877")),F=Object(z["a"])(W,$,H,!1,null,null,null);F.options.__file="App.vue";var K=F.exports,X=n("2f62"),Y={},Z=n("a709"),ee=n("8d6f"),te=n("5781"),ne={namespaced:!0,state:Y,getters:Z,mutations:ee,actions:te};function re(){return{icon:"home",title:"Рабочий стол",name:"Start",desc:"Рабочий стол"}}r["a"].use(X["a"]);var oe=function(){var e=new X["a"].Store({modules:{example:ne},state:{currentView:re(),toolbarTitle:"",rightDrawer:!1,Partners:[],Products:[],Stores:[],messageRight:"",logSend:{params:{}},views:[{icon:"home",title:"Рабочий стол",name:"Start",desc:"Рабочий стол"},{title:"Поступления",group:!0},{icon:"playlist_add",title:"Создать",name:"Receipt",desc:"Поступление товаров"},{icon:"view_list",title:"Журнал",name:"ReceiptList",desc:"Журнал поступлений товаров"},{title:"Выпуски",group:!0},{icon:"playlist_add",title:"Создать",name:"Output",desc:"Выпуск продукции"},{icon:"view_list",title:"Журнал",name:"OutputList",desc:"Журнал выпусков"},{icon:"print",title:"Отчёт",name:"OutputReport",desc:"Отчёт по выпускам"},{title:"Перемещения",group:!0},{icon:"playlist_add",title:"Создать",name:"Transfer",desc:"Перемещение"},{icon:"view_list",title:"Журнал",name:"TransferList",desc:"Журнал перемещений"},{title:"Списания",group:!0},{icon:"playlist_add",title:"Создать",name:"WriteOff",desc:"Списание"},{icon:"view_list",title:"Журнал",name:"WriteOffList",desc:"Журнал списаний"},{title:"Продажи",group:!0},{icon:"playlist_add",title:"Создать",name:"Sale",desc:"Продажа"},{icon:"view_list",title:"Журнал",name:"SaleList",desc:"Журнал продаж"},{icon:"print",title:"Отчёт",name:"SaleReport",desc:"Отчёт по продажам"},{title:"Прочее",group:!0},{icon:"print",title:"Передача смены",name:"BalanceReport",desc:"Отчёт по передаче смены"}],hostSoap:"pekars.tk",dirSoap:"/test-ws",show:!1,reload:!1,curGUID:null,settings:{consts:{}}},mutations:{currentView:function(e,t){e.currentView=t,e.rightDrawer=!1,e.show=!1,e.toolbarTitle=""},toolbarTitle:function(e,t){e.toolbarTitle=t},rightDrawer:function(e,t){e.rightDrawer=t},Partners:function(e,t){e.Partners=t},Products:function(e,t){e.Products=t},Stores:function(e,t){e.Stores=t},journal:function(e,t){e.journal=t},resetCurrentView:function(e){e.currentView=re(),e.curGUID=null,e.rightDrawer=!1,e.show=!1,e.toolbarTitle=""},messageRight:function(e,t){e.messageRight=t},logSend:function(e,t){e.logSend=t},show:function(e,t){e.show=t},reload:function(e,t){e.reload=t},curGUID:function(e,t){e.curGUID=t},setConsts:function(e,t){e.settings.consts=t},settings:function(e,t){e.settings=t}},actions:{}});return e},ae=n("8c4f"),ie=[{path:"/",component:function(){return Promise.all([n.e("281ab9b4"),n.e("17b753c1")]).then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e("281ab9b4").then(n.bind(null,"9800"))}}]}];ie.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var ce=ie,ue=n("7bb1");r["a"].use(ae["a"]),r["a"].use(ue["a"]);var se=function(){var e=new ae["a"]({scrollBehavior:function(){return{y:0}},routes:ce,mode:"hash",base:"/pekars/"});return e},le=function(){var e="function"===typeof oe?oe():oe,t="function"===typeof se?se({store:e}):se;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(K)}};return{app:n,store:e,router:t}},de=n("9483");Object(de["a"])("/pekars/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(e){console.log("Service worker has been registered.")},cached:function(e){console.log("Content has been cached for offline use.")},updatefound:function(e){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh."),alert("Доступно обновление. Перезагрузите приложение.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var fe=n("bc3a"),pe=n.n(fe),be=function(e){var t=e.Vue;t.prototype.$axios=pe.a},ge=n("1dce"),me=n.n(ge),he=function(e){e.app,e.router;var t=e.Vue;t.use(me.a)},ve=n("fe3c"),we=n.n(ve),ye=le(),Qe=ye.app,Se=ye.store,Te=ye.router;/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){we.a.attach(document.body)},!1),[be,he].forEach(function(e){e({app:Qe,router:Te,store:Se,Vue:r["a"],ssrContext:null})}),new r["a"](Qe)},5781:function(e,t){},"7e6d":function(e,t,n){},"8d6f":function(e,t){},a709:function(e,t){},fb1c:function(e,t,n){}});