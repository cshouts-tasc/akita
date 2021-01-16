(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(9),i=(n(0),n(191)),o={title:"Optimistic Updates"},c={id:"additional/optimstic-updates",isDocsHomePage:!1,title:"Optimistic Updates",description:"When performing optimistic updates, the UI adds a new entity to the store before the server request responded with the actual data.",source:"@site/docs/additional/optimstic-updates.mdx",permalink:"/akita/docs/additional/optimstic-updates",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/additional/optimstic-updates.mdx"},p=[],s={rightToc:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When performing optimistic updates, the UI adds a new entity to the store before the server request responded with the actual data.\nOne approach to this is to create a temporary entity id on the client-side and later update it with the real id when the server request is finished.\nTo track id changes of entities in a store Akita provides the RxJS operator ",Object(i.b)("inlineCode",{parentName:"p"},"trackIdChanges(query: QueryEntity)"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { trackIdChanges } from '@datorama/akita';\n\nquery.selectEntity(1).pipe(trackIdChanges(query)).subscribe(entity => {\n  /* ... */\n});\n\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Operators preceding ",Object(i.b)("inlineCode",{parentName:"p"},"trackIdChanges")," in the same RxJS pipeline will only run once and are then discarded."))),Object(i.b)("p",null,"By applying the ",Object(i.b)("inlineCode",{parentName:"p"},"trackIdChanges")," operator on a query, the query gets rebuild each time the id changes.\nThis also means that all successive operators in the same pipeline get re-evaluated, but preceding operators will be discarded.\nThe project function argument of ",Object(i.b)("inlineCode",{parentName:"p"},"selectEntity(id, project)")," is also discarded on id changes."),Object(i.b)("p",null,"In the following example, the ",Object(i.b)("inlineCode",{parentName:"p"},"filter()")," operator, and the project function of ",Object(i.b)("inlineCode",{parentName:"p"},"selectEntity()")," will only run once and be discarded:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"\nquery.selectEntity(1).pipe(filter(entity => entity.done), trackIdChanges(query)).subscribe(entity => {\n  /* ... */\n});\n\nquery.selectEntity(1, entity => entity.done).pipe(trackIdChanges(query)).subscribe(entity => {\n  /* ... */\n});\n\n")))}d.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=d(n),b=r,m=l["".concat(o,".").concat(b)]||l[b]||u[b]||i;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);