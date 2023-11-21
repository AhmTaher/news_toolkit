"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[81],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>g});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(o),d=r,g=u["".concat(p,".").concat(d)]||u[d]||f[d]||i;return o?n.createElement(g,a(a({ref:t},l),{},{components:o})):n.createElement(g,a({ref:t},l))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6268:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const i={sidebar_position:5,description:"Learn how to configure notifications for your application."},a="Notifications setup",s={unversionedId:"project_configuration/notifications",id:"project_configuration/notifications",title:"Notifications setup",description:"Learn how to configure notifications for your application.",source:"@site/docs/project_configuration/notifications.md",sourceDirName:"project_configuration",slug:"/project_configuration/notifications",permalink:"/news_toolkit/project_configuration/notifications",draft:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/project_configuration/notifications.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Learn how to configure notifications for your application."},sidebar:"tutorialSidebar",previous:{title:"Ads setup or removal",permalink:"/news_toolkit/project_configuration/ads"},next:{title:"App Store setup",permalink:"/news_toolkit/project_configuration/appstore"}},p={},c=[{value:"FCM",id:"fcm",level:2},{value:"OneSignal",id:"onesignal",level:2}],l={toc:c},u="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"notifications-setup"},"Notifications setup"),(0,r.kt)("p",null,"The Flutter News Toolkit comes with ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging"},"Firebase Cloud Messaging (FCM)")," set up, but you can also configure your application with ",(0,r.kt)("a",{parentName:"p",href:"https://onesignal.com/"},"OneSignal")," for push notifications."),(0,r.kt)("p",null,"For information on using FCM or OneSignal in your app, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/news_toolkit/flutter_development/push_notifications"},"Push notifications")," documentation section."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Notifications only appear when your app is running on a physical device.")),(0,r.kt)("h2",{id:"fcm"},"FCM"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging"},"Firebase Cloud Messaging")," (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost. A newly-generated Flutter News Toolkit application comes with Firebase Cloud Messaging already installed. To customize app messaging, you must first create a ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/android/setup#create-firebase-project"},"Firebase project")," and register your app flavors for ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/ios/setup#register-app"},"iOS")," and ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/android/setup#register-app"},"Android")," within the Firebase project."),(0,r.kt)("p",null,"Next, specify your Firebase configuration for ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/ios/setup#add-config-file"},"iOS")," and ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/android/setup"},"Android"),". Download the ",(0,r.kt)("inlineCode",{parentName:"p"},"google-services.json")," file from Firebase for each of your flavors and replace the project's placeholder ",(0,r.kt)("inlineCode",{parentName:"p"},"google-services.json")," files with your newly downloaded versions. Repeat this process with the ",(0,r.kt)("inlineCode",{parentName:"p"},"GoogleService-Info.plist")," file to specify a Firebase configuration for your iOS flavors."),(0,r.kt)("h2",{id:"onesignal"},"OneSignal"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://onesignal.com/"},"OneSignal")," is a free notification service for your app that you can use instead of FCM. To use OneSignal as a notification solution, ",(0,r.kt)("a",{parentName:"p",href:"https://documentation.onesignal.com/docs/flutter-sdk-setup"},"create a OneSignal account and note your OneSignal app ID"),". Then follow the ",(0,r.kt)("a",{parentName:"p",href:"/flutter_development/push_notifications#onesignal"},"OneSignal SDK setup instructions"),"."))}f.isMDXComponent=!0}}]);