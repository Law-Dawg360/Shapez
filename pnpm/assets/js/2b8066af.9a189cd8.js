"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8238],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||p;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<p;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var r=t(2962),a=t(2742),p=(t(9496),t(9613)),o=["components"],c={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},l=void 0,i={unversionedId:"pnpm-workspace_yaml",id:"version-7.x/pnpm-workspace_yaml",title:"pnpm-workspace.yaml",description:"pnpm-workspace.yaml defines the root of the [workspace] and enables you to",source:"@site/versioned_docs/version-7.x/pnpm-workspace_yaml.md",sourceDirName:".",slug:"/pnpm-workspace_yaml",permalink:"/pnpm/pnpm-workspace_yaml",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/pnpm-workspace_yaml.md",tags:[],version:"7.x",frontMatter:{id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},sidebar:"version-7.x/docs",previous:{title:".npmrc",permalink:"/pnpm/npmrc"},next:{title:".pnpmfile.cjs",permalink:"/pnpm/pnpmfile"}},s={},m=[],u={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," defines the root of the ",(0,p.kt)("a",{parentName:"p",href:"/pnpm/workspaces"},"workspace")," and enables you to\ninclude / exclude directories from the workspace. By default, all packages of\nall subdirectories are included."),(0,p.kt)("p",null,"For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n  # all packages in direct subdirs of packages/\n  - 'packages/*'\n  # all packages in subdirs of components/\n  - 'components/**'\n  # exclude packages that are inside test directories\n  - '!**/test/**'\n")),(0,p.kt)("p",null,"The root package is always included, even when custom location wildcards are\nused."))}d.isMDXComponent=!0}}]);