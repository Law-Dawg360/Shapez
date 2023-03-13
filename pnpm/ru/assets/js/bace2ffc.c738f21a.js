"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8504],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),f=p,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:p,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(2962),p=n(2742),o=(n(9496),n(9613)),i=["components"],a={id:"setup",title:"pnpm setup"},l=void 0,c={unversionedId:"cli/setup",id:"version-6.x/cli/setup",title:"pnpm setup",description:"\u042d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u043c\u0438 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f\u043c\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 pnpm. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 .",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/cli/setup.md",sourceDirName:"cli",slug:"/cli/setup",permalink:"/pnpm/ru/6.x/cli/setup",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"setup",title:"pnpm setup"},sidebar:"version-6.x/docs",previous:{title:"pnpm bin",permalink:"/pnpm/ru/6.x/cli/bin"},next:{title:"package.json",permalink:"/pnpm/ru/6.x/package_json"}},u={},s=[],m={toc:s};function f(e){var t=e.components,n=(0,p.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u042d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u043c\u0438 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f\u043c\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 pnpm. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 ",(0,o.kt)("a",{parentName:"p",href:"https://get.pnpm.io/install.sh"},"https://get.pnpm.io/install.sh"),"."),(0,o.kt)("p",null,"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0434\u043b\u044f pnpm CLI"),(0,o.kt)("li",{parentName:"ul"},"\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0432 ",(0,o.kt)("inlineCode",{parentName:"li"},"PATH")," \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 shell \u043a\u043e\u043d\u0444\u0438\u0433"),(0,o.kt)("li",{parentName:"ul"},"\u043a\u043e\u043f\u0438\u0440\u0443\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0439 \u0444\u0430\u0439\u043b pnpm \u0432 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 pnpm")))}f.isMDXComponent=!0}}]);