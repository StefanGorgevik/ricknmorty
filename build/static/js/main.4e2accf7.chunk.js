(this.webpackJsonpricknmorty=this.webpackJsonpricknmorty||[]).push([[0],[,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),o=(a(9),a(10),a(11),a(12),a(1)),i=Object(n.createContext)({characters:[]}),s=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(o.a)(a,2),l=r[0],s=r[1],u=Object(n.useState)(null),m=Object(o.a)(u,2),f=m[0],h=m[1],d=Object(n.useState)(1),p=Object(o.a)(d,2),E=p[0],g=p[1],v=Object(n.useState)("1"),b=Object(o.a)(v,2),C=b[0],j=b[1],k=Object(n.useState)(!1),N=Object(o.a)(k,2),O=N[0],w=N[1],S=Object(n.useState)(""),y=Object(o.a)(S,2),x=y[0],P=y[1];Object(n.useEffect)((function(){w(!0),fetch("https://rickandmortyapi.com/api/character/?page=".concat(E)).then((function(e){if(!e.ok)throw new Error("Failed to fetch.");return e.json()})).then((function(e){w(!1),s(e.results),h(e.info)})).catch((function(e){console.log(e),w(!1)}))}),[E]);return c.a.createElement(i.Provider,{value:{characters:l,info:f,chosenCharacter:x,isLoading:O,page:E,clickedCharacterHandler:function(e){P(e),window.scrollTo(0,0);var t=l.filter((function(t){return t.id!==e.id}));t.unshift(e),s(t)},closeCharacterInfo:function(e){e.stopPropagation(),P("")},setPageHandler:function(e){console.log(e),g(e)},setSearch:j,getCharacterByName:function(e){e.preventDefault(),w(!0),fetch("https://rickandmortyapi.com/api/character/?name=".concat(C)).then((function(e){if(!e.ok)throw new Error("Failed to fetch.");return e.json()})).then((function(e){w(!1),s(e.results)})).catch((function(e){console.log(e),w(!1)}))}}},t)},u=function(){var e=Object(n.useContext)(i),t=e.setSearch,a=e.getCharacterByName;return c.a.createElement("form",{onSubmit:a,className:"form"},c.a.createElement("input",{onChange:function(e){return t(e.target.value)},type:"text",id:"input",className:"input",placeholder:"Search by name"}),c.a.createElement("button",{className:"form-btn",onClick:a},"Search"),c.a.createElement("button",{className:"form-btn",onClick:function(){return t("")}},"Clear"))},m=(a(13),function(){var e=Object(n.useContext)(i),t=e.info,a=e.setPageHandler,r=[];if(t)for(var l=1;l<=t.pages;l++)r.push(c.a.createElement("option",{className:"option-page",key:"page"+l,value:l}," ",l));return c.a.createElement("div",{className:"select-page"},c.a.createElement("label",{htmlFor:"select"},"Page"),c.a.createElement("select",{id:"select",className:"pages-select",onChange:function(e){return a(e.target.value)}},r))}),f=function(){return c.a.createElement("nav",{className:"main-header"},c.a.createElement("h1",null,"Rick and morty"),c.a.createElement(u,null),c.a.createElement(m,null))},h=(a(14),a(15),a(16),function(){var e=Object(n.useContext)(i),t=e.chosenCharacter,a=e.closeCharacterInfo;return console.log(t),c.a.createElement("div",{className:"char-info-div"},c.a.createElement("div",{className:"x-div"},c.a.createElement("p",{onClick:a,className:"x-p"},"x")),c.a.createElement("div",{className:"main-info"},c.a.createElement("p",null,"Species: ",c.a.createElement("span",null,t.species)),c.a.createElement("p",null,"Status: ",c.a.createElement("span",null,t.status)),c.a.createElement("p",null,"Origin: ",c.a.createElement("span",null,t.origin.name)),c.a.createElement("p",null,"Gender: ",c.a.createElement("span",null,t.gender))))}),d=function(e){var t=e.char,a=e.click,r=Object(n.useContext)(i).chosenCharacter;return c.a.createElement("div",{className:t.id!==r.id?"character":"selected-char",onClick:a},c.a.createElement("div",{className:t.id===r.id?"left-side":"char-inactive"},c.a.createElement("img",{src:t.image,alt:"user"}),c.a.createElement("div",{className:"info"},c.a.createElement("p",null,t.name))),t.id===r.id?c.a.createElement("div",{className:"right-side"},c.a.createElement(h,null)):null)},p=c.a.memo((function(){console.log("characters");var e=Object(n.useContext)(i),t=e.characters,a=e.info,r=e.clickedCharacterHandler,l=e.isLoading,o=c.a.createElement("p",null,"Loading...");return!l&&t&&a&&(o=t.map((function(e){return c.a.createElement(d,{click:function(){return r(e)},key:e.id,id:e.id,char:e})}))),c.a.createElement("div",{className:"characters"},c.a.createElement("div",{className:"chars-content"},o))}));var E=function(){return c.a.createElement(s,null,c.a.createElement("div",{className:"App"},c.a.createElement(f,null),c.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.4e2accf7.chunk.js.map