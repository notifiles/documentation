"use strict";(self.webpackChunk_notifiles_documentation=self.webpackChunk_notifiles_documentation||[]).push([[3616],{80076:(e,n,a)=>{a.d(n,{A:()=>l});var t=a(96540),r=a(49489),i=a(7227),s=a(23833),o=a(68316);const l=e=>{const n=e.npm?e.npm:(0,o.A)(e.yarn,"npm"),a=e.yarn?e.yarn:(0,o.A)(e.npm,"yarn");return t.createElement(r.default,null,t.createElement(i.default,{value:"npm",label:"npm",default:!0},t.createElement(s.default,{language:"bash"},n)),t.createElement(i.default,{value:"bash",label:"yarn"},t.createElement(s.default,{language:"bash"},a)))}},32478:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=a(58168),r=(a(96540),a(15680));a(80076);const i={sidebar_position:2},s="Use @loadable in input libraries",o={unversionedId:"guides/libraries/loadable",id:"version-1.0/guides/libraries/loadable",title:"Use @loadable in input libraries",description:"",source:"@site/versioned_docs/version-1.0/guides/libraries/loadable.mdx",sourceDirName:"guides/libraries",slug:"/guides/libraries/loadable",permalink:"/documentation/docs/guides/libraries/loadable",draft:!1,editUrl:"https://github.com/notifiles/generator-notifiles/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/guides/libraries/loadable.mdx",tags:[],version:"1.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a components library",permalink:"/documentation/docs/guides/libraries/usage"},next:{title:"Samples",permalink:"/documentation/docs/guides/samples"}},l={},d=[],u={toc:d},p="wrapper";function c(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"use-loadable-in-input-libraries"},"Use @loadable in input libraries"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},"import Notifiles from '@notifiles/react'\nimport OvideLocal from 'components/shared/notifiles-library'\nimport * as Yup from 'yup'\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import loadable from '@loadable/component'\nconst keys = [        \n    'submit',    \n    'input',            \n    'textArea',\n]\n\nexport default (props) => {\n    const { type } = props\n    if (!keys.includes(type)) {\n        return null\n    }\n    try {\n        const Component = loadable(props => import(`./${type}`), {\n            cacheKey: props => type,\n        })\n        return Component\n    } catch (e) {\n        return null\n    }\n}\n\n\n\n")))}c.isMDXComponent=!0}}]);