"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4017],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(2962),a=n(2742),l=(n(9496),n(9613)),i=["components"],o={id:"recursive",title:"pnpm -r, --recursive"},p=void 0,s={unversionedId:"cli/recursive",id:"version-7.x/cli/recursive",title:"pnpm -r, --recursive",description:"Aliases: m, multi, recursive,  -r",source:"@site/versioned_docs/version-7.x/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/pnpm/cli/recursive",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/recursive.md",tags:[],version:"7.x",frontMatter:{id:"recursive",title:"pnpm -r, --recursive"},sidebar:"version-7.x/docs",previous:{title:"pnpm pack",permalink:"/pnpm/cli/pack"},next:{title:"pnpm server",permalink:"/pnpm/cli/server"}},u={},c=[{value:"Options",id:"options",level:2},{value:"--link-workspace-packages",id:"--link-workspace-packages",level:3},{value:"--workspace-concurrency",id:"--workspace-concurrency",level:3},{value:"--no-bail",id:"--no-bail",level:3},{value:"--no-sort",id:"--no-sort",level:3},{value:"--reverse",id:"--reverse",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"multi"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"recursive"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<command> -r")),(0,l.kt)("p",null,"Runs a command in every project of a workspace, when used with the following commands:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"install")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"outdated")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"publish")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rebuild")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"remove")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unlink")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"update")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"why"))),(0,l.kt)("p",null,"Runs a command in every project of a workspace, excluding the root project,\nwhen used with the following commands:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exec")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"run")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"add"))),(0,l.kt)("p",null,"If you want the root project be included even when running scripts, set the ",(0,l.kt)("a",{parentName:"p",href:"/pnpm/npmrc#include-workspace-root"},"include-workspace-root")," setting to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"Usage example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r publish\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"true, false, deep"))),(0,l.kt)("p",null,"Link locally available packages in workspaces of a monorepo into ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),"\ninstead of re-downloading them from the registry. This emulates functionality\nsimilar to ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn workspaces"),"."),(0,l.kt)("p",null,"When this is set to deep, local packages can also be linked to subdependencies."),(0,l.kt)("p",null,"Be advised that it is encouraged instead to use ",(0,l.kt)("a",{parentName:"p",href:"/pnpm/workspaces#link-workspace-packages"},"npmrc")," for this setting, to\nenforce the same behaviour in all environments. This option exists solely so you\nmay override that if necessary."),(0,l.kt)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"4")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Number"))),(0,l.kt)("p",null,"Set the maximum number of tasks to run simultaneously. For unlimited concurrency\nuse ",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity"),"."),(0,l.kt)("p",null,"You can set the ",(0,l.kt)("inlineCode",{parentName:"p"},"workpace-concurrency")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"<= 0")," and it will use amount of cores of the host as: ",(0,l.kt)("inlineCode",{parentName:"p"},"max(1, (number of cores) - abs(workspace-concurrency))")),(0,l.kt)("h3",{id:"--no-bail"},"--","[no-]","bail"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"If true, stops when a task throws an error."),(0,l.kt)("p",null,"This config does not affect the exit code.\nEven if ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-bail")," is used, all tasks will finish but if any of the tasks fail,\nthe command will exit with a non-zero code."),(0,l.kt)("p",null,"Example (run tests in every package, continue if tests fail in one of them):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),(0,l.kt)("h3",{id:"--no-sort"},"--","[no-]","sort"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", packages are sorted topologically (dependencies before dependents).\nPass ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-sort")," to disable."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),(0,l.kt)("h3",{id:"--reverse"},"--reverse"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", the order of packages is reversed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pnpm/filtering"},"Read more about filtering.")))}k.isMDXComponent=!0}}]);