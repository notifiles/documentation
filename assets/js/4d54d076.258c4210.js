"use strict";(self.webpackChunk_notifiles_documentation=self.webpackChunk_notifiles_documentation||[]).push([[1459],{15680:(e,t,o)=>{o.d(t,{xA:()=>d,yg:()=>m});var i=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=i.createContext({}),u=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(o),g=n,m=c["".concat(l,".").concat(g)]||c[g]||p[g]||a;return o?i.createElement(m,r(r({ref:t},d),{},{components:o})):i.createElement(m,r({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,r[1]=s;for(var u=2;u<a;u++)r[u]=o[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}g.displayName="MDXCreateElement"},48601:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=o(58168),n=(o(96540),o(15680));const a={sidebar_position:7},r="Contribution guide",s={unversionedId:"contributing",id:"contributing",title:"Contribution guide",description:"logo",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/documentation/docs/next/contributing",draft:!1,editUrl:"https://github.com/notifiles/generator-notifiles/tree/main/packages/create-docusaurus/templates/shared/docs/contributing.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Code of conduct",permalink:"/documentation/docs/next/codeofconduct"},next:{title:"License",permalink:"/documentation/docs/next/license"}},l={},u=[{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"What should I know before I get started?",id:"what-should-i-know-before-i-get-started",level:2},{value:"Documentation",id:"documentation",level:3},{value:"Resources",id:"resources",level:3},{value:"How Can I Contribute?",id:"how-can-i-contribute",level:2},{value:"Reporting Bugs",id:"reporting-bugs",level:3},{value:"Minimal, Complete and Verifiable Example (MCVE)",id:"minimal-complete-and-verifiable-example-mcve",level:4},{value:"Submitting a Pull Request (PR)",id:"submitting-a-pull-request-pr",level:3},{value:"Before",id:"before",level:4},{value:"During",id:"during",level:4},{value:"After",id:"after",level:4},{value:"Release",id:"release",level:4},{value:"Translate Notifiles",id:"translate-notifiles",level:3},{value:"How do I become a project maintainer?",id:"how-do-i-become-a-project-maintainer",level:2},{value:"What do project maintainers need to know?",id:"what-do-project-maintainers-need-to-know",level:2},{value:"Release",id:"release-1",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,i.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"contribution-guide"},"Contribution guide"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"logo",src:o(96755).A,width:"100",height:"143"})),(0,n.yg)("p",null," Contributing to Notifiles"),(0,n.yg)("p",null,"\ud83d\udc4d\ud83c\udf89 ",(0,n.yg)("strong",{parentName:"p"},"THANK YOU")," for taking the time to contribute! \ud83c\udf89\ud83d\udc4d"),(0,n.yg)("p",null,"The following is a set of guidelines for contributing to Notifiles and all projects in the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/notifiles"},"notifiles organization")," on GitHub. Although these are strongly encouraged guidelines, nothing about this project is set in stone, if you believe something here should be edited, open a pull request to start a discussion about it."),(0,n.yg)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,n.yg)("p",null,"This project and everyone participating in it is governed by the ",(0,n.yg)("a",{parentName:"p",href:"/documentation/docs/next/codeofconduct"},"Notifiles Code of Conduct"),". By participating, you are expected to uphold this code. Please report unacceptable behavior to the contact method in the ",(0,n.yg)("a",{parentName:"p",href:"/documentation/docs/next/codeofconduct"},"Code of Conduct"),"."),(0,n.yg)("h2",{id:"what-should-i-know-before-i-get-started"},"What should I know before I get started?"),(0,n.yg)("h3",{id:"documentation"},"Documentation"),(0,n.yg)("p",null,"All of the documentation for the project is housed within the ",(0,n.yg)("inlineCode",{parentName:"p"},"docs/docs")," folder. The general website is housed within the ",(0,n.yg)("inlineCode",{parentName:"p"},"docs")," folder. It is important while contributing to Notifiles to ensure that the documentation is complete, up to date, and helpful."),(0,n.yg)("h3",{id:"resources"},"Resources"),(0,n.yg)("p",null,"It is highly encouraged to read through the following resources before contributing."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://notifiles.app"},"Website"))),(0,n.yg)("h2",{id:"how-can-i-contribute"},"How Can I Contribute?"),(0,n.yg)("h3",{id:"reporting-bugs"},"Reporting Bugs"),(0,n.yg)("p",null,"When reporting bugs please fill out the issue template with as much detail as possible. If you do not fill out the issue template with enough detail for us to debug your issue, your issue is at risk for being closed."),(0,n.yg)("h4",{id:"minimal-complete-and-verifiable-example-mcve"},"Minimal, Complete and Verifiable Example (MCVE)"),(0,n.yg)("p",null,"One of the most important things when submitting an issue is to provide a ",(0,n.yg)("em",{parentName:"p"},"Minimal, Complete and Verifiable Example")," (or MCVE for short). If you are reporting a bug it is important for us to be able to test and debug your code as quickly as possible."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Minimal")," \u2013 Use as little code as possible that still produces the same problem"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Complete")," \u2013 Provide all parts needed to reproduce your problem"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Reproducible")," \u2013 Test the code to make sure it reproduces the problem")),(0,n.yg)("p",null,"Without following these steps when creating code examples it is nearly impossible for us to debug your issue. Help us by putting time and care into code examples so that we also can help you. Not following this guideline puts your issue at risk of being closed."),(0,n.yg)("h3",{id:"submitting-a-pull-request-pr"},"Submitting a Pull Request (PR)"),(0,n.yg)("p",null,"It is highly recommended (although not required) to follow the pattern below before submitting a pull request. Not every step below will be relevant to all pull requests."),(0,n.yg)("h4",{id:"before"},"Before"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Identify a need in the project")," - This can be a bug, feature request, or other change."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Create a detailed issue to gauge interest")," - Although most pull requests are merged, we don't want you to waste time creating a pull request that doesn't have the support of the community. This doesn't mean that even if the community supports an issue that the corresponding pull request will be merged, but it increases the chances with community support. ",(0,n.yg)("em",{parentName:"li"},"This step is highly encouraged for larger contributions, but not required. For smaller contributions (typos, adding tests, updating documentaion, minor code changes, etc.) it is not necessary to create a separate issue.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Read through the ",(0,n.yg)("inlineCode",{parentName:"strong"},"package.json"))," - The ",(0,n.yg)("inlineCode",{parentName:"li"},"package.json")," file in the root of the repository has a ",(0,n.yg)("strong",{parentName:"li"},"lot")," of useful information about the project. Especially read through the ",(0,n.yg)("inlineCode",{parentName:"li"},"scripts")," section, as a lot of those scripts can help speed up your development process when working in Notifiles. There are scripts for running tests, building the website, debugging code, fixing lint issues, etc.")),(0,n.yg)("h4",{id:"during"},"During"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Create a fork & branch")," - Before contributing to Notifiles you must create a fork of the ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/notifiles/notifiles"},"main repository")," and create a branch on your fork. It is highly discouraged from using a primary branch (ex. ",(0,n.yg)("inlineCode",{parentName:"li"},"main")," or ",(0,n.yg)("inlineCode",{parentName:"li"},"alpha"),") to make your changes. This is due to the fact that if you enable ",(0,n.yg)("inlineCode",{parentName:"li"},"Allow edits from maintainers")," option, maintainers might commit directly to your primary branch which could cause problems if others are using your fork in their applications."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Install dependencies")," - Run ",(0,n.yg)("inlineCode",{parentName:"li"},"npm install")," to install all the dependencies of the project."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Maintain consistency throughout")," - While working in the project, we highly encourage you to maintain the same coding style that the rest of the project uses. This means looking around at similar code and trying to adopt the same style and conventions in your code."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Run tests & linter often")," - It is highly encouraged to run ",(0,n.yg)("inlineCode",{parentName:"li"},"npm test")," & ",(0,n.yg)("inlineCode",{parentName:"li"},"npm run lint")," often to ensure you are conforming to the project guidelines. In order for a pull request to be merged all tests must pass, the linter must throw no errors, and test code coverage must not decrease."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Write tests")," - While (or better yet, before) making changes you should write tests in the test suite to ensure things work as expected.",(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Test Edge Cases")," - While writing tests try to consider edge cases that might occur and write test for those edge cases. For example, what happens if you a user passes in no arguments, or what happens if the type passed in is not the type you expect."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Code Coverage Must Not Decrease")," - Your pull request will not be merged if it decreases the code coverage for tests, so it is important to write tests to ensure any code added or modified is covered by tests."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"No Log Output")," - It is also important that your tests do not print any output to the console or logs, this includes ",(0,n.yg)("inlineCode",{parentName:"li"},"console.log"),", UncaughtPromiseExceptions, etc. All logs printed should come directly from Jest."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"One Test Must Fail Prior to Code Changes")," - At ",(0,n.yg)("em",{parentName:"li"},"least")," one test you write should fail without the code changes you have made."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Self Contained and Static")," - All tests should be self contained and should not rely on each other in order to pass. All tests must also be static and have no potential of failing based on random or outside factors."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Logic inside Jest Blocks")," - All test logic should take place within Jest blocks (ex. ",(0,n.yg)("inlineCode",{parentName:"li"},"it"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"before"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"beforeEach"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"after")," or ",(0,n.yg)("inlineCode",{parentName:"li"},"afterEach"),"). No interaction with Notifiles or outside references should take place outside of those blocks (ex. you should not create models or schemas in the global or ",(0,n.yg)("inlineCode",{parentName:"li"},"describe")," scope)."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Update documentation")," - For anything that effects users using Notifiles, documentation should be added/deleted/modified to reflect the changes you have made. It is important to ensure the documentation you write is as clear as possible, giving examples, and attempting to answer as many relevant questions as possible. For most cases JSDoc documentation should be added to the source files, and a pointer to the JSDoc documentation should be added to the relevant file in ",(0,n.yg)("inlineCode",{parentName:"li"},"docs/docs_src"),". The pointer should look like ",(0,n.yg)("inlineCode",{parentName:"li"},"dyno_jsdoc_dist/SOURCEFILEPATH|SECTIONNAME")," (for example: ",(0,n.yg)("inlineCode",{parentName:"li"},"dyno_jsdoc_dist/Model/index.js|model.name")," will point to the ",(0,n.yg)("inlineCode",{parentName:"li"},"dist/Model/index.js")," source file, and use the documentation for ",(0,n.yg)("inlineCode",{parentName:"li"},"model.name"),"). All pointers should point to the ",(0,n.yg)("inlineCode",{parentName:"li"},"dist")," folder. In certain cases where the documentation does not reference a specific property or method in the code, it is fine to just write the documentation in the ",(0,n.yg)("inlineCode",{parentName:"li"},"docs/docs_src")," folder (an example of this would be the ",(0,n.yg)("inlineCode",{parentName:"li"},"Attribute Types")," section in the Schema documentation)."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Commit small & often")," - Please commit changes often and keep commit size to a minimum. It is highly discouraged from creating one massive commit with all of your changes in it. Every commit should also aim to pass the linter and tests. Commit messages should also be detailed enough to give a good explanation of the change made. Commit messages such as ",(0,n.yg)("inlineCode",{parentName:"li"},"changes")," or ",(0,n.yg)("inlineCode",{parentName:"li"},"did stuff")," are considered ",(0,n.yg)("strong",{parentName:"li"},"poor")," commit messages.")),(0,n.yg)("h4",{id:"after"},"After"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Submit the pull request")," - When submitting the pull request it is important to fill out the complete pull request template. This ensures reviewers of your pull request can easily understand what is going on and make sure all guidelines and requirements have been met. It is also highly recommended to enable the ",(0,n.yg)("inlineCode",{parentName:"li"},"Allow edits from maintainers")," option (be aware that enabling this option means that maintainers have the right to commit to your branch at any time, ",(0,n.yg)("em",{parentName:"li"},"we do use this ability"),")."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Be prepared for questions and suggestions")," - As others review your pull request it is important to be available to answer questions and promptly respond to code suggestions. Stale pull requests run the risk of being closed, even if it's a large change or a lot of effort was put into it."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Ask others for reviews")," - If you know someone who is anticipating your work, ask them to test your branch and leave a detailed review on the pull request.")),(0,n.yg)("h4",{id:"release"},"Release"),(0,n.yg)("p",null,"Notifiles does not currently have a release schedule that we conform to. We attempt to batch work into a release every so often. If you have a need that requires us releasing a version sooner, please notify us, and we will attempt to cut a new release earlier (however this is not guaranteed, and you are still welcome to point to a branch in NPM if we are unable to release on your timeline)."),(0,n.yg)("h3",{id:"translate-notifiles"},"Translate Notifiles"),(0,n.yg)("p",null,"You can help Notifiles support more languages by translating our content into other languages. You can contribute by viewing our ",(0,n.yg)("a",{parentName:"p",href:"https://crowdin.com/project/ovidejscom"},"Crowdin project page")," and start translating today!"),(0,n.yg)("h2",{id:"how-do-i-become-a-project-maintainer"},"How do I become a project maintainer?"),(0,n.yg)("p",null,"At this time we are pretty strict in terms of who gets write/merge access to Notifiles. The following are general guidelines we look for before granting those permissions, but other factors may apply depending on the situation."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Activity")," - Likely the most important factor is we need to see you remain active on the project for an extended period of time. We want maintainers to be active and although we don't require maintainers to dedicated all their time to Notifiles, we are looking for maintainers to be active in the community."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Contributions")," - We are looking for project maintainers to be active in contributing feedback, features, bug fixes, documentation improvements, and more to the project. Short version: we want project maintainers to show that they are dedicated to improving the project.")),(0,n.yg)("p",null,"In short, some starting tips towards becoming a project maintainer include:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Submit pull requests to improve the project"),(0,n.yg)("li",{parentName:"ol"},"Answer questions in Slack or Stack Overflow"),(0,n.yg)("li",{parentName:"ol"},"Reply to issues on GitHub")),(0,n.yg)("p",null,"If you believe you have a case for becoming a project maintainer and feel as tho you meet those requirements ",(0,n.yg)("a",{parentName:"p",href:"https://charlie.fish/contact"},"contact me")," or reach out on Slack (Charlie Fish) and I'd be happy to discuss next steps with you."),(0,n.yg)("p",null,"It is also important to note that if you become a project maintainer, and become inactive on the project, your project maintainer status may be revoked."),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"what-do-project-maintainers-need-to-know"},"What do project maintainers need to know?"),(0,n.yg)("p",null,"The following section is unlikely to be useful to general contributors to Notifiles, and is reserved for project maintainers."),(0,n.yg)("h3",{id:"release-1"},"Release"),(0,n.yg)("p",null,"In order to release a version of Notifiles you can kick off this process by running ",(0,n.yg)("inlineCode",{parentName:"p"},"node publish"),". This will kick off the release process. Following the steps it guides you through should lead to a successful release. Please ",(0,n.yg)("a",{parentName:"p",href:"https://charlie.fish/contact"},"contact me")," or message me on the Notifiles Slack (Charlie Fish) if you have questions or run into any issues."),(0,n.yg)("p",null,"It is important to note that you must have write permissions to the ",(0,n.yg)("inlineCode",{parentName:"p"},"main")," branch in order for this process to be successful."))}p.isMDXComponent=!0},96755:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/icon_xs-7562b03da1d8a40ad122e31d24f1cfe1.svg"}}]);