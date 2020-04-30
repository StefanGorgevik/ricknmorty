(this.webpackJsonpricknmorty=this.webpackJsonpricknmorty||[]).push([[0],[,,,,function(e,a,t){},,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(5),o=t.n(r),l=(t(11),t(4),t(12),t(13),t(2)),s=t(1),i=function(e,a){switch(a.type){case"GET_CHARACTERS":return Object(s.a)({},e,{characters:a.payload});case"GET_INFO":return Object(s.a)({},e,{info:a.payload});case"SET_IS_LOADING":return Object(s.a)({},e,{isLoading:a.payload});case"SET_CHOSEN_CHARACTER":var t=[];return""!==a.payload?(t=e.characters.filter((function(e){return e.id!==a.payload.id}))).unshift(a.payload):t=e.characters,Object(s.a)({},e,{chosenCharacter:a.payload,characters:t});case"SET_PAGE":return Object(s.a)({},e,{page:a.payload});case"SET_SEARCH":return Object(s.a)({},e,{search:a.payload});default:return e}},u=Object(c.createContext)(),m=function(e,a){switch(a.type){case"SET_THEME":return Object(s.a)({},e,{isDarkTheme:!e.isDarkTheme});default:return e}},d=function(e){var a=e.children,t=Object(c.useReducer)(m,{isDarkTheme:!1,dark:{mainBack:"rgba(20, 20, 19, 0.822)",color:"rgba(177, 174, 174, 0.767)",headerBack:"rgb(14, 13, 13)",border:"1px solid white",characterBack:"rgba(87, 79, 80, 0.342)"},light:{mainBack:"rgba(237, 241, 245)",color:"whitesmoke",headerBack:"rgb(1, 20, 51)",border:"1px solid brown",characterBack:"rgba(8, 42, 97)"}}),r=Object(l.a)(t,2),o=r[0],s=r[1];return n.a.createElement(u.Provider,{value:{theme:o,dispatch:s}},a)},h={characters:[],info:[],page:1,isLoading:!1,search:"",chosenCharacter:""},p=Object(c.createContext)(h),E=function(e){var a=e.children,t=Object(c.useReducer)(i,h),r=Object(l.a)(t,2),o=r[0],s=r[1],m=Object(c.useContext)(u).theme,d=m.isDarkTheme?m.dark:m.light;Object(c.useEffect)((function(){s({type:"SET_IS_LOADING",payload:!0}),fetch("https://rickandmortyapi.com/api/character/?page=".concat(o.page)).then((function(e){if(!e.ok)throw new Error("Failed to fetch.");return e.json()})).then((function(e){s({type:"SET_IS_LOADING",payload:!1}),s({type:"GET_CHARACTERS",payload:e.results}),s({type:"GET_INFO",payload:e.info})})).catch((function(e){console.log(e),s({type:"SET_IS_LOADING",payload:!1})}))}),[o.page]),Object(c.useEffect)((function(){console.log("second use effect"),s({type:"SET_IS_LOADING",payload:!0}),fetch("https://rickandmortyapi.com/api/character/?name=".concat(o.search)).then((function(e){if(!e.ok)throw new Error("Failed to fetch.");return e.json()})).then((function(e){s({type:"SET_IS_LOADING",payload:!1}),s({type:"GET_CHARACTERS",payload:e.results})})).catch((function(e){console.log(e),s({type:"SET_IS_LOADING",payload:!1})}))}),[o.search]);return n.a.createElement(p.Provider,{value:{state:o,ui:d,dispatch:s,clickedCharacterHandler:function(e){console.log(e),window.scrollTo(0,0),s({type:"SET_CHOSEN_CHARACTER",payload:e})},closeCharacterInfo:function(e){e.stopPropagation(),s({type:"SET_CHOSEN_CHARACTER",payload:""})}}},a)},f=function(){var e=Object(c.useContext)(p),a=e.dispatch,t=e.ui;return n.a.createElement("form",{className:"form"},n.a.createElement("input",{style:{border:t.border},onChange:function(e){return a({type:"SET_SEARCH",payload:e.target.value})},type:"search",id:"input",className:"input",placeholder:"Search by name"}))},y=(t(14),function(){var e=Object(c.useContext)(p),a=e.ui,t=e.state,r=e.dispatch,o=t.info,l=[];if(o)for(var s=1;s<=o.pages;s++)l.push(n.a.createElement("option",{className:"option-page",key:"page"+s,value:s}," ",s));return n.a.createElement("div",{className:"select-page"},n.a.createElement("label",{htmlFor:"select"},"Page"),n.a.createElement("select",{style:{border:a.border},id:"select",className:"pages-select",onChange:function(e){return r({type:"SET_PAGE",payload:e.target.value})}},l))}),b=function(){var e=Object(c.useContext)(p).ui,a=Object(c.useContext)(u).dispatch;return n.a.createElement("nav",{style:{background:e.headerBack,color:e.color},className:"main-header"},n.a.createElement("h1",null,"Rick n' morty"),n.a.createElement(f,null),n.a.createElement(y,null),n.a.createElement("button",{style:{border:e.border},className:"theme-btn",onClick:function(){return a({type:"SET_THEME"})}},"Theme"))},g=(t(15),t(16),t(17),function(){var e=Object(c.useContext)(p),a=e.state,t=e.closeCharacterInfo,r=a.chosenCharacter;return n.a.createElement("div",{className:"char-info-div"},n.a.createElement("div",{className:"x-div"},n.a.createElement("p",{onClick:t,className:"x-p"},n.a.createElement("span",{className:"x-span"},"x"))),n.a.createElement("div",{className:"main-info"},n.a.createElement("p",{className:"char-info-p"},"Species: ",n.a.createElement("span",null,r.species)),n.a.createElement("p",{className:"char-info-p"},"Status: ",n.a.createElement("span",null,r.status)),n.a.createElement("p",{className:"char-info-p"},"Location: ",n.a.createElement("span",null,r.location.name)),n.a.createElement("p",{className:"char-info-p"},"Origin: ",n.a.createElement("span",null,r.origin.name)),n.a.createElement("p",{className:"char-info-p"},"Gender: ",n.a.createElement("span",null,r.gender))))}),C=function(e){var a=e.char,t=e.click,r=Object(c.useContext)(p),o=r.state,l=r.ui,s=o.chosenCharacter;return n.a.createElement("div",{style:{backgroundColor:l.characterBack,color:l.color},className:a.id!==s.id?"character":"selected-char",onClick:t},n.a.createElement("div",{className:a.id===s.id?"left-side":""},n.a.createElement("img",{src:a.image,alt:"user"}),n.a.createElement("p",{className:"info-p "},a.name)),a.id===s.id?n.a.createElement("div",{className:"right-side"},n.a.createElement(g,null)):null)},k=n.a.memo((function(){console.log("characters");var e=Object(c.useContext)(p),a=e.state,t=e.clickedCharacterHandler,r=n.a.createElement("p",null,"Loading...");return!a.isLoading&&a.characters&&a.info&&(r=a.characters.map((function(e){return n.a.createElement(C,{click:function(){return t(e)},key:e.id,id:e.id,char:e})}))),n.a.createElement("div",{className:"characters"},n.a.createElement("div",{className:"chars-content"},r))})),v=function(e){var a=e.children,t=Object(c.useContext)(u).theme,r=t.isDarkTheme?t.dark:t.light;return n.a.createElement("div",{style:{backgroundColor:r.mainBack,color:r.color},className:"background"},a)};var N=function(){return n.a.createElement(d,null,n.a.createElement(E,null,n.a.createElement(v,null,n.a.createElement("div",{className:"App"},n.a.createElement(b,null),n.a.createElement(k,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.91f66f07.chunk.js.map