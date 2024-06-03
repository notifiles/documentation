"use strict";(self.webpackChunk_notifiles_documentation=self.webpackChunk_notifiles_documentation||[]).push([[3637],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>f});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),i=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=i(r),g=n,f=p["".concat(c,".").concat(g)]||p[g]||m[g]||a;return r?o.createElement(f,s(s({ref:t},l),{},{components:r})):o.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:n,s[1]=u;for(var i=2;i<a;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},93795:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var o=r(58168),n=(r(96540),r(15680));const a={slug:"mdx-blog-post",title:"MDX Blog Post",authors:["aboubacar"],tags:["docusaurus"]},s=void 0,u={permalink:"/documentation/blog/mdx-blog-post",editUrl:"https://github.com/notifiles/generator-notifiles/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx",source:"@site/blog/2021-08-01-mdx-blog-post.mdx",title:"MDX Blog Post",description:"Blog posts support Docusaurus Markdown features, such as MDX.",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[{label:"docusaurus",permalink:"/documentation/blog/tags/docusaurus"}],readingTime:.175,hasTruncateMarker:!1,authors:[{name:"Aboubacar Doucoure",title:"Creator of Notifiles",url:"https://github.com/notifiles",imageURL:"https://github.com/notifiles.png",key:"aboubacar"}],frontMatter:{slug:"mdx-blog-post",title:"MDX Blog Post",authors:["aboubacar"],tags:["docusaurus"]},prevItem:{title:"Welcome",permalink:"/documentation/blog/welcome"},nextItem:{title:"Long Blog Post",permalink:"/documentation/blog/long-blog-post"}},c={authorsImageUrls:[void 0]},i=[],l={toc:i},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,o.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Blog posts support ",(0,n.yg)("a",{parentName:"p",href:"https://docusaurus.io/docs/guides/markdown-features"},"Docusaurus Markdown features"),", such as ",(0,n.yg)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Use the power of React to create interactive blog posts."),(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => alert('button clicked!')}>Click me!</button>\n")),(0,n.yg)("button",{onClick:()=>alert("button clicked!")},"Click me!")))}m.isMDXComponent=!0}}]);