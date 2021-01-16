(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(9),i=(n(0),n(191)),r={title:"Server Side Pagination"},c={id:"plugins/pagination",isDocsHomePage:!1,title:"Server Side Pagination",description:"In many cases - for example, when working with very large data-sets - we don't want to work with the full collection in memory. Instead server-side paging is used, where the server sends just a single page at a time.",source:"@site/docs/plugins/pagination.mdx",permalink:"/akita/docs/plugins/pagination",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/plugins/pagination.mdx",sidebar:"docs",previous:{title:"Dirty Check",permalink:"/akita/docs/plugins/dirty-check"},next:{title:"Devtools",permalink:"/akita/docs/enhancers/devtools"}},s=[{value:"Basic Pagination",id:"basic-pagination",children:[]},{value:"Advanced Pagination",id:"advanced-pagination",children:[]},{value:"Pagination Metadata",id:"pagination-metadata",children:[]},{value:"API",id:"api",children:[{value:"<code>pagesControls</code>",id:"pagescontrols",children:[]},{value:"<code>range</code>",id:"range",children:[]},{value:"<code>startWith</code>",id:"startwith",children:[]},{value:"<code>cacheTimeout</code>",id:"cachetimeout",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In many cases - for example, when working with very large data-sets - we don't want to work with the full collection in memory. Instead server-side paging is used, where the server sends just a single page at a time."),Object(i.b)("p",null,"Usually, we also want to cache pages that already have been fetched, in order to spare the need for an additional request."),Object(i.b)("p",null,"The Paginator API provides two useful features:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Caching of pages which have already been fetched. "),Object(i.b)("li",{parentName:"ol"},"A pagination functionally, which gives you all the things you need to manage pagination in the application.")),Object(i.b)("h2",{id:"basic-pagination"},"Basic Pagination"),Object(i.b)("p",null,"First, we need to create a new provider, let\u2019s say we need paginator for our contacts page:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="contacts-paginator.ts"',title:'"contacts-paginator.ts"'}),"import { InjectionToken } from '@angular/core';\nimport { PaginatorPlugin } from '@datorama/akita';\nimport { ContactsQuery } from './contacts.query';\n\nexport const CONTACTS_PAGINATOR = \nnew InjectionToken('CONTACTS_PAGINATOR', {\n  providedIn: 'root',\n  factory: () => {\n    const contactsQuery = inject(ContactsQuery);\n    return new PaginatorPlugin(contactsQuery)\n            .withControls()\n            .withRange();\n  }\n});\n")),Object(i.b)("p",null,"You should already be familiar with the above code. This is the regular process of creating a ",Object(i.b)("inlineCode",{parentName:"p"},"factory")," provider in Angular. We are creating a new ",Object(i.b)("inlineCode",{parentName:"p"},"Paginator()"),", passing the ",Object(i.b)("inlineCode",{parentName:"p"},"Query")," we want to use in our pagination."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Non-Angular applications can export the plugin without using DI. For example:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export const contactsPaginator= new PaginatorPlugin(contactsQuery)\n                      .withControls().withRange();\n")))),Object(i.b)("p",null,"We call ",Object(i.b)("inlineCode",{parentName:"p"},"withControls()"),", which will give us an array of pages so we ",Object(i.b)("inlineCode",{parentName:"p"},"*ngFor")," on them and ",Object(i.b)("inlineCode",{parentName:"p"},"withRange()")," which will give us the ",Object(i.b)("inlineCode",{parentName:"p"},"from")," and ",Object(i.b)("inlineCode",{parentName:"p"},"to")," values to display to the user. Now, we can use it in our component:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="contacts.component.ts"',title:'"contacts.component.ts"'}),"import { PaginationResponse } from '@datorama/akita';\nimport { CONTACTS_PAGINATOR } from './contacts-paginator';\n\n@Component({})\nexport class ContactsPageComponent {\n  pagination$: Observable<PaginationResponse<ContactsState>>;\n  \n  constructor(@Inject(CONTACTS_PAGINATOR) \n              public paginatorRef: PaginatorPlugin<ContactsState>, \n              private contactsService: ContactsService) {}\n\n  ngOnInit() {\n     this.pagination$ = this.paginatorRef.pageChanges.pipe(\n       switchMap(( page ) => {\n         const reqFn = () => this.contactsService.getPage({\n           page,\n           perPage: 10\n         });\n\n         return this.paginatorRef.getPage(reqFn);\n       })\n     );\n  }\n\n  ngOnDestroy() {\n    this.paginatorRef.destroy();\n  }\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Paginator")," provides you with a ",Object(i.b)("inlineCode",{parentName:"p"},"pageChanges")," observable so you can listen to page changes and call the ",Object(i.b)("inlineCode",{parentName:"p"},"getPage()")," method, passing the request function. ",Object(i.b)("inlineCode",{parentName:"p"},"Paginator")," expects to get the following fields as part of the ",Object(i.b)("inlineCode",{parentName:"p"},"response")," from the server:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="response.json"',title:'"response.json"'}),'{\n  "perPage": 10,\n  "lastPage": "10",\n  "currentPage": "3",\n  "total": 150,\n  "data": [...]\n}\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you didn't provide the total property it will default to: ",Object(i.b)("inlineCode",{parentName:"p"},"response.perPage * response.lastPage")))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Paginator")," also exposes all the data that you need to display as well as methods for controlling the page from the UI:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="contacts.component.html"',title:'"contacts.component.html"'}),'<section>\n  <h1>Contacts</h1>\n  <loader *ngIf="paginatorRef.isLoading$ | async"><loader>\n\n  <section *ngIf="(pagination$ | async) as pagination">\n    <table>\n      <thead>\n        ..\n      </thead>\n      <tbody>\n        <tr *ngFor="let contact of pagination.data">\n          <td>{{contact.name}}</td>\n          ...\n        </tr>\n      </tbody>\n    </table>\n\n    <p>{{pagination.from}} - {{pagination.to}} of {{pagination.total}}</p>\n\n    <ul>\n      <li [class.disabled]="paginatorRef.isFirst" \n         (click)="paginatorRef.setFirstPage()">\n         First page\n      </li>\n      \n      <li [class.disabled]="paginatorRef.isFirst" (click)="paginatorRef.prevPage()">\n         Prev\n      </li>\n      \n      <li *ngFor="let page of pagination.pageControls"\n          (click)="paginatorRef.setPage(page)"\n          [class.active]="paginatorRef.isPageActive(page)">\n          {{page}}\n      </li>\n      \n      <li [class.disabled]="paginatorRef.isLast" (click)="paginatorRef.nextPage()">\n         Next\n      </li>\n      \n      <li [class.disabled]="paginatorRef.isLast" (click)="paginatorRef.setLastPage()">\n         Last\n      </li>\n    </ul>\n  </section>\n\n</section>\n')),Object(i.b)("p",null,"That's all you need in order to get fully working pagination including caching."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you don't want Paginator to be a singleton you can skip the provider part and just create new instance directly in the component."))),Object(i.b)("h2",{id:"advanced-pagination"},"Advanced Pagination"),Object(i.b)("p",null,"There are times where we want to give our users the ability to filter the data, sort it, or change the number of entries per page. The vital step here is that when we change a filter, sort etc., we want to invalidate the cache, because it may alter the server response. Here is a fully working example of this type of functionality:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="contacts.component.ts"',title:'"contacts.component.ts"'}),"import { PaginationResponse } from '@datorama/akita';\nimport { CONTACTS_PAGINATOR } from './contacts-paginator';\n\n@Component({})\nexport class ContactsPageComponent {\n  pagination$: Observable<PaginationResponse<ContactsState>>;\n  sortByControl: FormControl;\n  perPageControl: FormControl;\n\n  constructor(@Inject(CONTACTS_PAGINATOR) \n              public paginatorRef: PaginatorPlugin<ContactsState>, \n              private contactsService: ContactsService) {}\n\n  ngOnInit() {\n    this.sortByControl = new FormControl('price');\n    this.perPageControl = new FormControl(10);\n\n    const sort = this.sortByControl.valueChanges.pipe(startWith('price'));\n    const perPage = this.perPageControl.valueChanges.pipe(startWith(10));\n\n    this.pagination$ = combineLatest(\n        this.paginatorRef.pageChanges, \n        combineLatest(sort, perPage).pipe(\n           tap(_ => this.paginatorRef.clearCache()\n       ))).pipe(\n        switchMap(([page, [sortBy, perPage]]) => {\n          const req = () => this.contactsService.getPage({ page, sortBy, perPage });\n          return this.paginatorRef.getPage(req);\n      })\n    );\n  }\n\n  ngOnDestroy() {\n    this.paginatorRef.destroy();\n  }\n}\n")),Object(i.b)("p",null,"When each filter emits a new value, we need to invalidate the cache, so that the ",Object(i.b)("inlineCode",{parentName:"p"},"Paginator")," will know that it needs to re-fetch the data from the server."),Object(i.b)("h2",{id:"pagination-metadata"},"Pagination Metadata"),Object(i.b)("p",null,"Sometimes you want to save the current filters, so if the user navigates from the current route and comes back you want the filter values to persist. Paginator exposes a ",Object(i.b)("inlineCode",{parentName:"p"},"metadata")," property where you can set these values. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="contacts.component.ts"',title:'"contacts.component.ts"'}),"import { PaginationResponse } from '@datorama/akita';\nimport { CONTACTS_PAGINATOR } from './contacts-paginator';\n\n@Component({})\nexport class ContactsPageComponent {\n  pagination$: Observable<PaginationResponse<ContactsState>>;\n  \n  constructor(@Inject(CONTACTS_PAGINATOR) \n              public paginatorRef: PaginatorPlugin<ContactsState>, \n              private contactsService: ContactsService) {}\n\n  ngOnInit() {\n    const sortByInit = this.paginatorRef.metadata.get('sortBy') || 'name';\n    const perPageInit = this.paginatorRef.metadata.get('perPage') || 10;\n    \n    this.sortByControl = new FormControl(sortByInit);\n    this.perPageControl = new FormControl(perPageInit);\n    \n   const sort = this.sortByControl.valueChanges.pipe(startWith(sortByInit));\n    const perPage = this.perPageControl.valueChanges.pipe(startWith(perPageInit));\n\n    this.pagination$ = combineLatest(\n        this.paginatorRef.pageChanges, \n        combineLatest(sort, perPage).pipe(\n           tap(_ => this.paginatorRef.clearCache()\n       ))).pipe(\n        switchMap(([page, [sortBy, perPage]]) => {\n          const req = () => this.contactsService.getPage({ page, sortBy, perPage });\n          this.paginatorRef.metadata.set('sortBy', sortBy);\n          this.paginatorRef.metadata.set('perPage', perPage);\n          \n          return this.paginatorRef.getPage(req);\n      })\n    );\n  }\n\n  ngOnDestroy() {\n    this.paginatorRef.destroy();\n  }\n}\n")),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("h3",{id:"pagescontrols"},Object(i.b)("inlineCode",{parentName:"h3"},"pagesControls")),Object(i.b)("p",null,"Whether to generate page controls"),Object(i.b)("h3",{id:"range"},Object(i.b)("inlineCode",{parentName:"h3"},"range")),Object(i.b)("p",null,"Whether to generate range (from, to)"),Object(i.b)("h3",{id:"startwith"},Object(i.b)("inlineCode",{parentName:"h3"},"startWith")),Object(i.b)("p",null,"Page to start with"),Object(i.b)("h3",{id:"cachetimeout"},Object(i.b)("inlineCode",{parentName:"h3"},"cacheTimeout")),Object(i.b)("p",null,"Observable that'll invalidate the cache when emits. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"interval(10000)")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"new PaginatorPlugin({\n  pagesControls: false,\n  range: false,\n  startWith: 1,\n  cacheTimeout: Observable<any>\n})\n")))}l.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},g=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(n),d=a,m=g["".concat(r,".").concat(d)]||g[d]||b[d]||i;return n?o.a.createElement(m,c({ref:t},p,{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);