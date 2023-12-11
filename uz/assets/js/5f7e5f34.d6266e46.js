"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[1186],{1109:(e,n,s)=>{s.d(n,{ZP:()=>d});var i=s(1527),t=s(6736),o=(s(959),s(8943)),r=s(4793);const a=e=>{let{ticket:n}=e;const s=`https://github.com/feature-sliced/documentation/issues/${n}`;return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:(0,r.I)({id:"shared.wip.title"})}),(0,i.jsx)("p",{children:(0,r.I)({id:"shared.wip.subtitle"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,r.I)({id:"shared.wip.var.feedback.base"}),(0,i.jsx)(o.Z,{to:s,children:(0,r.I)({id:"shared.wip.var.feedback.link"})})]}),(0,i.jsxs)("li",{children:[(0,r.I)({id:"shared.wip.var.material.base"}),(0,i.jsx)(o.Z,{to:"https://t.me/feature_sliced",children:(0,r.I)({id:"shared.wip.var.material.link"})})]}),(0,i.jsxs)("li",{children:[(0,r.I)({id:"shared.wip.var.contribute.base"}),(0,i.jsx)(o.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md",children:(0,r.I)({id:"shared.wip.var.contribute.link"})})]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:(0,i.jsx)("i",{children:"\ud83c\udf70 Stay tuned!"})})]})};function c(e){const n=Object.assign({admonition:"admonition"},(0,t.ah)(),e.components);return(0,i.jsx)(n.admonition,{title:"WIP",type:"caution",children:(0,i.jsx)(a,{ticket:e.ticket})})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},6448:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=s(1527),t=s(6736),o=s(1109);const r={sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},a="Desegemented",c={id:"guides/issues/desegmented",title:"Desegemented",description:"Situation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/issues/desegmented.mdx",sourceDirName:"guides/issues",slug:"/guides/issues/desegmented",permalink:"/uz/docs/guides/issues/desegmented",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/issues/desegmented.mdx",tags:[],version:"current",lastUpdatedAt:1702335040,formattedLastUpdatedAt:"11-dek, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"Usage with NextJS",permalink:"/uz/docs/guides/tech/with-nextjs"},next:{title:"Routing",permalink:"/uz/docs/guides/issues/routes"}},d={},l=[{value:"Situation",id:"situation",level:2},{value:"Problem",id:"problem",level:2},{value:"If you ignore it",id:"if-you-ignore-it",level:2},{value:"Solution",id:"solution",level:2},{value:"See also",id:"see-also",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote",a:"a"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"desegemented",children:"Desegemented"}),"\n",(0,i.jsx)(o.ZP,{ticket:"148"}),"\n",(0,i.jsx)(n.h2,{id:"situation",children:"Situation"}),"\n",(0,i.jsx)(n.p,{children:"Very often, there is a situation on projects when modules related to a specific domain from the subject area are unnecessarily desegmented and scattered around the project"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"\u251c\u2500\u2500 components/\n|    \u251c\u2500\u2500 DeliveryCard\n|    \u251c\u2500\u2500 DeliveryChoice\n|    \u251c\u2500\u2500 RegionSelect\n|    \u251c\u2500\u2500 UserAvatar\n\u251c\u2500\u2500 actions/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 epics/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 constants/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 helpers/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 entities/\n|    \u251c\u2500\u2500 delivery/\n|    |      \u251c\u2500\u2500 getters.js\n|    |      \u251c\u2500\u2500 selectors.js\n|    \u251c\u2500\u2500 region/\n|    \u251c\u2500\u2500 user/\n"})}),"\n",(0,i.jsx)(n.h2,{id:"problem",children:"Problem"}),"\n",(0,i.jsx)(n.p,{children:"The problem manifests itself at least in violation of the principle of * * High Cohesion** and excessive stretching * * of the axis of changes**"}),"\n",(0,i.jsx)(n.h2,{id:"if-you-ignore-it",children:"If you ignore it"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If necessary, touch on the logic, for example, delivery - we will have to keep in mind that it lies in several places and touch on several places in the code-which unnecessarily stretches our * * Axis of changes**"}),"\n",(0,i.jsx)(n.li,{children:"If we need to study the logic of the user, we will have to go through the whole project to study in detail * * actions, epics, constants, entities, components** - instead of it lying in one place"}),"\n",(0,i.jsx)(n.li,{children:"Implicit connections and the uncontrollability of a growing subject area"}),"\n",(0,i.jsx)(n.li,{children:'With this approach, the eye is very often blurred and you may not notice how we "create constants for the sake of constants", creating a dump in the corresponding project directory'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(n.p,{children:"Place all modules related to a specific domain/user case - directly next to each other"}),"\n",(0,i.jsx)(n.p,{children:"So that when studying a particular module, all its components lie side by side, and are not scattered around the project"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"It also increases the discoverability and clarity of the code base and the relationships between modules"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"- \u251c\u2500\u2500 components/\n- |    \u251c\u2500\u2500 DeliveryCard\n- |    \u251c\u2500\u2500 DeliveryChoice\n- |    \u251c\u2500\u2500 RegionSelect\n- |    \u251c\u2500\u2500 UserAvatar\n- \u251c\u2500\u2500 actions/\n- |    \u251c\u2500\u2500 delivery.js\n- |    \u251c\u2500\u2500 region.js\n- |    \u251c\u2500\u2500 user.js\n- \u251c\u2500\u2500 epics/{...}\n- \u251c\u2500\u2500 constants/{...}\n- \u251c\u2500\u2500 helpers/{...}\n  \u251c\u2500\u2500 entities/\n  |    \u251c\u2500\u2500 delivery/\n+ |    |      \u251c\u2500\u2500 ui/ # ~ components/\n+ |    |      |   \u251c\u2500\u2500 card.js\n+ |    |      |   \u251c\u2500\u2500 choice.js\n+ |    |      \u251c\u2500\u2500 model/\n+ |    |      |   \u251c\u2500\u2500 actions.js\n+ |    |      |   \u251c\u2500\u2500 constants.js\n+ |    |      |   \u251c\u2500\u2500 epics.js\n+ |    |      |   \u251c\u2500\u2500 getters.js\n+ |    |      |   \u251c\u2500\u2500 selectors.js\n+ |    |      \u251c\u2500\u2500 lib/ # ~ helpers\n  |    \u251c\u2500\u2500 region/\n  |    \u251c\u2500\u2500 user/\n"})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/",children:"(Article) About Low Coupling and High Cohesion clearly"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://medium.com/german-gorelkin/low-coupling-high-cohesion-d36369fb1be9",children:"(Article) Low Coupling and High Cohesion. The Law of Demeter"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(u,e)})):u(e)}},6736:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>o});var i=s(959);const t=i.createContext({});function o(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:o(e),i.createElement(t.Provider,{value:a},n)}}}]);