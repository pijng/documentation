"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[2043],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7158:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(4137)),i=["components"],l={sidebar_position:3},s="Cross-communication",p={unversionedId:"concepts/cross-communication",id:"concepts/cross-communication",isDocsHomePage:!1,title:"Cross-communication",description:"Within the framework of the methodology, all modules are distributed by scopes of responsibility (layer, slice, segment)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/concepts/cross-communication.md",sourceDirName:"concepts",slug:"/concepts/cross-communication",permalink:"/en/docs/concepts/cross-communication",editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/concepts/cross-communication.md",tags:[],version:"current",lastUpdatedAt:1654970088,formattedLastUpdatedAt:"6/11/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"conceptsSidebar",previous:{title:"Needs driven",permalink:"/en/docs/concepts/needs-driven"},next:{title:"App splitting",permalink:"/en/docs/concepts/app-splitting"}},c=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Rule",id:"rule",children:[],level:2},{value:"Identifying problems",id:"identifying-problems",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cross-communication"},"Cross-communication"),(0,a.kt)("p",null,"Within the framework of the methodology, all modules are distributed by scopes of responsibility ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting"},"(layer, slice, segment)")),(0,a.kt)("p",null,"The layers, in turn, are organized vertically:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"At the bottom" are the reused modules (ui-kit, internal libraries of the project), as the most abstract'),(0,a.kt)("li",{parentName:"ul"},'And as you move "up", more specific modules are located.')),(0,a.kt)("p",null,"Regardless of whether it belongs to any slice, each module ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/public-api"},(0,a.kt)("strong",{parentName:"a"},"is required to provide a public access interface")),"."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"The interaction of each module with the rest of the application is designed taking into account a number of requirements:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Low coupling")," with other modules"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"A change in one module should have a weak and predictable effect on others")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"High cohesion"),' - the responsibilities of each module are "focused" on one task'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},'If the module has too many responsibilities (starts "doing too much") - this should be noticed as soon as possible')))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Absence of cyclic dependencies")," on the scale of the entire application"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Often lead to unexpected, undesirable behavior, it is better to avoid them altogether"))))),(0,a.kt)("h2",{id:"rule"},"Rule"),(0,a.kt)("p",null,"To meet these requirements, within the framework of the methodology, it is necessary to observe the basic rule:"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},'A module can depend only on "underlying" modules, but not on modules from the same or higher layer'))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"features/auth")," ",(0,a.kt)("strong",{parentName:"li"},"cannot")," depend on ",(0,a.kt)("inlineCode",{parentName:"li"},"features/filters")," ",(0,a.kt)("strong",{parentName:"li"},"and vice versa")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"features/auth")," ",(0,a.kt)("strong",{parentName:"li"},"may")," depend on ",(0,a.kt)("inlineCode",{parentName:"li"},"shared/ui/button"),", ",(0,a.kt)("strong",{parentName:"li"},"but not vice versa"))),(0,a.kt)("p",null,"Following this rule allows you to keep dependencies ",(0,a.kt)("strong",{parentName:"p"},'"unidirectional"')," - which automatically ",(0,a.kt)("strong",{parentName:"p"},"eliminates cyclic imports")," and significantly ",(0,a.kt)("strong",{parentName:"p"},"simplifies tracking dependencies")," between modules in the application."),(0,a.kt)("h2",{id:"identifying-problems"},"Identifying problems"),(0,a.kt)("p",null,"Violation of this rule is a signal of problems:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The module has ",(0,a.kt)("strong",{parentName:"p"},"import from another module")," from its own layer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Perhaps the module was ",(0,a.kt)("strong",{parentName:"li"},"unnecessarily fragmented")," or has ",(0,a.kt)("strong",{parentName:"li"},"unnecessary responsibility.")),(0,a.kt)("li",{parentName:"ul"},"You should ",(0,a.kt)("strong",{parentName:"li"},"combine")," it with the imported module or ",(0,a.kt)("strong",{parentName:"li"},"move it (partially or completely) to the layer below")," or transfer the logic of relationships to modules on higher layers."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The module ",(0,a.kt)("strong",{parentName:"p"},"is imported by many modules")," from its own layer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Perhaps the module has ",(0,a.kt)("strong",{parentName:"li"},"extra responsibility.")),(0,a.kt)("li",{parentName:"ul"},"You should ",(0,a.kt)("strong",{parentName:"li"},"move it (partially or entirely) to the layer below"),", or transfer the logic of connections to modules on higher layers."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The module ",(0,a.kt)("strong",{parentName:"p"},"has imports from many modules")," from its own layer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Perhaps the module belongs to ",(0,a.kt)("strong",{parentName:"li"},"another scope of responsibility.")),(0,a.kt)("li",{parentName:"ul"},"You should ",(0,a.kt)("strong",{parentName:"li"},"move it (partially or completely) to the layer above"),".")))),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/low-coupling"},"(Guide) About achieving low coupling")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/49"},"(Discussion) Coupled entities")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/65#discussioncomment-480822"},"(Discussion) About cross-imports and analysis \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/GRASP"},(0,a.kt)("strong",{parentName:"a"},"GRASP")," Patterns"))))}u.isMDXComponent=!0}}]);