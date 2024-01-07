"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[4702],{116:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var i=s(1527),r=s(6736);const l={},c="\u0418\u0437\u043e\u043b\u044f\u0446\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u0435\u0439",t={id:"reference/isolation/index",title:"\u0418\u0437\u043e\u043b\u044f\u0446\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u0435\u0439",description:"\u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u0432\u0441\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u043f\u043e \u0437\u043e\u043d\u0430\u043c \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 (layer, slice, segment)",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/reference/isolation/index.md",sourceDirName:"reference/isolation",slug:"/reference/isolation/",permalink:"/ru/docs/reference/isolation/",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/reference/isolation/index.md",tags:[],version:"current",lastUpdatedAt:1704647216,formattedLastUpdatedAt:"7 \u044f\u043d\u0432. 2024 \u0433.",frontMatter:{},sidebar:"referenceSidebar",previous:{title:"Public API",permalink:"/ru/docs/reference/public-api"},next:{title:"Low Coupling & High Cohesion",permalink:"/ru/docs/reference/isolation/coupling-cohesion"}},d={},o=[{value:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",id:"requirements",level:2},{value:"\u041f\u0440\u0430\u0432\u0438\u043b\u043e",id:"rule",level:2},{value:"\u0412\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c",id:"identifying-problems",level:2},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}];function h(n){const e=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",strong:"strong",h2:"h2",ol:"ol",em:"em",admonition:"admonition",code:"code"},(0,r.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044f-\u043c\u043e\u0434\u0443\u043b\u0435\u0439",children:"\u0418\u0437\u043e\u043b\u044f\u0446\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u0435\u0439"}),"\n",(0,i.jsx)(e.p,{children:"\u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u0432\u0441\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u043f\u043e \u0437\u043e\u043d\u0430\u043c \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 (layer, slice, segment)"}),"\n",(0,i.jsx)(e.p,{children:"\u0421\u043b\u043e\u0438, \u0432 \u0441\u0432\u043e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c, \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:'"\u0412\u043d\u0438\u0437\u0443" \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 (ui-kit, \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430), \u043a\u0430\u043a \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0435'}),"\n",(0,i.jsx)(e.li,{children:'\u0410 \u043f\u043e \u043c\u0435\u0440\u0435 \u043f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f "\u0432\u0432\u0435\u0440\u0445" \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0442\u0441\u044f \u0431\u043e\u043b\u0435\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438.'}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438 \u043a \u043a\u0430\u043a\u043e\u043c\u0443-\u043b\u0438\u0431\u043e \u0441\u043b\u0430\u0439\u0441\u0443, \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c ",(0,i.jsx)(e.a,{href:"/docs/reference/public-api",children:(0,i.jsx)(e.strong,{children:"\u043e\u0431\u044f\u0437\u0430\u043d \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"})}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"requirements",children:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"}),"\n",(0,i.jsx)(e.p,{children:"\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f \u0441 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0440\u044f\u0434\u0430 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0421\u043b\u0430\u0431\u043e\u0435 \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u0438\u0435"})," \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.em,{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u043e\u0434\u0443\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043b\u0430\u0431\u043e \u0438 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e \u0432\u043b\u0438\u044f\u0442\u044c \u043d\u0430 \u0434\u0440\u0443\u0433\u0438\u0435"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0412\u044b\u0441\u043e\u043a\u0430\u044f \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c"}),' - \u043e\u0431\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u0438 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f "\u0441\u0444\u043e\u043a\u0443\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u044b" \u043d\u0430 \u043e\u0434\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0435',"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.em,{children:'\u0415\u0441\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c \u0438\u043c\u0435\u0435\u0442 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0435\u0439 (\u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442 "\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e") - \u044d\u0442\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u043c\u0435\u0447\u0435\u043d\u043e \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u043d\u044c\u0448\u0435'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0446\u0438\u043a\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"})," \u043d\u0430 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.em,{children:"\u0427\u0430\u0441\u0442\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u044f\u0442 \u043a \u043d\u0435\u043e\u0436\u0438\u0434\u0430\u043d\u043d\u043e\u043c\u0443, \u043d\u0435\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u043c\u0443 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044e, \u043b\u0443\u0447\u0448\u0435 \u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044c \u0438\u0445 \u0441\u043e\u0432\u0441\u0435\u043c"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"rule",children:"\u041f\u0440\u0430\u0432\u0438\u043b\u043e"}),"\n",(0,i.jsx)(e.p,{children:"\u0414\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u044d\u0442\u0438\u0445 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439, \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c \u0431\u0430\u0437\u043e\u0432\u043e\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e:"}),"\n",(0,i.jsx)(e.admonition,{title:"\u0412\u0430\u0436\u043d\u043e",type:"info",children:(0,i.jsx)(e.p,{children:'\u041c\u043e\u0434\u0443\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442 "\u043d\u0438\u0436\u0435\u043b\u0435\u0436\u0430\u0449\u0438\u0445" \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043d\u043e \u043d\u0435 \u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0441 \u0442\u043e\u0433\u043e \u0436\u0435 \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u0441\u043b\u043e\u044f'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"features/auth"})," ",(0,i.jsx)(e.strong,{children:"\u043d\u0435 \u043c\u043e\u0436\u0435\u0442"})," \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 ",(0,i.jsx)(e.code,{children:"features/filters"})," ",(0,i.jsx)(e.strong,{children:"\u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"features/auth"})," ",(0,i.jsx)(e.strong,{children:"\u043c\u043e\u0436\u0435\u0442"})," \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 ",(0,i.jsx)(e.code,{children:"shared/ui/button"}),", ",(0,i.jsx)(e.strong,{children:"\u043d\u043e \u043d\u0435 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u0421\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u0442\u043e\u043c\u0443 \u043f\u0440\u0430\u0432\u0438\u043b\u0443 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 ",(0,i.jsx)(e.strong,{children:'"\u043e\u0434\u043d\u043e\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438"'})," - \u0447\u0442\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 ",(0,i.jsx)(e.strong,{children:"\u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0446\u0438\u043a\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0438\u043c\u043f\u043e\u0440\u0442\u044b"})," \u0438 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e ",(0,i.jsx)(e.strong,{children:"\u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"})," \u043c\u0435\u0436\u0434\u0443 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438."]}),"\n",(0,i.jsx)(e.h2,{id:"identifying-problems",children:"\u0412\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c"}),"\n",(0,i.jsx)(e.p,{children:"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0438\u0433\u043d\u0430\u043b\u043e\u043c \u043f\u0440\u043e\u0431\u043b\u0435\u043c:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\u041c\u043e\u0434\u0443\u043b\u044c \u0438\u043c\u0435\u0435\u0442 ",(0,i.jsx)(e.strong,{children:"\u0438\u043c\u043f\u043e\u0440\u0442 \u0438\u0437 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f"})," \u0441\u043e \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u043b\u043e\u044f","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043c\u043e\u0434\u0443\u043b\u044c \u0431\u044b\u043b ",(0,i.jsx)(e.strong,{children:"\u0438\u0437\u043b\u0438\u0448\u043d\u0435 \u0440\u0430\u0437\u0434\u0440\u043e\u0431\u043b\u0435\u043d"})," \u0438\u043b\u0438 \u0438\u043c\u0435\u0435\u0442 ",(0,i.jsx)(e.strong,{children:"\u043b\u0438\u0448\u043d\u044e\u044e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c."})]}),"\n",(0,i.jsxs)(e.li,{children:["\u0421\u043b\u0435\u0434\u0443\u0435\u0442 ",(0,i.jsx)(e.strong,{children:"\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c"})," \u0435\u0433\u043e \u0441 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u043c \u043c\u043e\u0434\u0443\u043b\u0435\u043c \u0438\u043b\u0438 ",(0,i.jsx)(e.strong,{children:"\u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u0435\u0433\u043e (\u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0438\u043b\u0438 \u0446\u0435\u043b\u0438\u043a\u043e\u043c) \u043d\u0430 \u0441\u043b\u043e\u0439 \u043d\u0438\u0436\u0435"})," \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u043b\u043e\u0433\u0438\u043a\u0443 \u0441\u0432\u044f\u0437\u0435\u0439 \u0432 \u043c\u043e\u0434\u0443\u043b\u0438 \u043d\u0430 \u0432\u044b\u0448\u0435\u0441\u0442\u043e\u044f\u0449\u0438\u0445 \u0441\u043b\u043e\u044f\u0445."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u041c\u043e\u0434\u0443\u043b\u044c ",(0,i.jsx)(e.strong,{children:"\u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043c\u043d\u043e\u0433\u0438\u043c\u0438 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438"})," \u0441\u043e \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u043b\u043e\u044f","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043c\u043e\u0434\u0443\u043b\u044c \u0438\u043c\u0435\u0435\u0442 ",(0,i.jsx)(e.strong,{children:"\u043b\u0438\u0448\u043d\u044e\u044e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c."})]}),"\n",(0,i.jsxs)(e.li,{children:["\u0421\u043b\u0435\u0434\u0443\u0435\u0442 ",(0,i.jsx)(e.strong,{children:"\u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u0435\u0433\u043e (\u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0438\u043b\u0438 \u0446\u0435\u043b\u0438\u043a\u043e\u043c) \u043d\u0430 \u0441\u043b\u043e\u0439 \u043d\u0438\u0436\u0435"}),", \u043b\u0438\u0431\u043e \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u043b\u043e\u0433\u0438\u043a\u0443 \u0441\u0432\u044f\u0437\u0435\u0439 \u0432 \u043c\u043e\u0434\u0443\u043b\u0438 \u043d\u0430 \u0432\u044b\u0448\u0435\u0441\u0442\u043e\u044f\u0449\u0438\u0445 \u0441\u043b\u043e\u044f\u0445."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u041c\u043e\u0434\u0443\u043b\u044c ",(0,i.jsx)(e.strong,{children:"\u0438\u043c\u0435\u0435\u0442 \u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0438\u0437 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439"})," \u0441\u043e \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u043b\u043e\u044f","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043c\u043e\u0434\u0443\u043b\u044c \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043a ",(0,i.jsx)(e.strong,{children:"\u0434\u0440\u0443\u0433\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438."})]}),"\n",(0,i.jsxs)(e.li,{children:["\u0421\u043b\u0435\u0434\u0443\u0435\u0442 ",(0,i.jsx)(e.strong,{children:"\u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u0435\u0433\u043e (\u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0438\u043b\u0438 \u0446\u0435\u043b\u0438\u043a\u043e\u043c) \u043d\u0430 \u0441\u043b\u043e\u0439 \u0432\u044b\u0448\u0435"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"see-also",children:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/docs/reference/isolation/coupling-cohesion",children:"(\u0413\u0430\u0439\u0434) \u041f\u0440\u043e \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435 \u043d\u0438\u0437\u043a\u043e\u0439 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u0438"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://github.com/feature-sliced/documentation/discussions/49",children:"(\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435) Entities \u0432 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u0438\u0445 \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://github.com/feature-sliced/documentation/discussions/65#discussioncomment-480822",children:"(\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435) \u041f\u0440\u043e cross-\u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0438 \u0430\u043d\u0430\u043b\u0438\u0437 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsxs)(e.a,{href:"https://ru.wikipedia.org/wiki/GRASP",children:["\u041f\u0430\u0442\u0442\u0435\u0440\u043d\u044b ",(0,i.jsx)(e.strong,{children:"GRASP"})]})}),"\n"]})]})}const x=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(h,n)})):h(n)}},6736:(n,e,s)=>{s.d(e,{Zo:()=>t,ah:()=>l});var i=s(959);const r=i.createContext({});function l(n){const e=i.useContext(r);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function t({components:n,children:e,disableParentContext:s}){let t;return t=s?"function"==typeof n?n({}):n||c:l(n),i.createElement(r.Provider,{value:t},e)}}}]);