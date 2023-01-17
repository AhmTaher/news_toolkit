"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[928],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(o),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return o?n.createElement(g,a(a({ref:t},l),{},{components:o})):n.createElement(g,a({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},763:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const i={sidebar_position:7,description:"Learn how to setup continous deployments for your application."},a="App deployment setup",c={unversionedId:"project_configuration/app_deployment",id:"project_configuration/app_deployment",title:"App deployment setup",description:"Learn how to setup continous deployments for your application.",source:"@site/docs/project_configuration/app_deployment.md",sourceDirName:"project_configuration",slug:"/project_configuration/app_deployment",permalink:"/news_toolkit/project_configuration/app_deployment",draft:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/project_configuration/app_deployment.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Learn how to setup continous deployments for your application."},sidebar:"tutorialSidebar",previous:{title:"App Store setup",permalink:"/news_toolkit/project_configuration/appstore"},next:{title:"API deployment setup",permalink:"/news_toolkit/project_configuration/api_deployment"}},p={},s=[{value:"Codemagic",id:"codemagic",level:2}],l={toc:s};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"app-deployment-setup"},"App deployment setup"),(0,r.kt)("h2",{id:"codemagic"},"Codemagic"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Codemagic is not a required service for this project. You're welcome to use other automated CI/CD services for your apps, if desired.")),(0,r.kt)("p",null,"Codemagic is an automated CI/CD service that streamlines deployments to the Google Play Store and App Store Connect. You can configure your CI/CD pipeuline up front and trigger deployments automatically with each subsequent code change."),(0,r.kt)("p",null,"To use this service, login or ",(0,r.kt)("a",{parentName:"p",href:"https://codemagic.io/signup?campaign=flutter-ci-header_sign_up_btn"},"create a Codemagic account")," and follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.codemagic.io/yaml-basic-configuration/yaml-getting-started/"},"getting started guide")," guide to set up a ",(0,r.kt)("inlineCode",{parentName:"p"},"codemagic.yaml")," build configuration file. Be sure to populate all 'TODO' fields in your ",(0,r.kt)("inlineCode",{parentName:"p"},"codemagic.yaml")," file."),(0,r.kt)("p",null,"For this project, specifically, be sure to create an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.codemagic.io/yaml-code-signing/signing-ios/#creating-the-app-store-connect-api-key"},"App Store API Key")," and add this to your Codemagic account. In addition, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.codemagic.io/yaml-code-signing/signing-android/#generating-a-keystore"},"generate a keytore")," for signing your release builds."),(0,r.kt)("p",null,"A service account is required when publishing to Google Play. The service account JSON key file must be added to Codemagic to authenticate with these services. To set up a service account for authentication with Google Play and Firebase, use the instructions at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.codemagic.io/knowledge-base/google-services-authentication/"},"Google services authetication"),"."))}u.isMDXComponent=!0}}]);