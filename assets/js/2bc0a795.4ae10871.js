"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[81],{9195:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(5893),n=i(1151);const s={sidebar_position:5,description:"Learn how to configure notifications for your application."},r="Notifications setup",a={id:"project_configuration/notifications",title:"Notifications setup",description:"Learn how to configure notifications for your application.",source:"@site/docs/project_configuration/notifications.md",sourceDirName:"project_configuration",slug:"/project_configuration/notifications",permalink:"/news_toolkit/project_configuration/notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/project_configuration/notifications.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Learn how to configure notifications for your application."},sidebar:"tutorialSidebar",previous:{title:"Ads setup or removal",permalink:"/news_toolkit/project_configuration/ads"},next:{title:"App Store setup",permalink:"/news_toolkit/project_configuration/appstore"}},c={},l=[{value:"FCM",id:"fcm",level:2},{value:"OneSignal",id:"onesignal",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"notifications-setup",children:"Notifications setup"}),"\n",(0,t.jsxs)(o.p,{children:["The Flutter News Toolkit comes with ",(0,t.jsx)(o.a,{href:"https://firebase.google.com/docs/cloud-messaging",children:"Firebase Cloud Messaging (FCM)"})," set up, but you can also configure your application with ",(0,t.jsx)(o.a,{href:"https://onesignal.com/",children:"OneSignal"})," for push notifications."]}),"\n",(0,t.jsxs)(o.p,{children:["For information on using FCM or OneSignal in your app, refer to the ",(0,t.jsx)(o.a,{href:"/news_toolkit/flutter_development/push_notifications",children:"Push notifications"})," documentation section."]}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsx)(o.p,{children:"Notifications only appear when your app is running on a physical device."})}),"\n",(0,t.jsx)(o.h2,{id:"fcm",children:"FCM"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://firebase.google.com/docs/cloud-messaging",children:"Firebase Cloud Messaging"})," (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost. A newly-generated Flutter News Toolkit application comes with Firebase Cloud Messaging already installed. To customize app messaging, you must first create a ",(0,t.jsx)(o.a,{href:"https://firebase.google.com/docs/android/setup#create-firebase-project",children:"Firebase project"})," and register your app flavors for ",(0,t.jsx)(o.a,{href:"https://firebase.google.com/docs/ios/setup#register-app",children:"iOS"})," and ",(0,t.jsx)(o.a,{href:"https://firebase.google.com/docs/android/setup#register-app",children:"Android"})," within the Firebase project."]}),"\n",(0,t.jsxs)(o.p,{children:["Next, specify your Firebase configuration for ",(0,t.jsx)(o.a,{href:"https://firebase.google.com/docs/ios/setup#add-config-file",children:"iOS"})," and ",(0,t.jsx)(o.a,{href:"https://firebase.google.com/docs/android/setup",children:"Android"}),". Download the ",(0,t.jsx)(o.code,{children:"google-services.json"})," file from Firebase for each of your flavors and replace the project's placeholder ",(0,t.jsx)(o.code,{children:"google-services.json"})," files with your newly downloaded versions. Repeat this process with the ",(0,t.jsx)(o.code,{children:"GoogleService-Info.plist"})," file to specify a Firebase configuration for your iOS flavors."]}),"\n",(0,t.jsx)(o.h2,{id:"onesignal",children:"OneSignal"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://onesignal.com/",children:"OneSignal"})," is a free notification service for your app that you can use instead of FCM. To use OneSignal as a notification solution, ",(0,t.jsx)(o.a,{href:"https://documentation.onesignal.com/docs/flutter-sdk-setup",children:"create a OneSignal account and note your OneSignal app ID"}),". Then follow the ",(0,t.jsx)(o.a,{href:"/flutter_development/push_notifications#onesignal",children:"OneSignal SDK setup instructions"}),"."]})]})}function p(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,o,i)=>{i.d(o,{Z:()=>a,a:()=>r});var t=i(7294);const n={},s=t.createContext(n);function r(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);