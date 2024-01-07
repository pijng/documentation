"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[3458],{9849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(1527),i=n(6736);const o={sidebar_position:2},r="Needs driven",a={id:"about/understanding/needs-driven",title:"Needs driven",description:"\u2014 Can't you formulate the goal that the new feature will solve? Or maybe the problem is that the task itself is not formulated? **The point is also that the methodology helps to pull out the problematic definition of tasks and goals**",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/about/understanding/needs-driven.md",sourceDirName:"about/understanding",slug:"/about/understanding/needs-driven",permalink:"/docs/about/understanding/needs-driven",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/about/understanding/needs-driven.md",tags:[],version:"current",lastUpdatedAt:1704647216,formattedLastUpdatedAt:"Jan 7, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"aboutSidebar",previous:{title:"About architecture",permalink:"/docs/about/understanding/architecture"},next:{title:"Knowledge types",permalink:"/docs/about/understanding/knowledge-types"}},h={},l=[{value:"Why?",id:"why",level:2},{value:"What tasks are we talking about?",id:"what-tasks-are-we-talking-about",level:2},{value:"How does this affect development?",id:"how-does-this-affect-development",level:2},{value:"Task decomposition",id:"task-decomposition",level:3},{value:"Understanding the essence of the task",id:"understanding-the-essence-of-the-task",level:3},{value:"How to formulate it?",id:"how-to-formulate-it",level:2},{value:"And what is the benefit?",id:"and-what-is-the-benefit",level:2},{value:"1. Understanding user tasks",id:"1-understanding-user-tasks",level:3},{value:"2. Structuring and ordering",id:"2-structuring-and-ordering",level:3},{value:"3. Understanding the feature and its components",id:"3-understanding-the-feature-and-its-components",level:3},{value:"4. Profit",id:"4-profit",level:3},{value:"Back to reality",id:"back-to-reality",level:2},{value:"The role of methodology",id:"the-role-of-methodology",level:2},{value:"Methodology requirements",id:"methodology-requirements",level:3},{value:"See also",id:"see-also",level:2}];function d(e){const t=Object.assign({h1:"h1",admonition:"admonition",p:"p",em:"em",strong:"strong",h2:"h2",blockquote:"blockquote",h3:"h3",ul:"ul",li:"li",code:"code",a:"a",hr:"hr",ol:"ol"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"needs-driven",children:"Needs driven"}),"\n",(0,s.jsxs)(t.admonition,{title:"TL;DR",type:"note",children:[(0,s.jsxs)(t.p,{children:["\u2014 ",(0,s.jsxs)(t.em,{children:["Can't you formulate the goal that the new feature will solve? Or maybe the problem is that the task itself is not formulated? ",(0,s.jsx)(t.strong,{children:"The point is also that the methodology helps to pull out the problematic definition of tasks and goals"})]})]}),(0,s.jsxs)(t.p,{children:["\u2014 ",(0,s.jsxs)(t.em,{children:["project does not live in static - requirements and functionality are constantly changing. Over time, the code turns into mush, because at the start the project was designed only for the initial impression of wishes. ",(0,s.jsx)(t.strong,{children:"And the task of a good architecture is also to be sharpened for changing development conditions."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"why",children:"Why?"}),"\n",(0,s.jsxs)(t.p,{children:["To choose a clear name for an entity and understand its components, ",(0,s.jsx)(t.strong,{children:"you need to clearly understand what task will be solved with the help of all this code."})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"@sergeysova: During development, we try to give each entity or function a name that clearly reflects the intentions and meaning of the code being executed."})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"After all, without understanding the task, it is impossible to write the right tests that cover the most important cases, put down errors that help the user in the right places, even it is banal not to interrupt the user's flow because of fixable non-critical errors."})}),"\n",(0,s.jsx)(t.h2,{id:"what-tasks-are-we-talking-about",children:"What tasks are we talking about?"}),"\n",(0,s.jsx)(t.p,{children:"Frontend develops applications and interfaces for end users, so we solve the tasks of these consumers."}),"\n",(0,s.jsxs)(t.p,{children:["When a person comes to us, ",(0,s.jsx)(t.strong,{children:"he wants to solve some of his pain or close a need."})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"The task of managers and analysts is to formulate this need, and implement developers taking into account the features of web development (loss of communication, backend error, typo, missed the cursor or finger)."})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"This very goal, with which the user came, is the task of the developers."})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"One small solved problem is a feature in the Feature-Sliced Design methodology \u2014 you need to cut the entire scope of project tasks into small goals."})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-does-this-affect-development",children:"How does this affect development?"}),"\n",(0,s.jsx)(t.h3,{id:"task-decomposition",children:"Task decomposition"}),"\n",(0,s.jsxs)(t.p,{children:["When a developer begins to implement a task, in order to simplify the understanding and support of the code, he mentally ",(0,s.jsx)(t.strong,{children:"cuts it into stages"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["first ",(0,s.jsx)(t.em,{children:"split into top-level entities"})," and ",(0,s.jsx)(t.em,{children:"implement them"}),","]}),"\n",(0,s.jsxs)(t.li,{children:["then these entities ",(0,s.jsx)(t.em,{children:"split into smaller ones"})]}),"\n",(0,s.jsx)(t.li,{children:"and so on"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"In the process of splitting into entities, the developer is forced to give them a name that would clearly reflect his idea and help to understand what task the code solves when reading the listing"}),"\n",(0,s.jsx)(t.em,{children:"At the same time, we do not forget that we are trying to help the user reduce pain or realize needs"})]}),"\n",(0,s.jsx)(t.h3,{id:"understanding-the-essence-of-the-task",children:"Understanding the essence of the task"}),"\n",(0,s.jsxs)(t.p,{children:["But to give a clear name to an entity, ",(0,s.jsx)(t.strong,{children:"the developer must know enough about its purpose"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"how is he going to use this entity,"}),"\n",(0,s.jsx)(t.li,{children:"what part of the user's task does it implement, where else can this entity be applied,"}),"\n",(0,s.jsx)(t.li,{children:"in what other tasks can it participate,"}),"\n",(0,s.jsx)(t.li,{children:"and so on"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["It is not difficult to draw a conclusion: ",(0,s.jsx)(t.strong,{children:"while the developer will reflect on the name of entities within the framework of the methodology, he will be able to find poorly formulated tasks even before writing the code."})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"How to give a name to an entity if you do not understand well what tasks it can solve, how can you even divide a task into entities if you do not understand it well?"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-formulate-it",children:"How to formulate it?"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"To formulate a task that is solved by features, you need to understand the task itself"}),", and this is already the responsibility of the project manager and analysts."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"The methodology can only tell the developer what tasks the product manager should pay close attention to."})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:'@sergeysova: the Whole frontend is primarily a display of information, any component in the first turn, displays, and then the task "to show the user something" has no practical value.'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:'Even without taking into account the specifics of the frontend can ask, "why do I have to show you", so you can continue to ask until\'t get out of pain or the need of the consumer.'})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["As soon as we were able to get to the basic needs or pains, we can go back and figure out ",(0,s.jsx)(t.strong,{children:"how exactly your product or service can help the user with his goals"})]}),"\n",(0,s.jsx)(t.p,{children:"Any new task in your tracker is aimed at solving business problems, and the business tries to solve the user's tasks at the same time earning money on it. This means that each task has certain goals, even if they are not spelled out in the description text."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.strong,{children:"The developer must clearly understand what goal this or that task is pursuing"}),', but not every company can afford to build processes perfectly, although this is a separate conversation, nevertheless, the developer may well "ping" the right managers himself to find out this and do his part of the work effectively.']})}),"\n",(0,s.jsx)(t.h2,{id:"and-what-is-the-benefit",children:"And what is the benefit?"}),"\n",(0,s.jsx)(t.p,{children:"Now let's look at the whole process from beginning to end."}),"\n",(0,s.jsx)(t.h3,{id:"1-understanding-user-tasks",children:"1. Understanding user tasks"}),"\n",(0,s.jsx)(t.p,{children:"When a developer understands his pain and how the business closes them, he can offer solutions that are not available to the business due to the specifics of web development."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["But of course, all this can work only if the developer is not indifferent to what he is doing and for what, otherwise ",(0,s.jsx)(t.em,{children:"why then the methodology and some approaches?"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"2-structuring-and-ordering",children:"2. Structuring and ordering"}),"\n",(0,s.jsxs)(t.p,{children:["With the understanding of tasks comes ",(0,s.jsx)(t.strong,{children:"a clear structure both in the head and in the tasks along with the code"})]}),"\n",(0,s.jsx)(t.h3,{id:"3-understanding-the-feature-and-its-components",children:"3. Understanding the feature and its components"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"One feature is one useful functionality for the user"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["When several features are implemented in one feature, this is ",(0,s.jsx)(t.strong,{children:"a violation of borders"})]}),"\n",(0,s.jsxs)(t.li,{children:["The feature can be indivisible and growing - ",(0,s.jsx)(t.strong,{children:"and this is not bad"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Bad"})," - when the feature does not answer the question ",(0,s.jsx)(t.em,{children:'"What is the business value for the user?"'})]}),"\n",(0,s.jsxs)(t.li,{children:['There can be no "map-office" feature',"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["But ",(0,s.jsx)(t.code,{children:"booking-meeting-on-the-map"}),", ",(0,s.jsx)(t.code,{children:"search-for-an-employee"}),", ",(0,s.jsx)(t.code,{children:"change-of-workplace"})," - ",(0,s.jsx)(t.strong,{children:"yes"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"@sergeysova: The point is that the feature contains only code that implements the functionality itself"}),", without unnecessary details and internal solutions (ideally)*"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["Open the feature code ",(0,s.jsx)(t.strong,{children:"and see only what relates to the task"})," - no more"]})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"4-profit",children:"4. Profit"}),"\n",(0,s.jsxs)(t.p,{children:["Business very rarely turns its course radically in the other direction, which means ",(0,s.jsx)(t.strong,{children:"the reflection of business tasks in the frontend application code is a very significant profit."})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["Then you don't have to explain to each new team member what this or that code does, and in general why it was added - ",(0,s.jsx)(t.strong,{children:"everything will be explained through the business tasks that are already reflected in the code."})]})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["What is called ",(0,s.jsx)(t.a,{href:"https://thedomaindrivendesign.io/developing-the-ubiquitous-language",children:'"Business Language" in Domain Driven Development'})]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"back-to-reality",children:"Back to reality"}),"\n",(0,s.jsxs)(t.p,{children:["If business processes are understood and good names are given at the design stage - ",(0,s.jsx)(t.em,{children:"then it is not particularly problematic to transfer this understanding and logic to the code."})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"However, in practice"}),', tasks and functionality are usually developed "too" iteratively and (or) there is no time to think through the design.']}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"As a result, the feature makes sense today, and if you expand this feature in a month, you can rewrite the gender of the project."})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["[",(0,s.jsx)(t.a,{href:"https://t.me/sergeysova/318",children:"From the discussion"}),"]: The developer tries to think 2-3 steps ahead, taking into account future wishes, but here he rests on his own experience"]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Burns experience engineer usually immediately looking 10 steps ahead, and understand where one feature to divide and combine with the other"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"But sometimes that comes the task which had to face the experience, and nowhere to take the understanding of how literacy to decompose, with the least unfortunate consequences in the future"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"the-role-of-methodology",children:"The role of methodology"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"The methodology helps to solve the problems of developers, so that it is easier to solve the problems of users."})}),"\n",(0,s.jsx)(t.p,{children:"There is no solution to the problems of developers only for the sake of developers"}),"\n",(0,s.jsxs)(t.p,{children:["But in order for the developer to solve his tasks, ",(0,s.jsx)(t.strong,{children:"you need to understand the user's tasks"})," - on the contrary, it will not work"]}),"\n",(0,s.jsx)(t.h3,{id:"methodology-requirements",children:"Methodology requirements"}),"\n",(0,s.jsxs)(t.p,{children:["It becomes clear that you need to identify at least two requirements for ",(0,s.jsx)(t.strong,{children:"Feature-Sliced Design"}),":"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The methodology should tell ",(0,s.jsx)(t.strong,{children:"how to create features, processes and entities"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Which means it should clearly explain ",(0,s.jsx)(t.em,{children:"how to divide the code between them"}),", which means that the naming of these entities should also be laid down in the specification."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The methodology should help the architecture ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"architecture#adaptability",children:"easily adapt to the changing requirements of the project"})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://t.me/sergeysova/318",children:"(Post) Stimulation for a clear formulation of tasks (+ discussion)"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.strong,{children:"The current article"})," is an adaptation of this discussion, you can read the full uncut version at the link"]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://t.me/atomicdesign/18972",children:"(Discussion) How to break the functionality and what it is"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://alexmngn.medium.com/how-to-better-organize-your-react-applications-2fd3ea1920f1",children:'(Article) "How to better organize your applications"'})}),"\n"]})]})}const c=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},6736:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>o});var s=n(959);const i=s.createContext({});function o(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||r:o(e),s.createElement(i.Provider,{value:a},t)}}}]);