"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1828],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=i(r),f=o,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var n=r(2962),o=r(2742),a=(r(9496),r(9613)),p=["components"],c={title:"\u041f\u043b\u043e\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 node_modules \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},l=void 0,i={permalink:"/pnpm/ru/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://translate.pnpm.io/project/pnpm/ru",source:"@site/i18n/ru/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"\u041f\u043b\u043e\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 node_modules \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c",description:"\u041d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 pnpm \u0447\u0430\u0441\u0442\u043e \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u043c\u0435\u043d\u044f \u043e \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 node_modules \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u043e\u0437\u0434\u0430\u0435\u0442 pnpm. \u041f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0430 \u043d\u0435 \u043f\u043b\u043e\u0441\u043a\u0430\u044f? \u0413\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u0441\u0435 \u043f\u043e\u0434-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438?",date:"2020-05-27T00:00:00.000Z",formattedDate:"27 \u043c\u0430\u044f 2020 \u0433.",tags:[],readingTime:2.69,hasTruncateMarker:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"\u041f\u043b\u043e\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 node_modules \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"Node-Modules configuration options with pnpm",permalink:"/pnpm/ru/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},u={authorsImageUrls:[void 0]},m=[],s={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 pnpm \u0447\u0430\u0441\u0442\u043e \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u043c\u0435\u043d\u044f \u043e \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u043e\u0437\u0434\u0430\u0435\u0442 pnpm. \u041f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0430 \u043d\u0435 \u043f\u043b\u043e\u0441\u043a\u0430\u044f? \u0413\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u0441\u0435 \u043f\u043e\u0434-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438?"))}f.isMDXComponent=!0}}]);