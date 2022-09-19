"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[7993],{4137:function(A,e,t){t.d(e,{Zo:function(){return C},kt:function(){return s}});var o=t(7294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,o)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function g(A,e){if(null==A)return{};var t,o,n=function(A,e){if(null==A)return{};var t,o,n={},r=Object.keys(A);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var i=o.createContext({}),c=function(A){var e=o.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},C=function(A){var e=c(A.components);return o.createElement(i.Provider,{value:e},A.children)},l={inlineCode:"code",wrapper:function(A){var e=A.children;return o.createElement(o.Fragment,{},e)}},U=o.forwardRef((function(A,e){var t=A.components,n=A.mdxType,r=A.originalType,i=A.parentName,C=g(A,["components","mdxType","originalType","parentName"]),U=c(t),s=n,F=U["".concat(i,".").concat(s)]||U[s]||l[s]||r;return t?o.createElement(F,a(a({ref:e},C),{},{components:t})):o.createElement(F,a({ref:e},C))}));function s(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var r=t.length,a=new Array(r);a[0]=U;var g={};for(var i in e)hasOwnProperty.call(e,i)&&(g[i]=e[i]);g.originalType=A,g.mdxType="string"==typeof A?A:n,a[1]=g;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}U.displayName="MDXCreateElement"},7798:function(A,e,t){t.d(e,{ZP:function(){return c}});var o=t(3117),n=t(102),r=(t(7294),t(4137)),a=t(6735),g=["components"],i={toc:[]};function c(A){var e=A.components,t=(0,n.Z)(A,g);return(0,r.kt)("wrapper",(0,o.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,(0,o.Z)({},t,{mdxType:"NavCard"})))}c.isMDXComponent=!0},4367:function(A,e,t){t.d(e,{ga:function(){return o}});var o={};t.r(o),t.d(o,{CATEGORIES:function(){return r},sendEvent:function(){return n}});var n=function(A){var e=A.category,t=A.action,o=A.label,n=A.value;if(void 0!==typeof window&&window.ga)return window.ga("send",{hitType:"event",eventCategory:e,eventAction:t,eventLabel:o,eventValue:n})},r={full:"Feedback 1.2 (full)",mixed:"Feedback 1.2 (mixed)",short:"Feedback 1.2 (short)"}},6735:function(A,e,t){t.d(e,{J:function(){return i},Z:function(){return C}});var o=t(7294),n=t(6010),r=t(2511),a=t(4367),g={root:"root_34MW",rootDisabled:"rootDisabled_1kkF",details:"details_1Iw7",detailsTags:"detailsTags_1iNH",icon:"icon_35Rj",title:"title_2kc6",description:"description_1i0Z",miniTheme:"miniTheme_249N",primaryTheme:"primaryTheme_35m3",defaultTheme:"defaultTheme_1cfl"},i=function(A){var e=A.title,t=A.description,i=A.to,C=A.Icon,l=A.tags,U=A.className,s=A.disabled,F=A.theme,B=void 0===F?"default":F,K=(0,o.useCallback)((function(){a.ga.sendEvent({category:a.ga.CATEGORIES.full,action:"NavRow:Click",label:i})}),[i]);return o.createElement(r.Z,{className:(0,n.Z)(g.root,U,s&&g.rootDisabled,g[B+"Theme"]),to:i,onClick:K},o.createElement(c,{Icon:C}),o.createElement("div",{className:g.details},o.createElement("div",{className:g.detailsMain},o.createElement("span",{className:g.title},e),o.createElement("p",{className:g.description},t)),l&&o.createElement("div",{className:g.detailsTags},l.join(" \u2022 "))))},c=function(A){var e=A.Icon;return e?"string"==typeof e?o.createElement("span",{className:g.icon},e):o.createElement(e,{className:g.icon}):null},C=i},5131:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return C},toc:function(){return l},default:function(){return s}});var o=t(3117),n=t(102),r=(t(7294),t(4137)),a=t(7798),g=(t(2511),["components"]),i={sidebar_position:1,slug:"/",pagination_next:"get-started/index"},c="\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",C={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",description:"feature-sliced-banner",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/intro.mdx",sourceDirName:".",slug:"/",permalink:"/ru/docs/",editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/intro.mdx",tags:[],version:"current",lastUpdatedAt:1663576745,formattedLastUpdatedAt:"19.09.2022",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",pagination_next:"get-started/index"},next:{title:"\ud83d\ude80 \u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0441\u0442\u0430\u0440\u0442",permalink:"/ru/docs/get-started"}},l=[],U={toc:l};function s(A){var e=A.components,i=(0,n.Z)(A,g);return(0,r.kt)("wrapper",(0,o.Z)({},U,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"feature-sliced-banner",src:t(5432).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Feature-Sliced Design")," (FSD) \u2014 \u044d\u0442\u043e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u0430\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f frontend-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u041f\u0440\u043e\u0449\u0435 \u0433\u043e\u0432\u043e\u0440\u044f, \u044d\u0442\u043e \u0441\u0432\u043e\u0434 \u043f\u0440\u0430\u0432\u0438\u043b \u0438 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0439 \u043f\u043e \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043e\u0434\u0430. \u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0446\u0435\u043b\u044c \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u2014 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u043c \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0432 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439 \u0431\u0438\u0437\u043d\u0435\u0441\u0430."),(0,r.kt)(a.ZP,{theme:"primary",Icon:"\ud83c\udf70",title:"\u041d\u043e\u0432\u0438\u0447\u043e\u043a \u0432 FSD?",description:"\u0418\u0437\u0443\u0447\u0438\u0442\u0435 \u043e\u0441\u043d\u043e\u0432\u044b \u0438 \u043a\u0440\u0430\u0442\u043a\u0438\u0439 \u043e\u0431\u0437\u043e\u0440 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438",to:"/docs/get-started/overview",mdxType:"NavCard"}),(0,r.kt)("br",null),(0,r.kt)(a.ZP,{theme:"mini",title:"\ud83d\ude80 \u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0441\u0442\u0430\u0440\u0442",description:"\u0422\u0443\u0440 \u043f\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u043f\u043e\u043d\u044f\u0442\u0438\u044f\u043c \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0439 \u0440\u0430\u0437\u0431\u043e\u0440 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043d\u0430 React",to:"/docs/get-started",tags:["\u041e\u0441\u043d\u043e\u0432\u044b","\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0441\u0442\u0430\u0440\u0442","\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"],mdxType:"NavCard"}),(0,r.kt)(a.ZP,{theme:"mini",title:"\ud83c\udfaf \u0413\u0430\u0439\u0434\u044b",description:"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0433\u0430\u0439\u0434\u044b \u0438 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u043f\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e Feature-Sliced Design",to:"/docs/guides",tags:["v1","\u041b\u0435\u0433\u0430\u0441\u0438","\u041f\u0440\u0438\u043c\u0435\u0440\u044b"],mdxType:"NavCard"}),(0,r.kt)(a.ZP,{theme:"mini",title:"\ud83e\udde9 \u041a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438",description:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438 \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f",to:"/docs/concepts",tags:["\u0414\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f","\u0418\u0437\u043e\u043b\u044f\u0446\u0438\u044f","Public API"],mdxType:"NavCard"}),(0,r.kt)(a.ZP,{theme:"mini",title:"\ud83d\udcda \u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a",description:"\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u043f\u043e\u043d\u044f\u0442\u0438\u044f\u043c",to:"/docs/reference",tags:["\u0413\u043b\u043e\u0441\u0441\u0430\u0440\u0438\u0439","\u0421\u043b\u043e\u0438","\u0421\u0435\u0433\u043c\u0435\u043d\u0442\u044b"],mdxType:"NavCard"}),(0,r.kt)(a.ZP,{theme:"mini",title:"\ud83c\udf70 \u041e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438",description:"\u0424\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438, \u0435\u0435 \u0446\u0435\u043b\u0438 \u0438 \u043c\u0435\u0441\u0442\u043e \u0432 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u043c \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0435",to:"/docs/about",tags:["\u041c\u0438\u0441\u0441\u0438\u044f","\u041f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435 & \u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f"],mdxType:"NavCard"}),(0,r.kt)(a.ZP,{theme:"mini",title:"\ud83d\udcab \u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e",description:"\u0420\u0435\u0441\u0443\u0440\u0441\u044b \u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e\u043c",to:"/community",tags:["Awesome","\u041a\u043e\u043c\u0430\u043d\u0434\u0430","\u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435"],mdxType:"NavCard"}),(0,r.kt)(a.ZP,{theme:"mini",title:"\ud83d\udee0 \u041f\u0440\u0438\u043c\u0435\u0440\u044b",description:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u0441\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043f\u043e Feature-Sliced Design",to:"/examples",mdxType:"NavCard"}))}s.isMDXComponent=!0},6010:function(A,e,t){function o(A){var e,t,n="";if("string"==typeof A||"number"==typeof A)n+=A;else if("object"==typeof A)if(Array.isArray(A))for(e=0;e<A.length;e++)A[e]&&(t=o(A[e]))&&(n&&(n+=" "),n+=t);else for(e in A)A[e]&&(n&&(n+=" "),n+=e);return n}function n(){for(var A,e,t=0,n="";t<arguments.length;)(A=arguments[t++])&&(e=o(A))&&(n&&(n+=" "),n+=e);return n}t.d(e,{Z:function(){return n}})},5432:function(A,e){e.Z="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wgARCAFABXgDAREAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAEDBAUGAv/EABkBAQEAAwEAAAAAAAAAAAAAAAABAgMEBf/aAAwDAQACEAMQAAAA8V0+cAoAAAKAAACgAAAoAoAAUAFAAUACgAAAFoAAAUAAoCgCooJQFAUAAoCgChAAAVQFgC0AAAAAAKAAAUAUAAAKAAAAAAAAAAAAAAAHx5moAKAAACgAAAoAAAKAKAAFABQAFAAoAAABaAAAFAAKAoAqKCUBQFAAKAoAoQAAFUBYAtAAAAAACgAAFAFAAACgAAAAAAAAAAAAAAPjzNQACgAAAoAAAKAAACgCgABQAUABQAKAAAAWgAABQACgKAKiglAUBQACgKAKEAABVAWALQAAAAAAoAABQBQAAAoAAAAAAAAAAAAAAY/M1UAAUAAAFAAABQAAAUAUAAKACgAKABQAAAC0AAAKAAUBQBUUEoCgKAAUBQBQgAAKoCwBaAAAAAAFAAAKAKAAAFAAAAAAAAAAAAAAY/M1CgACgAAAoAAAKAAACgCgABQAUABQAKAAAAWgAABQACgKAKiglAUBQACgKAKEAABVAWALQAAAAAAoAABQBQAAAoAAAAAAAAAAAAAY/M1AUAAUAAAFAAABQAAAUAUAAKACgAKABQAAAC0AAAKAAUBQBUUEoCgKAAUBQBQgAAKoCwBaAAAAAAFAAAKAKAAAFAAAAAAAAAAAAAY/M1ACgACgAAAoAAAKAAACgCgABQAUABQAKAAAAWgAABQACgKAKiglAUBQACgKAKEAABVAWALQAAAAAAoAABQBQAAAoAAAAAAAAAAAAY/M1AAUAAUAAAFAAABQAAAUAUAAKACgAKABQAAAC0AAAKAAUBQBUUEoCgKAAUBQBQgAAKoCwBaAAAAAAFAAAKAKAAAFAAAAAAAAAAAAY/M1AACgACgAAAoAAAKAAACgCgABQAUABQAKAAAAWgAABQACgKAKiglAUBQACgKAKEAABVAWALQAAAAAAoAABQBQAAAoAAAAAAAAAAAY/M1AAAUAAUAAAFAAABQAAAUAUAAKACgAKABQAAAC0AAAKAAUBQBUUEoCgKAAUBQBQgAAKoCwBaAAAAAAFAAAKAKAAAFAAAAAAAAAAAY/M1AAACgACgAAAoAAAKAAACgCgABQAUABQAKAAAAWgAABQACgKAKiglAUBQACgKAKEAABVAWALQAAAAAAoAABQBQAAAoAAAAAAAAAAY/M1AAAAUAAUAAAFAAABQAAAUAUAAKACgAKABQAAAC0AAAKAAUBQBUUEoCgKAAUBQBQgAAKoCwBaAAAAAAFAAAKAKAAAFAAAAAAAAAAY/M1AAAACgACgAAAoAAAKAAACgCgABQAUABQAKAAAAWgAABQACgKAKiglAUBQACgKAKEAABVAWALQAAAAAAoAABQBQAAAoAAAAAAAAAY/M1AAAAAUAAUAAAFAAABQAAAUAUAAKACgAKABQAAAy3Dcz0iWhaIoVq4bcWOQCtzLRksUVRYauGzFMslx3sueKULcMz1cdoCgKAKEAABVAWALQAAAAAAoAABQBQAAAoAAAAAAAADH5moAAAAAUAAUAAAFAAABQAAAUAUAAKACgAKABQAAHR2cvqunyIylsuUuUtjKWy3zvJ387TvAHq+ryN3PTLlLZcpbGXnuXu5uro3sub1u/xZcpbLlGXKw6/Pc/ogBQFAFCAAAqgLAFoAAAAAAUAAAoAoAAAUAAAAAAAAMfmagAAAAAKAAKAAACgAAAoAAAKAKAAFABQAFAAoAAbmeju7+CKtlsVcostW8fm6dPXt2stPf3edLYq5S0stlpeRo6tLXt2rp7+7zVsWXJbFlpfP83djmQUBQBQgAAKoCwBaAAAAAAFAAAKAKAAAFAAAAAAAAY/M1AAAAAACgACgAAAoAAAKAAACgCgABQAUABQAKAA2stXY3cS2LLYq2LLS8zRv1dezZy1dndwy0stLLSy2LzdPRq4Z57r7W3gLLVsVbFW8Xn68cyAUBQBQgAAKoCwBaAAAAAAFAAAKAKAAAFAAAAAAADH5moAAAAAACgACgAAAoAAAKAAACgCgABQAUABQAKAHT28vrevyJcpbLl5bj9Tl6ekAAdDZzew6/GlylsuUuUt1cd3jvP8AUoBvZ8/serxZcpbLlLlLZcpcpcvOcfdy9G8BQFAFCAAAqgLAFoAAAAAAUAAAoAoAAAUAAAAAABj8zUAAAAAAAKAAKAAACgAAAoAAAKAKAAFABQAFAAoDZy1dffyFlpcMz+GQlpdHTtwYZfVma4djfxy0sti45lxufqFBny19ndxRlKLLSy0st52nfq68wAoCgChAAAVQFgC0AAAAAAKAAAUAUAAAKAAAAAAGPzNQAAAAAAAFAAFAAABQAAAUAAAFAFAACgAoACgAUN7Zo9D0+fLZciy2XKWxZcuJx9Olp2Aeu7vIjJbLYywTPzfF3AU28tXo+nzJclsWWy5S0ylvG5enQ1bQAFAUAUIAACqAsAWgAAAAABQAACgCgAABQAAAAAGPzNQAAAAAAAAoAAoAAAKAAACgAAAoAoAAUAFAAUACt7Zo9B1cEuRZbLlFlq5S3icXRpadgA9D18G3s1y5S2WmXmuDrxzIbeer0fT5y2LLlLYq5S2W8bl6dHRsUAAoCgChAAAVQFgC0AAAAAAKAAAUAUAAAKAAAAAGPzNQAAAAAAAAFAAFAAABQAAAUAAAFAFAACgAoACgA2c9fW6OUsti4pl8TILZbpaNmDDIAdfo5c2eJZathzefdgxy+Zc+WHY3ca2Ktiy0stW87Rt1tWYUAAoCgChAAAVQFgC0AAAAAAKAAAUAUAAAKAAAAAx+ZqAAAAAAAAAFAAFAAABQAAAUAAAFAFAACgAoACgHS3c/qu/zZbLlLl5ng7uZz7wAtAA9X6Hm727XLlLYy+blLl57z+nm8+ze2aPXdvly2XKXKXKWxl83KXLgcPTzObaAoABQFAFCAAAqgLAFoAAAAAAUAAAoAoAAAUAAAAMfmagAAAAAAAAAKAAKAAACgAAAoAAAKAKAAFABQAFBs56+t080VbF5nPv1deYAC3Yy19bo5lolpZatirebzbNbVlnzw7G/klyKqWxZaXkcm/4gFAUAAoCgChAAAVQFgC0AAAAAAKAAAUAUAAAKAAAAx+ZqAAAAAAAAAAFAAFAAABQAAAUAAAFAFAACgAoACm3s1dnq5VsWW8jl6NTVsAAGzsw7fTxrZaZS2WxVst5fJt1NOWxnr7vTxy5RVstirZbw+Lox4qAoCgAFAUAUIAACqAsAWgAAAAABQAACgCgAABQAAAx+ZqAAAAAAAAAAAoAAoAAAKAAACgAAAoAoAAUAFAAdDdp9J3cMuUtly8/wdXP0bQABu7dXpu/hiy5S2XKW4MM/MeX1KA3Nmr0/dwS2MpbLlzdG7h8XQqKCUBQFAAKAoAoQAAFUBYAtAAAAAACgAAFAFAAACgAAMfmagAAAAAAAAAABQABQAAAUAAAFAAABQBQAAoAKAGXLHa2YBRdXXnjxoAAyWbW3WFoiq+ZdTTmFD7uO3s1qKqLjxy19eQVFBKAoCgAFAUAUIAACqAsAWgAAAAABQAACgCgAABQAAx+ZqAAAAAAAAAAAAoAAoAAAKAAACgAAAoAoAAUAFAAUACgAAAFoAAAUAAoCgCooJQFAUAAoCgChAAAVQFgC0AAAAAAKAAAUAUAAAKAAx+ZqAAAAAAAAAAAAFAAFAAABQAAAUAAAFAFAACgAoACgAUAAAAtAAACgAFAUAVFBKAoCgAFAUAUIAACqAsAWgAAAAABQAACgCgAABQAx+ZqAAAAAAAAAAAAAoAAoAAAKAAACgAAAoAoAAUAFAAUACgAAAFoAAAUAAoCgCooJQFAUAAoCgChAAAVQFgC0AAAAAAKAAAUAUAAAKAx+ZqAAAAAAAAAAAAAFAAFAAABQAAAUAAAFAFAACgAoACgAUAAAAtAAACgAFAUAVFBKAoCgAFAUAUIAACqAsAWgAAAAABQAACgCgAABQx+ZqAAAAAAAAAAAAAAoAAoAAAKAAACgAAAoAoAAUAFAAUACgAAAFoAAAUAAoCgCooJQFAUAAoCgChAAAVQFgC0AAAAAAKAAAUAUAAAKx+ZqAAAAAAAAAAAAAAFAAFAAABQAAAUAAAFAFAACgAoACgAUAAAAtAAACgAFAUAVFBKAoCgAFAUAUIAACqAsAWgAAAAABQAACgCgAADH5uoAAAAAAAAAAAAAACgACgAAAoAAAKAAACgCgABQAUABQAKAAAAWgAABQACgKAKiglAUBQACgKAKEAABVAWALQAAAAAAoAABQBQAAMfm6gAAAAAAAAAAAAAABQABQAAAUAAAFAAABQBQAAoAKAAoAFAAAALQAAAoABQFAFRQSgKAoABQFAFCAAAqgLAFoAAAAAAUAAAoAoAAx+bqAAAAAAAAAAAAAAAAoAAoAAAKAAACgAAAoAoAAUAFAAUACgAAAFoAAAUAAoCgCooJQFAUAAoCgChAAAVQFgC0AAAAAAKAAAUAUADH5uoAAAAAAAAAAAAAAAAUAAUAAAFAAABQAAAUAUAAKACgAKABQAAAC0AAAKAAUBQBUUEoCgKAAUBQBQgAAKoCwBaAAAAAAFAAAKAKAMfm6gAAAAAAAAAAAAAAAAKAAKAAACgAAAoAAAKAKAAFABQAFAAoAAABaAAAFAAKAoAqKCUBQFAAKAoAoQAAFUBYAtAAAAAACgAAFAFAx+bqAAAAAAAAAAAAAAAAAFAAFAAABQAAAUAAAFAFAACgAoACgAUAAAAtAAACgAFAUAVFBKAoCgAFAUAUIAACqAsAWgAAAAABQAACgCjH5uoAAAAAAAAAAAAAAAAACgACgAAAoAAAKAAACgCgABQAUABQAKAAAAWgAABQACgKAKiglAUBQACgKAKEAABVAWALQAAAAAAoAABQBf/EACgQAAIBBAEEAgIDAQEAAAAAAAAEAwIFFRYBERIUIBNwEDUGIbAwNP/aAAgBAQABCAD/ABKVlpW5uIoMBcTAXEwNxMDcTBXAwVwMHcDBvmEfGFpVZfjm9ILQ61DTLDgriYK4GDuBg3zCPmEfGFpVJOycggkZmpihwFxMDcTA3EwVwMFcBm2tJx8Vz/SFhlohulFcuRTMimZFMyChkFDIKGQUPPVPPVL5LRM/3R+lldWitMNEmQUMgoZBQyCh56p56pfZaJn+KoizSURXaCuTIpmRTMioZBQyChf2oJ0aKYvpC1J0PPUwyawoawoayqayqa0qa2qa2qa4qa6qXNShJv4oy2K0OvxwSawoawoayoayqa0qa2qa4qa4sa6sXROhJriKMtq1Dj8UEmsKGsqGsqmtKmtqmtqmuKmuqjMfELUsdP0bbXPAcpnNpNpNoNoNnNnNmNmNlLg55zPy/i3teE7HObSbSbQbObObMbKbKbIXB3zmOJfwgz4Tsc5tJtBtBs5sxsxspshPXzMxJL9Hfx79tQdODpwdODpwfyH9n72H9zAdODpwdODpwdODpwXHjjHMetk/cQHTg6cHTg6cHTg6cHTg6cHTgv8A/wC+jp9GW+GdhumhbE3YxN2MVdjFXUksL01XdLrjRrrRrzJrzI2pWnN8UhHJXFXxXHkHDE3YxV2MVdTF3Uxd0GLdcY15K5fRGKWZyOODE3YxN2MVdjFXUxd1MXdDGXQxl0MZcy4QTwT8Us/RlnZiUuFMs2et5nUDOoGcQM4gZtAzaJmkTNIl2Yjac74fznUDOoGcQM4gZtAcu6cqc1FHpa541rjFLLnUDOoGdQM4gZxAzaJmkTNImZSLwzE03TXD9GWdaJq4UxTYK3mDQMGgYRAwiBhUDComGRMMiXZeJZzsh9LXalGbdFLNhEDCIGFRMKiYZEYo4jZlop/FrhjZuMUUuCQMGgYNAwiBhEDComFRMMiYdIu60SrVNEP0Zb5pl26a1stdjK3Uyt1MpdCS+uxVdsuwtGwsmwMmfZG2q3Jvlk9EX34E6KIMpdDKXQyl0MnczJ3MkVallrr5kiriq7ZBKWWFuiuDK3Uyt1MpdTKXQyl0MpdDJ3MydzMlch+eeefipj6MsH7Wg7uDu4O7g68F/wD2P/Ky88YiE7uDu4O7g68HXg68F9/t/j8WX9tAd3B3cHdwd3B3cHdwdeDrwdeC/f29R9G29Tzm6YTWjWjWzWy4J+Cz8Xuir5rlEBrPBrJrZrhrhrprxrxr4+p4U/Ef4SW8tuOE1o1o1w1w10101414mo5hnkj+jrY1Qk7TNJsaxsaxsSxsKxc26HW/lj9rczSo9HNXsaxsaxsSxsKxsKxsCxn1zPrmeXLk3Q4zxJGW9ilR6OavY1jY1jYljYVjYFjYFzPrmfXGJOJWJZKfo2yx0S3KimTwVTwVTwVTwVS9RURP9sftZ6KJbpDRJ4Kp4Kp4Kp4Kp4Sp4Sw6ovQlNVT6WmimS5w0V+CqeCqeCqeCqeEqXteGJOiqP6QXYkVl4khzT5mnzMvGZeJ2JWZO+b2gnkWmplizT5mnzMvGZeMw8Zh0rujctFVFfpDNWvLTLFmnzNPmZeMy8Zh4nfYao4om/wAS3//EADMQAAEDBAAFAgMHBQEBAAAAAAEAAgMEEaLREpGSk+EQICFRcBMiMUFScbFTYoGwsjBh/9oACAEBAAk/AP8ASUt4nn8rgKnzbtU+bdqnzbtU+bdqnzbtU+bdqnzbtQZt2oM27TeF1r2uD7YeJjvwPE3ap827VPm3ap827UGbdqDNu1Bm3aZwute1wfRvE934BU+bdqnzbtU+bdqnzbtU+bdqLgaTa/ED9EXtY2x+LlVQ9YVVD1hVUPWFVQ9YVTD1hVMPWFUw9YVTD1hVMPWE9r28AF2+2eJrhxXBcP1FVUPWFUw9YVTD1hVMPWFUw9YVTF1hPa8cAF2m/wA/Rwa0E3J/Yqqh6wqqHrCqoesKph6wqmHrCmY8iQGzXX/I/REuDSCbtUs3MaUs3MaUs3MaUs3MaUk3MaUk3MaUk3MaUkvMaUkvMIuI4Qfj6Ehr73t/8BKlm5jSlm5jSkm5jSkm5jSkm5jSkm5jSkm5jSkl5jSkl5jSLiC0H73oSGvveylm5jSlm5jSkm5jSkm5jSkm5jSkm5jSkl5hSS8wr2Y8tH+D9DmcdgRa9lR5+FR5+FR5+FSZ+FSZ+FS5+FS5+FS5+FS5+Ezg+AFr39GcfBf7t7XuCFR5+FR5+FR5+FSZ+FSZ+FSZ+FSZ+FS5+FS5+Ezgs3hte/ozj4L/AHb2VHn4VHn4VJn4VJn4VJn4VJn4VJn4VLn4Tbcbi63yufod+lyAQQCAX6B7/wC7/koIIIIIL+m72/M/wUEEEAgPQIIL+mP5P0Nk+zksbOuQq8916rz3XKuPdcq491ynY93zc4lSQ8zpSRczpSRczpSRczpFpda/w9HuY4fg5psVVz9wqvPdcq491yrj3XKuPdcq491yqy5jWkuH2jjce1/BIb2de1lXHuvVee65Vx7rlXHuuVce65Vp7rlWnuuVae65Vp7rlL9o8tuDxE/C5+f0NdwsAKnwdpT4O0p8HaU+DtKfB2lPg7SmwdpTYOU2BTuJvCB7J8HaU+DtKfB2lPg7SnwdpS3c5hAHCfabMbe5/wAFT4O0p8HaU+DtKfB2lPg7SnwdpTYOU2DlNgU7iaGAfL8z9DW8TCCoM3bUGbtqDN21Bm7agzdtQ5u2oc3bUOblDmdpvC3hB9sXE917niPzKgzdtQZu2oM3bUObtqHM7Qs1ryBz9RxMde/JQZu2oM3bUGbtqDN21Bm7agzdtQ5u2ocyocym8LSwE8z9DY/tJLGzbEqhPacqE9pyoj2nKiPacoGMd8nNIUcXI7UcXI7UcXI7TIuR2g0G1vh7aUvjF7O4HH81RHtOVEe05UR7TlRHtOVGe05U0t3Ek2YUxzD8nC3ozjkF7Nte6oT2nKhPacqI9pyoj2nKiPacqI9pyoj2nKjPacqM9tyj+zfw2tYj4fQ39LkUUUV+gf8Al/d/0UUUUUfT9A/k+nzP8FFFFFFFFFFf0x/J+hr+C4Jva6q8PKq8PKqsPKqsPKfx/AG9re9/Bx3+Nr2sLqqw8qqw8qqw8qqw8qqw8qqw8qqw8qqw8qpw8p/Hdt72t6P4OP8ANVeHlVeHlVWHlVWHlVWHlVWHlVWHlVWHlOvwOLb/ADt9DgS0Aj4KOXkNqOXkNqOXkNqOXkNoOA4QPj7wS1t72/YhRy8htRy8htRy8htRy8htRyqOVRy8go5UyRBwHCB8fQEtbe9lHLyCjl5Dajl5BRy8go5eQUcqjl5DajlX4PeXDn9DmNe2x+BVND0BU0XQFTRdAVPF0BMaxvAPgB72hzTe4P7FU0PQFTRdAVPF0BU8XQFTxdAVPF0BQxghhsQ0e1oc03uD+xVND0BU8XQFTxdAVPF0BU8XQFExh4wLtbb8j9EXcLx+drqfBulPg3SnwbpT4N0ncTrWva3vdwvb+BU+DdKfBulPg3SnwbpT4N0p8G6U12uFiOEe13C9v4FT4N0p8G6U+DdKfBulPg3Sk4mg3tYD/SXf/8QAJBEAAgICAgEFAQEBAAAAAAAAAAIBEwMUERIgBBAhMnAwMbD/2gAIAQIBAQgA/wCJTETPxFbFTFTlTlTlLlLlLlLjLKzxPhCNMcxWxU5U5U5U5S4yys8SR8nRjoxWxWxWxKTHzP4hjnhjsp3U7qd1O6ndTup3U7qZ5iX+PDG0Qp2U7qd1O6ndTupnmJb4E/07QdoO0HaDsplmJX8RRe08FKlClClCmuprqa6msprKZUhG4gSO08FMFMFKlMFClClCmuprqZUhJ4gWOZ4KoKoKoKYKVKVKFKFGjiZj8ORus8l5ebBsGwbJsmybRkfu3PsrdZ5Li4vLy82DYNk2TI/eefZZ4nktLi4uLy8vNgmeZ5/DsP28c/388X2jzf6T44/t/L1H2/DUiZniK8hVkKshVlKHn/dZjWc1XNVx0lJ4kieDuxXkK8hVkKshVlGx5IiZnwXmZ+OjlbleQryFeQryFWQqyFWUyKyzw34ZiaFbmbkLkLkL0L8ZfjL8ZsYzYxmd4d+V97kLkLkLkL0HzJKzEeCTENzNqFqFqFyFyFyFyFyF6Gd4ZuY/DMSwzcTShQhQhQhRjNfGa+M18Zr4zOkI/EeGLErLEzShQhQhRjNfGNHDTHukctxNSFSFKFKFKFCFCFCFGMzpCNxH4ZjmYnmLcpblLcpblJ9Q8f7tObTm25tuZMkvPM+CO8LxFuUtyluUtyl2UlHmeSYmPiRJmJ+LMhZkLMhZkLchblLcpblLcplZmnlvwzB9/H1P3/lg+kefqvv7YvvH8vVff8Nxp3bg1TVNU1TKnRuPNF7NwaxrGqapqmoahqGmZsdbceyL2ng1zXNY1jWNU1TUGjrMx+HYnhG5nZU2kNpDaQzPDtzHljbq0TOypsqbKGyhtIbSG2htobaGfJGRuYEbq3M7CmwpsKbKmypsobSG0g88tM/h2CIl+JrQrQrQqQ9SsQ/EeWGIl4ia0K0K0K0KkKkMmNISZ8cUcvBWpWpWpWhWh6lFVPj8QVpWeYvyGxkNjIbGQZ5eeW8laVnmL8hfkL8hsZDYyGxkJz5JjifBZlZ5i9y/IX5C/IX5BsrvHDf8S3//xAAdEQEBAAICAwEAAAAAAAAAAAABAAIgMHAQgLAR/9oACAECAQk/APiVERERERuRERHAdJszMzMzuzMzOjMzPqERERERGhEREREaEREREen7M2U6OjMzMzszMzMzZT0czMzMzOrMzM7MzMzMz0eRERERG5ERGpEREREdHljY2MRERsWNjY2NjDoRERY2NjYx+enrMzwszMzM2U+WZmZmekSI4zwRERxEdIERHCREREbERER0kzM8LMzMzszMzPxLv//EACYRAAICAgEEAgIDAQAAAAAAAAACAQMTFBEEEBIgM3AxMhUhMLD/2gAIAQMBAQgA/wCJS9i1x5Nu0G5SbdJt0m1UbVRs1GzUbFYrw0cx6P1NaT4tt0m3SbVRs1GzUbFYjw8cqO6ovk27QbtBuUm3SbdIlyWTwv0h1iy1UxGCwwWGGww2GFzE5FTmJyKnOniYTifTqana2ZjDYYbDC5FTmJyKnOmiYTiTqllqWiMFpgsIosMNhhsOjrZXmZ+kOotmpPKN+w3rDesN1zcc3HNtzac2XKnl15kvsmuuXjfsN+w3rDdc3HNxzbc2nNpyl5deZL7Jrrlo37DfsN6w3rDdc3HNtzbcSeVifo6+rKniaBoGiaRpGmaZqGqVp4Rx2uryJKH8eaBomiaRpmmahqlaeEcdrq8iSh/HmgaBomkaRpmoLHjER9HdZ8U9o79J8fv1fwyQR61fvHr1fwsQR/h036/RtzKqcvnoM9BnoM1IvU1x+NpDZU2FM6iNDRzBMQ0cThrM9BnoM1JmpMtItlczER6WsqpMtsdOZ6DPQZ6DNSZqTNSZajLUVsrRyv0Z1CS9fiuraatprWGtYa9hgsMDmFzC5UsqvE99W01rTWsNew17BKXhomfS9JeuVXUtNW01bTWsNaw17DA5gcwuUrKrxP0Z1Dyicrs2mzabFhsWGewzuZnMzmVyuZleZ9LrnV5iNiwz2GewzOZnF/Ed72lK5mNq02bTZtNiwz2GewzOZnMzlTS0cz9GWqrLw2CkwUmGkw1EdOk/jXUwKYFMKir4xx62VVs0y2Gow1GKoxVmOshliOCJ57WKrJMNgoMFJgpMNJhqMVRirMdZjrEiIj+vozqvjkiDgiO3T/p/lf8AJPaIIjtEdqv17dR8UkQcER2iCIIgiO1X6/Rtr+C+Rtm0bJslb+cc+9j+CyxuG2bRsmwZzOZjKK3MdrH8FljbNs2jZNg2DOZiJ5j6OtSXXiNVjWY1mNditZVeJ9rUl0lY1HNVjWY12MDGBjDJikxSJHEdrUl0lY1HNVjWY1mNdjAxhYwyRHEfR18zCf1kc83IdjzYpmZX3umYSeMjmRyHY82PNiGYRp59bpmEnjI5kch2PNiHYpmZn6RZYaOJwVmFDChiQhYX+o9mWGjicFZgrMKGFDEhjUhFj1ZYaOJwVmCswoYUMSCoq/j/AIlv/8QAIxEBAQEAAgEDBQEBAAAAAAAAAQACIKFwETCxECExgLBBkf/aAAgBAwEJPwD+JT+LXTa+Z+ZmZmeT95+ZmZn6/i102um18z8zPhEstlstlssMRHIstlhhiOGWy2Wy2WP88JBBBBBERxCCCCCIjiEEEEEER4PfS11atWrVqZnhrq1atWrVqZ4a6tdWrVq1an9Pj1LHRZ6LPRZ6I9jJ/wAs9Fnos9Fnos9WeJ6ljosdFnos9Fnos9WerNmPBxEREREcSIiI5ERERER4PZmZmZnkzMzPFmZmZmfBz6Frstdlru1PtP3tWrUzP1fQtdlrstd2rVqZn9PsxEezmIiIiI4ZsxEREeEH3H3GfCzMz7LMzM82ZmfCZER7JEREcyIiP4l//9k="}}]);