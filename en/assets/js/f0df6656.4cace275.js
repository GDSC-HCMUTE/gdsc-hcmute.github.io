"use strict";(self.webpackChunkgdsc_hcmute_github_io=self.webpackChunkgdsc_hcmute_github_io||[]).push([[4367],{4137:(t,e,n)=>{n.d(e,{Zo:()=>h,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},h=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,h=l(t,["components","mdxType","originalType","parentName"]),s=u(n),m=a,g=s["".concat(c,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(g,i(i({ref:e},h),{},{components:n})):r.createElement(g,i({ref:e},h))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8453:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const o={title:"C\xe1c thu\u1eadt to\xe1n thay trang",description:"Gi\u1edbi thi\u1ec7u v\u1ec1 c\xe1c thu\u1eadt to\xe1n thay trang (page replacement algorithms) trong h\u1ec7 \u0111i\u1ec1u h\xe0nh.",sidebar_position:2,tags:["page-replacement-algorithms","os","algorithm","fifo","optimal","lru","clock"],keywords:["operating system","os","page replacement algorithms","algorithm","fifo","first in first out","optimal","lru","least recently used","lru stack","lru counter","clock","h\u1ec7 \u0111i\u1ec1u h\xe0nh","thu\u1eadt to\xe1n thay trang"]},i="C\xe1c thu\u1eadt to\xe1n thay trang",l={unversionedId:"operating-system/page-replacement-algorithms",id:"operating-system/page-replacement-algorithms",title:"C\xe1c thu\u1eadt to\xe1n thay trang",description:"Gi\u1edbi thi\u1ec7u v\u1ec1 c\xe1c thu\u1eadt to\xe1n thay trang (page replacement algorithms) trong h\u1ec7 \u0111i\u1ec1u h\xe0nh.",source:"@site/docs/operating-system/02.page-replacement-algorithms.md",sourceDirName:"operating-system",slug:"/operating-system/page-replacement-algorithms",permalink:"/en/docs/operating-system/page-replacement-algorithms",draft:!1,editUrl:"https://github.com/GDSC-HCMUTE/GDSC-HCMUTE.github.io/tree/master/docs/operating-system/02.page-replacement-algorithms.md",tags:[{label:"page-replacement-algorithms",permalink:"/en/docs/tags/page-replacement-algorithms"},{label:"os",permalink:"/en/docs/tags/os"},{label:"algorithm",permalink:"/en/docs/tags/algorithm"},{label:"fifo",permalink:"/en/docs/tags/fifo"},{label:"optimal",permalink:"/en/docs/tags/optimal"},{label:"lru",permalink:"/en/docs/tags/lru"},{label:"clock",permalink:"/en/docs/tags/clock"}],version:"current",sidebarPosition:2,frontMatter:{title:"C\xe1c thu\u1eadt to\xe1n thay trang",description:"Gi\u1edbi thi\u1ec7u v\u1ec1 c\xe1c thu\u1eadt to\xe1n thay trang (page replacement algorithms) trong h\u1ec7 \u0111i\u1ec1u h\xe0nh.",sidebar_position:2,tags:["page-replacement-algorithms","os","algorithm","fifo","optimal","lru","clock"],keywords:["operating system","os","page replacement algorithms","algorithm","fifo","first in first out","optimal","lru","least recently used","lru stack","lru counter","clock","h\u1ec7 \u0111i\u1ec1u h\xe0nh","thu\u1eadt to\xe1n thay trang"]},sidebar:"tutorialSidebar",previous:{title:"DOS Debug",permalink:"/en/docs/operating-system/dos-debug"},next:{title:"C\xe1c thu\u1eadt to\xe1n l\u1eadp l\u1ecbch ti\u1ebfn tr\xecnh",permalink:"/en/docs/operating-system/os-process-scheduling-algorithms"}},c={},u=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"C\xe1c thu\u1eadt to\xe1n thay trang",id:"c\xe1c-thu\u1eadt-to\xe1n-thay-trang-1",level:2},{value:"FIFO",id:"fifo",level:3},{value:"Optimal",id:"optimal",level:3},{value:"LRU",id:"lru",level:3},{value:"LRU Stack",id:"lru-stack",level:4},{value:"LRU Counter",id:"lru-counter",level:4},{value:"Clock",id:"clock",level:3},{value:"T\u1ed5ng k\u1ebft",id:"t\u1ed5ng-k\u1ebft",level:2}],h={toc:u},s="wrapper";function p(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"c\xe1c-thu\u1eadt-to\xe1n-thay-trang"},"C\xe1c thu\u1eadt to\xe1n thay trang"),(0,a.kt)("h2",{id:"gi\u1edbi-thi\u1ec7u"},"Gi\u1edbi thi\u1ec7u"),(0,a.kt)("p",null,"Trong b\xe0i vi\u1ebft n\xe0y, m\xecnh s\u1ebd gi\u1edbi thi\u1ec7u c\xe1c thu\u1eadt to\xe1n thay trang (page replacement algorithms) trong h\u1ec7 \u0111i\u1ec1u h\xe0nh. C\xe1c thu\u1eadt to\xe1n n\xe0y \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 thay th\u1ebf c\xe1c trang (page) trong b\u1ed9 nh\u1edb \u1ea3o (virtual memory) khi b\u1ed9 nh\u1edb \u0111\u1ea7y."),(0,a.kt)("h2",{id:"c\xe1c-thu\u1eadt-to\xe1n-thay-trang-1"},"C\xe1c thu\u1eadt to\xe1n thay trang"),(0,a.kt)("h3",{id:"fifo"},"FIFO"),(0,a.kt)("p",null,"Thu\u1eadt to\xe1n FIFO (First In First Out) s\u1ebd thay th\u1ebf trang \u0111\u1ea7u ti\xean \u0111\u01b0\u1ee3c \u0111\u01b0a v\xe0o b\u1ed9 nh\u1edb \u1ea3o. Thu\u1eadt to\xe1n n\xe0y d\u1ec5 hi\u1ec3u v\xe0 d\u1ec5 c\xe0i \u0111\u1eb7t, nh\u01b0ng n\xf3 kh\xf4ng ph\u1ea3i l\xe0 thu\u1eadt to\xe1n t\u1ed1i \u01b0u."),(0,a.kt)("iframe",{class:"video",src:"https://www.youtube.com/embed/r6Uf8mwuo2E",title:"FIFO (First In First Out)",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h3",{id:"optimal"},"Optimal"),(0,a.kt)("p",null,"Thu\u1eadt to\xe1n Optimal s\u1ebd thay th\u1ebf trang m\xe0 s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong t\u01b0\u01a1ng lai g\u1ea7n nh\u1ea5t. Thu\u1eadt to\xe1n n\xe0y l\xe0 thu\u1eadt to\xe1n t\u1ed1i \u01b0u nh\u1ea5t, nh\u01b0ng n\xf3 kh\xf4ng th\u1ec3 c\xe0i \u0111\u1eb7t \u0111\u01b0\u1ee3c."),(0,a.kt)("iframe",{class:"video",src:"https://www.youtube.com/embed/jWWvXr_mIoc",title:"Optimal",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h3",{id:"lru"},"LRU"),(0,a.kt)("p",null,"Thu\u1eadt to\xe1n LRU (Least Recently Used) s\u1ebd thay th\u1ebf trang m\xe0 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng l\xe2u nh\u1ea5t. Thu\u1eadt to\xe1n n\xe0y l\xe0 thu\u1eadt to\xe1n t\u1ed1i \u01b0u nh\u1ea5t c\xf3 th\u1ec3 c\xe0i \u0111\u1eb7t \u0111\u01b0\u1ee3c."),(0,a.kt)("h4",{id:"lru-stack"},"LRU Stack"),(0,a.kt)("p",null,"Thu\u1eadt to\xe1n LRU Stack s\u1ebd thay th\u1ebf trang m\xe0 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng l\xe2u nh\u1ea5t. Thu\u1eadt to\xe1n n\xe0y l\xe0 thu\u1eadt to\xe1n t\u1ed1i \u01b0u nh\u1ea5t c\xf3 th\u1ec3 c\xe0i \u0111\u1eb7t \u0111\u01b0\u1ee3c."),(0,a.kt)("iframe",{class:"video",src:"https://www.youtube.com/embed/TD3Rbda-z2E",title:"LRU Stack",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h4",{id:"lru-counter"},"LRU Counter"),(0,a.kt)("p",null,"Thu\u1eadt to\xe1n LRU Counter s\u1ebd thay th\u1ebf trang m\xe0 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng l\xe2u nh\u1ea5t. Thu\u1eadt to\xe1n n\xe0y l\xe0 thu\u1eadt to\xe1n t\u1ed1i \u01b0u nh\u1ea5t c\xf3 th\u1ec3 c\xe0i \u0111\u1eb7t \u0111\u01b0\u1ee3c."),(0,a.kt)("iframe",{class:"video",src:"https://www.youtube.com/embed/fvwBP3GeOa8",title:"LRU Counter",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h3",{id:"clock"},"Clock"),(0,a.kt)("p",null,"Thu\u1eadt to\xe1n Clock s\u1ebd thay th\u1ebf trang m\xe0 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng l\xe2u nh\u1ea5t. Thu\u1eadt to\xe1n n\xe0y kh\xf4ng ph\u1ea3i l\xe0 thu\u1eadt to\xe1n t\u1ed1i \u01b0u, nh\u01b0ng n\xf3 c\xf3 th\u1ec3 c\xe0i \u0111\u1eb7t \u0111\u01b0\u1ee3c."),(0,a.kt)("iframe",{class:"video",src:"https://www.youtube.com/embed/p1wV_Ix8pVk",title:"Clock",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"t\u1ed5ng-k\u1ebft"},"T\u1ed5ng k\u1ebft"),(0,a.kt)("p",null,"Trong b\xe0i vi\u1ebft n\xe0y, m\xecnh \u0111\xe3 gi\u1edbi thi\u1ec7u c\xe1c thu\u1eadt to\xe1n thay trang trong h\u1ec7 \u0111i\u1ec1u h\xe0nh. Hy v\u1ecdng b\xe0i vi\u1ebft n\xe0y s\u1ebd gi\xfap \xedch cho c\xe1c b\u1ea1n."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"B\xean c\u1ea1nh c\xe1c thu\u1eadt to\xe1n tr\xean, c\xf2n c\xf3 c\xe1c thu\u1eadt to\xe1n kh\xe1c nh\u01b0: MFU, LFU, Second Chance, Enhanced Second Chance, NRU, FIFO Approximation, LRU Approximation, Random, ... C\xe1c b\u1ea1n c\xf3 th\u1ec3 t\xecm hi\u1ec3u th\xeam v\u1ec1 c\xe1c thu\u1eadt to\xe1n n\xe0y.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u0110\u1ec3 xem th\xeam c\xe1c video kh\xe1c, c\xe1c b\u1ea1n c\xf3 th\u1ec3 truy c\u1eadp v\xe0o ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/TienNguyen09"},"k\xeanh Youtube")," c\u1ee7a m\xecnh.")))}p.isMDXComponent=!0}}]);