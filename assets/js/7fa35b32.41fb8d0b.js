"use strict";(self.webpackChunk_notifiles_documentation=self.webpackChunk_notifiles_documentation||[]).push([[8862],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const o={sidebar_position:0},i="Create a components library",l={unversionedId:"guides/libraries/usage",id:"version-1.0/guides/libraries/usage",title:"Create a components library",description:"We will put our components in a folder and return the appropriate input by calling the default function in `\xecndex.js``.",source:"@site/versioned_docs/version-1.0/guides/libraries/usage.mdx",sourceDirName:"guides/libraries",slug:"/guides/libraries/usage",permalink:"/documentation/docs/guides/libraries/usage",draft:!1,editUrl:"https://github.com/notifiles/generator-notifiles/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/guides/libraries/usage.mdx",tags:[],version:"1.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Libraries",permalink:"/documentation/docs/category/libraries"},next:{title:"Use @loadable in input libraries",permalink:"/documentation/docs/guides/libraries/loadable"}},s={},u=[{value:"index.js",id:"indexjs",level:3},{value:"Create input components",id:"create-input-components",level:3}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"create-a-components-library"},"Create a components library"),(0,a.yg)("p",null,"We will put our components in a folder and return the appropriate input by calling the default function in ``\xecndex.js",(0,a.yg)("inlineCode",{parentName:"p"},".\nFor example we will name our folder "),"components/notifiles-library```."),(0,a.yg)("h3",{id:"indexjs"},"index.js"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import input from './input'\nimport inputPassword from './inputPassword'\nimport submit from './submit'\n\nexport default (props) => {\n    const { type } = props\n    switch (type) {\n        case 'input':\n            return input                \n        case 'inputPassword':\n            return inputPassword                \n        case 'submit':\n            return submit                \n        default:\n            return null;\n    }\n}\n")),(0,a.yg)("h3",{id:"create-input-components"},"Create input components"),(0,a.yg)("p",null,"An input component is standardized, it follows the input interface api](/documentation/docs/reference/input)"),(0,a.yg)("p",null,"Text input: *",(0,a.yg)("em",{parentName:"p"},"/input/index.js")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import { useCallback, useEffect, useState, } from 'react'\nimport TextField from '@mui/material/TextField'\nimport { useDebouncedCallback } from 'use-debounce'\n\nexport default (props) => {\n  const {\n    value,\n    error,\n    disabled,\n    onValueChanged,\n    item: {\n      layoutMode = 'form',\n      label,\n      params = {},\n      id }\n  } = props\n\n  const {\n    placeholder,\n    inputDelay = 1000,\n    className = '',\n    multiline = true,\n    inputPropsStyle = {},\n    inputLabelPropsStyle = {},\n    variant = \"outlined\" } = params\n\n  const [innerValue, setInnerValue] = useState(value ? value : '')\n\n  useEffect(() => {\n    setInnerValue(value ? value : '')\n  }, [value])\n\n  const debouncedHandleOnChange = useDebouncedCallback(\n    (event) => {\n      const value = event.target.value\n      onValueChanged(value)\n      console.log('textArea debouncedHandleOnChange', value)\n    },\n    inputDelay\n  )\n\n  const handleOnChange = useCallback((event) => {\n    event.persist()\n    const newValue = event.target.value\n    setInnerValue(newValue)\n    debouncedHandleOnChange(event)\n    console.log('textArea handleOnChange', value)\n  }, [])\n\n  const layoutModeProps = () => {\n    switch (layoutMode) {\n      default:\n      case 'form': {\n        return {\n\n        }\n      }\n      case 'inline': {\n        return {\n          variant: \"standard\",\n        }\n      }\n    }\n  }\n\n  const layoutModeClassName = () => {\n    switch (layoutMode) {\n      default:\n      case 'form': {\n        return `\n          `\n      }\n      case 'inline': {\n        return `                    \n            `\n      }\n    }\n  }\n\n  const onBlur = () => {\n    console.log('onblur')\n  }\n\n  return <TextField\n    variant={variant}\n    fullWidth\n    disabled={props.disabled}\n    inputProps={{\n      style: {\n        ...inputPropsStyle,\n      }\n    }}\n    InputLabelProps={{ style: inputLabelPropsStyle }}\n    value={innerValue}\n    multiline={multiline}\n    className={`transition-all ease-in-out duration-1000 ${error ? 'bg-red-50' : ''}\n    ${className}    \n    ${layoutModeClassName()}`}\n    onBlur={onBlur}\n    onChange={handleOnChange}\n    {...layoutModeProps()}\n    {...params}\n  />\n}\n")))}d.isMDXComponent=!0}}]);