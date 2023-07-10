"use strict";(self.webpackChunkgdsc_hcmute_github_io=self.webpackChunkgdsc_hcmute_github_io||[]).push([[822],{4137:(n,t,e)=>{e.d(t,{Zo:()=>h,kt:()=>m});var i=e(7294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function r(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function g(n,t){if(null==n)return{};var e,i,o=function(n,t){if(null==n)return{};var e,i,o={},c=Object.keys(n);for(i=0;i<c.length;i++)e=c[i],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(i=0;i<c.length;i++)e=c[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var a=i.createContext({}),l=function(n){var t=i.useContext(a),e=t;return n&&(e="function"==typeof n?n(t):r(r({},t),n)),e},h=function(n){var t=l(n.components);return i.createElement(a.Provider,{value:t},n.children)},p="mdxType",s={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(n,t){var e=n.components,o=n.mdxType,c=n.originalType,a=n.parentName,h=g(n,["components","mdxType","originalType","parentName"]),p=l(e),u=o,m=p["".concat(a,".").concat(u)]||p[u]||s[u]||c;return e?i.createElement(m,r(r({ref:t},h),{},{components:e})):i.createElement(m,r({ref:t},h))}));function m(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var c=e.length,r=new Array(c);r[0]=u;var g={};for(var a in t)hasOwnProperty.call(t,a)&&(g[a]=t[a]);g.originalType=n,g[p]="string"==typeof n?n:o,r[1]=g;for(var l=2;l<c;l++)r[l]=e[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,e)}u.displayName="MDXCreateElement"},1360:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>s,frontMatter:()=>c,metadata:()=>g,toc:()=>l});var i=e(7462),o=(e(7294),e(4137));const c={title:"Log Spoofing",description:"Gi\u1edbi thi\u1ec7u v\u1ec1 l\u1ed7 h\u1ed5ng Log Spoofing trong b\u1ea3o m\u1eadt \u1ee9ng d\u1ee5ng web.",image:"https://img.youtube.com/vi/ajCyV1xkMGI/0.jpg",sidebar_position:2,tags:["web-security","webgoat-7","injection-flaws","sql-injection"],keywords:["web security","webgoat 7","injection flaws","sql injection","log spoofing","l\u1ed7 h\u1ed5ng log spoofing","b\u1ea3o m\u1eadt \u1ee9ng d\u1ee5ng web","l\u1ed7 h\u1ed5ng b\u1ea3o m\u1eadt \u1ee9ng d\u1ee5ng web","h\u01b0\u1edbng d\u1eabn","t\u1ea5n c\xf4ng","c\xe1ch ph\xf2ng ch\u1ed1ng"]},r="Log Spoofing",g={unversionedId:"web-security/webgoat-7/injection-flaws/log-spoofing",id:"web-security/webgoat-7/injection-flaws/log-spoofing",title:"Log Spoofing",description:"Gi\u1edbi thi\u1ec7u v\u1ec1 l\u1ed7 h\u1ed5ng Log Spoofing trong b\u1ea3o m\u1eadt \u1ee9ng d\u1ee5ng web.",source:"@site/docs/web-security/webgoat-7/injection-flaws/03.log-spoofing.md",sourceDirName:"web-security/webgoat-7/injection-flaws",slug:"/web-security/webgoat-7/injection-flaws/log-spoofing",permalink:"/docs/web-security/webgoat-7/injection-flaws/log-spoofing",draft:!1,editUrl:"https://github.com/GDSC-HCMUTE/GDSC-HCMUTE.github.io/tree/master/docs/web-security/webgoat-7/injection-flaws/03.log-spoofing.md",tags:[{label:"web-security",permalink:"/docs/tags/web-security"},{label:"webgoat-7",permalink:"/docs/tags/webgoat-7"},{label:"injection-flaws",permalink:"/docs/tags/injection-flaws"},{label:"sql-injection",permalink:"/docs/tags/sql-injection"}],version:"current",sidebarPosition:2,frontMatter:{title:"Log Spoofing",description:"Gi\u1edbi thi\u1ec7u v\u1ec1 l\u1ed7 h\u1ed5ng Log Spoofing trong b\u1ea3o m\u1eadt \u1ee9ng d\u1ee5ng web.",image:"https://img.youtube.com/vi/ajCyV1xkMGI/0.jpg",sidebar_position:2,tags:["web-security","webgoat-7","injection-flaws","sql-injection"],keywords:["web security","webgoat 7","injection flaws","sql injection","log spoofing","l\u1ed7 h\u1ed5ng log spoofing","b\u1ea3o m\u1eadt \u1ee9ng d\u1ee5ng web","l\u1ed7 h\u1ed5ng b\u1ea3o m\u1eadt \u1ee9ng d\u1ee5ng web","h\u01b0\u1edbng d\u1eabn","t\u1ea5n c\xf4ng","c\xe1ch ph\xf2ng ch\u1ed1ng"]},sidebar:"tutorialSidebar",previous:{title:"Numeric SQL Injection",permalink:"/docs/web-security/webgoat-7/injection-flaws/numeric-sql-injection"},next:{title:"Git-Github",permalink:"/docs/category/git-github"}},a={},l=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"C\xe1ch khai th\xe1c",id:"c\xe1ch-khai-th\xe1c",level:2},{value:"C\xe1ch ph\xf2ng ch\u1ed1ng",id:"c\xe1ch-ph\xf2ng-ch\u1ed1ng",level:2},{value:"T\u1ed5ng k\u1ebft",id:"t\u1ed5ng-k\u1ebft",level:2}],h={toc:l},p="wrapper";function s(n){let{components:t,...e}=n;return(0,o.kt)(p,(0,i.Z)({},h,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"log-spoofing"},"Log Spoofing"),(0,o.kt)("p",null,"Trong b\xe0i vi\u1ebft n\xe0y, m\xecnh s\u1ebd gi\u1edbi thi\u1ec7u v\u1ec1 l\u1ed7 h\u1ed5ng Log Spoofing. \u0110\xe2y l\xe0 m\u1ed9t l\u1ed7 h\u1ed5ng r\u1ea5t nguy hi\u1ec3m, n\xf3 cho ph\xe9p attacker th\u1ef1c thi c\xe1c l\u1ec7nh tr\xean server."),(0,o.kt)("h2",{id:"gi\u1edbi-thi\u1ec7u"},"Gi\u1edbi thi\u1ec7u"),(0,o.kt)("p",null,"Log Spoofing l\xe0 m\u1ed9t h\xecnh th\u1ee9c l\u1eeba \u0111\u1ea3o m\xe0 k\u1ebb t\u1ea5n c\xf4ng gi\u1ea3 m\u1ea1o c\xe1c ngu\u1ed3n \u0111\xe1ng tin c\u1eady, c\xf3 th\u1ec3 g\xe2y ra nhi\u1ec1u r\u1ee7i ro cho ng\u01b0\u1eddi d\xf9ng nh\u01b0 b\u1ecb \u0111\xe1nh c\u1eafp t\xe0i kho\u1ea3n, b\u1ecb c\xe0i \u0111\u1eb7t ph\u1ea7n m\u1ec1m \u0111\u1ed9c h\u1ea1i ho\u1eb7c b\u1ecb l\u1eeba ti\u1ec1n."),(0,o.kt)("h2",{id:"c\xe1ch-khai-th\xe1c"},"C\xe1ch khai th\xe1c"),(0,o.kt)("p",null,"\u0110\u1ec3 khai th\xe1c l\u1ed7 h\u1ed5ng n\xe0y, attacker g\u1eedi c\xe1c th\xf4ng tin gi\u1ea3 m\u1ea1o c\xe1c ngu\u1ed3n \u0111\xe1ng tin c\u1eady nh\u01b0 \u0111\u1ecba ch\u1ec9 email, t\xean, s\u1ed1 \u0111i\u1ec7n tho\u1ea1i, SMS ho\u1eb7c URL trang web \u0111\u1ec3 l\u1ea5y th\xf4ng tin c\xe1 nh\xe2n c\u1ee7a ng\u01b0\u1eddi d\xf9ng. Log Spoofing c\xf3 nhi\u1ec1u lo\u1ea1i, bao g\u1ed3m gi\u1ea3 m\u1ea1o email, gi\u1ea3 m\u1ea1o tin nh\u1eafn, gi\u1ea3 m\u1ea1o ID ng\u01b0\u1eddi g\u1ecdi, gi\u1ea3 m\u1ea1o URL v\xe0 gi\u1ea3 m\u1ea1o GPS. "),(0,o.kt)("iframe",{class:"video",src:"https://www.youtube.com/embed/ajCyV1xkMGI",title:"Log Spoofing",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("h2",{id:"c\xe1ch-ph\xf2ng-ch\u1ed1ng"},"C\xe1ch ph\xf2ng ch\u1ed1ng"),(0,o.kt)("p",null,"C\xe1ch ph\xf2ng ch\u1ed1ng Log Spoofing l\xe0 m\u1ed9t v\u1ea5n \u0111\u1ec1 quan tr\u1ecdng \u0111\u1ec3 b\u1ea3o v\u1ec7 th\xf4ng tin c\xe1 nh\xe2n v\xe0 an ninh m\u1ea1ng. M\u1ed9t s\u1ed1 c\xe1ch ph\xf2ng ch\u1ed1ng Log Spoofing c\xf3 th\u1ec3 l\xe0:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"B\u1eadt ch\u1ebf \u0111\u1ed9 l\u1ecdc th\u01b0 r\xe1c trong Email \u0111\u1ec3 ng\u0103n ch\u1eb7n c\xe1c Email Spoofing truy c\u1eadp v\xe0o h\u1ed9p th\u01b0 \u0111\u1ebfn."),(0,o.kt)("li",{parentName:"ul"},"Kh\xf4ng nh\u1ea5p v\xe0o c\xe1c link ho\u1eb7c t\u1ec7p \u0111\xednh k\xe8m y\xeau trong Email, SMS ho\u1eb7c cu\u1ed9c g\u1ecdi \u0111\xe1ng ng\u1edd."),(0,o.kt)("li",{parentName:"ul"},"Kh\xf4ng cung c\u1ea5p th\xf4ng tin c\xe1 nh\xe2n cho b\u1ea5t k\u1ef3 cu\u1ed9c \u0111i\u1ec1u tra t\xecm ki\u1ebfm c\xe1 nh\xe2n \u0111\xe1ng ng\u1edd n\xe0o."),(0,o.kt)("li",{parentName:"ul"},"Thay \u0111\u1ed5i c\xe0i \u0111\u1eb7t trong Windows b\u1eb1ng c\xe1ch nh\u1ea5p v\xe0o tab \u201cView\u201d trong File Explorer v\xe0o ch\u1ecdn h\u1ed9p \u0111\u1ec3 hi\u1ec3n th\u1ecb ph\u1ea7n m\u1edf r\u1ed9ng t\u1ec7p. Sau \u0111\xf3 ng\u01b0\u1eddi d\xf9ng c\xf3 th\u1ec3 xem b\u1ea5t k\u1ef3 ti\u1ec7n \xedch m\u1edf r\u1ed9ng Spoofing n\xe0o v\xe0 tr\xe1nh m\u1edf c\xe1c t\u1ec7p \u0111\u1ed9c h\u1ea1i."),(0,o.kt)("li",{parentName:"ul"},"S\u1eed d\u1ee5ng c\xe1c ph\u1ea7n m\u1ec1m an ninh m\u1ea1ng uy t\xedn c\xf3 kh\u1ea3 n\u0103ng ph\xe1t hi\u1ec7n v\xe0 c\u1ea3nh b\xe1o c\xe1c m\u1ed1i \u0111e d\u1ecda ti\u1ec1m \u1ea9n. Ng\u0103n ch\u1eb7n t\u1ea3i xu\u1ed1ng v\xe0 ng\u0103n ph\u1ea7n m\u1ec1m \u0111\u1ed9c h\u1ea1i x\xe2m nh\u1eadp v\xe0o h\u1ec7 th\u1ed1ng."),(0,o.kt)("li",{parentName:"ul"},"C\u1eadp nh\u1eadt l\xean phi\xean b\u1ea3n Log4j 2.17.1 \u0111\u1ec3 kh\u1eafc ph\u1ee5c l\u1ed7 h\u1ed5ng CVE-2021-44228.")),(0,o.kt)("h2",{id:"t\u1ed5ng-k\u1ebft"},"T\u1ed5ng k\u1ebft"),(0,o.kt)("p",null,"Trong b\xe0i vi\u1ebft n\xe0y, m\xecnh \u0111\xe3 gi\u1edbi thi\u1ec7u v\u1ec1 l\u1ed7 h\u1ed5ng Log Spoofing. Hy v\u1ecdng b\xe0i vi\u1ebft n\xe0y s\u1ebd gi\xfap \xedch cho c\xe1c b\u1ea1n."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u0110\u1ec3 xem th\xeam c\xe1c video kh\xe1c, c\xe1c b\u1ea1n c\xf3 th\u1ec3 truy c\u1eadp v\xe0o ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/TienNguyen09"},"k\xeanh Youtube")," c\u1ee7a m\xecnh.")))}s.isMDXComponent=!0}}]);