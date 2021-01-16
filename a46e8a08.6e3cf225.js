(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),i=(n(0),n(191)),a={title:"Event-based APIs"},c={id:"additional/events",isDocsHomePage:!1,title:"Event-based APIs",description:"One of the recurring requests we got, was to simplify and improve the experience of working with event-based APIs such as web-sockets.",source:"@site/docs/additional/events.mdx",permalink:"/akita/docs/additional/events",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/additional/events.mdx",sidebar:"docs",previous:{title:"Reset Stores",permalink:"/akita/docs/additional/reset"},next:{title:"Custom Operators",permalink:"/akita/docs/additional/operators"}},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"One of the recurring requests we got, was to simplify and improve the experience of working with event-based APIs such as web-sockets."),Object(i.b)("p",null,"To make it easier for you, we\u2019ve added a new API method\u200a\u2014\u200a",Object(i.b)("inlineCode",{parentName:"p"},"runStoreAction")," and ",Object(i.b)("inlineCode",{parentName:"p"},"runEntityStoreAction"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { runStoreAction, StoreActions, runEntityStoreAction, EntityStoreActions  } from '@datorama/akita';\n\nrunStoreAction(BooksStore, StoreAction.Update, update => update({ filter: 'COMPLETE' }));\n\n// Or use a string\nrunStoreAction('books', StoreAction.Update, update => update({ filter: 'COMPLETE' }));\n\nrunEntityStoreAction(BooksStore, EntityStoreAction.SetEntities, set => set([\n  { id: 1 },\n  { id: 2 }\n]));\n\nrunEntityStoreAction(BooksStore, EntityStoreAction.AddEntities, add => add({ id: 1 }));\n\nrunEntityStoreAction(BooksStore, EntityStoreAction.UpdateEntities, update => update(2, { title: 'New title' }));\n\nrunEntityStoreAction(BooksStore, EntityStoreAction.RemoveEntities, remove => remove(2));\n\nrunEntityStoreAction(BooksStore, EntityStoreAction.UpsertEntities, upsert => upsert([2, 3],\n  { title: 'New Title' }, (id, newState) => ({ id, ...newState, price: 0 })));\n\nrunEntityStoreAction(BooksStore, EntityStoreAction.UpsertManyEntities, upsertMany => upsertMany([\n  { id: 2, title: 'New title', price: 0 },\n  { id: 4, title: 'Another title', price: 0 },\n));\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"runStoreAction()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"runEntityStoreAction()")," takes the store\u2019s class or name, the store action to perform and an operation\ncallback. The first argument of the operation callback is the store operator specified by the action. You can determine\nthese parameters from your socket connection and update any store you want."),Object(i.b)("p",null,"By using the store name and not the store class as the first argument, type checking of the respective action arguments is disabled.\nThis can be useful when validation of untyped data is unnecessary and can be passed directly to the activity."))}u.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(a,".").concat(f)]||d[f]||l[f]||i;return n?o.a.createElement(b,c({ref:t},p,{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);