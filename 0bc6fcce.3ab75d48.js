(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{142:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),o=(r(0),r(191)),i={title:"Custom Operators"},c={id:"additional/operators",isDocsHomePage:!1,title:"Custom Operators",description:"filterNil",source:"@site/docs/additional/operators.mdx",permalink:"/akita/docs/additional/operators",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/additional/operators.mdx",sidebar:"docs",previous:{title:"Event-based APIs",permalink:"/akita/docs/additional/events"},next:{title:"Array Utils",permalink:"/akita/docs/additional/array"}},l=[{value:"<code>filterNil</code>",id:"filternil",children:[]},{value:"<code>setLoading</code>",id:"setloading",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"filternil"},Object(o.b)("inlineCode",{parentName:"h3"},"filterNil")),Object(o.b)("p",null,"Filters ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," or ",Object(o.b)("inlineCode",{parentName:"p"},"null")," values:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { filterNil } from '@datorama/akita';\n\nquery.selectEntity(1).pipe(filterNil).subscribe();\n")),Object(o.b)("h3",{id:"setloading"},Object(o.b)("inlineCode",{parentName:"h3"},"setLoading")),Object(o.b)("p",null,"set the ",Object(o.b)("inlineCode",{parentName:"p"},"loading")," property to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," and change it to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," when the request completed or there was an error:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="products.service.ts"',title:'"products.service.ts"'}),"import { setLoading } from '@datorama/akita';\n\nexport class ProductsService {\n  constructor(private productsStore: ProductsStore) {}\n\n  getProducts() {\n    return this.http.get(url).pipe(\n      setLoading(store),\n      tap(response => this.productsStore.set(response))\n    );\n  }\n}\n")))}s.isMDXComponent=!0},191:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),b=n,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(f,c({ref:t},p,{components:r})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);