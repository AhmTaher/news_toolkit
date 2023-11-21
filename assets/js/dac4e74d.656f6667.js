"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[618],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(o),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return o?n.createElement(h,i(i({ref:t},s),{},{components:o})):n.createElement(h,i({ref:t},s))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},866:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=o(7462),a=(o(7294),o(3905));const r={sidebar_position:8,description:"Learn how to setup continous deployments for your API."},i="API deployment setup",p={unversionedId:"project_configuration/api_deployment",id:"project_configuration/api_deployment",title:"API deployment setup",description:"Learn how to setup continous deployments for your API.",source:"@site/docs/project_configuration/api_deployment.md",sourceDirName:"project_configuration",slug:"/project_configuration/api_deployment",permalink:"/news_toolkit/project_configuration/api_deployment",draft:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/project_configuration/api_deployment.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Learn how to setup continous deployments for your API."},sidebar:"tutorialSidebar",previous:{title:"App deployment setup",permalink:"/news_toolkit/project_configuration/app_deployment"},next:{title:"Upgrading your project",permalink:"/news_toolkit/project_configuration/upgrading"}},l={},u=[{value:"Google Cloud",id:"google-cloud",level:2},{value:"Deployment Steps",id:"deployment-steps",level:3},{value:"Other",id:"other",level:2},{value:"Accessing your API",id:"accessing-your-api",level:2}],s={toc:u},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-deployment-setup"},"API deployment setup"),(0,a.kt)("p",null,"The Flutter News Toolkit uses ",(0,a.kt)("a",{parentName:"p",href:"https://dartfrog.vgv.dev/docs/overview"},"Dart Frog")," to simplify the backend build by aggregating, composing, and normalizing data from multiple sources. You must deploy your Dart Frog API to serve requests to the internet."),(0,a.kt)("h2",{id:"google-cloud"},"Google Cloud"),(0,a.kt)("p",null,"You can deploy your Dart Frog API to ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/run/docs/overview/what-is-cloud-run"},"Cloud Run"),", a managed compute platform that lets you run containers directly on top of Google's scalable infrustructure. To deploy your API to Cloud Run, check out the Dart Frog instructions at ",(0,a.kt)("a",{parentName:"p",href:"https://dartfrog.vgv.dev/docs/deploy/google-cloud-run"},"Google Cloud Run")," and review the details below. Also, set up a ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/identity-security/enabling-keyless-authentication-from-github-actions"},"GitHub Action Service Account")," to ease the process of authenticating and authorizing GitHub Actions Workflows to Google Cloud."),(0,a.kt)("h3",{id:"deployment-steps"},"Deployment Steps"),(0,a.kt)("p",null,"If you've created a development and production flavor for your application, you'll want two corresponding Google Cloud Projects where the API must be deployed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Development:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"project_id: example-name-dev")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"service_name : example-name-api-dev")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Production:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"project_id: example-name-prod")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"service_name : example-name-api-prod"))))),(0,a.kt)("p",null,"Every time a change is made inside the API, a new version must be deployed to Cloud Run for both GCP projects. To do so, follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure you have the ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"Google Cloud SDK")," installed and configured.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure you have the ",(0,a.kt)("a",{parentName:"p",href:"https://dart.dev/get-dart"},"Dart SDK")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/dart_frog"},"Dart Frog")," packages installed and configured.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Login into the GCP account using the ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud auth login")," command, selecting the email account that has access to your project's GCP accounts.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud config set project <project_id>")," command to set the project to be one of the app's projects.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open a terminal inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," folder, and run the ",(0,a.kt)("inlineCode",{parentName:"p"},"dart_frog build")," command. This will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"/build")," directory with all the files needed to deploy the API.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following command to deploy the API to Cloud Run:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud run deploy [service_name]  \\\n\n--source build \\\n\n--project=[project_id] \\\n\n--region=us-central \\\n\n--allow-unauthenticated\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Note: the ",(0,a.kt)("inlineCode",{parentName:"em"},"--allow-unauthenticated")," is needed because the api can be publicly accessed."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If the deploy was made to the already existing service (by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"service_name")," values provided above), the URL will be the same as the previous version. Otherwise, it must be updated as ",(0,a.kt)("inlineCode",{parentName:"p"},"API_BASE_URL")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json")," file of the project."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can optionally configure ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication"},"API authentication")," and ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/run/docs/authenticating/end-users#cicp-firebase-auth"},"user authentication for your API"),", if desired.")),(0,a.kt)("h2",{id:"other"},"Other"),(0,a.kt)("p",null,"You can also deploy your Dart Frog API to other services, like ",(0,a.kt)("a",{parentName:"p",href:"https://dartfrog.vgv.dev/docs/deploy/aws-app-runner"},"AWS App Runner")," or ",(0,a.kt)("a",{parentName:"p",href:"https://dartfrog.vgv.dev/docs/deploy/digital-ocean-app-platform"},"Digital Ocean App Platform"),"."),(0,a.kt)("h2",{id:"accessing-your-api"},"Accessing your API"),(0,a.kt)("p",null,"By default, your app expects to receive news data from ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),". In order to receive data from your deployed API, you must point your app towards your new URL."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you're using an android emulator, you must set ",(0,a.kt)("inlineCode",{parentName:"p"},"http://10.0.2.2:8080")," as the ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),".")),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiClient")," class that extends ",(0,a.kt)("inlineCode",{parentName:"p"},"FlutterNewsExampleApiClient")," and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," field to your new API URL. Additionally, override any ",(0,a.kt)("inlineCode",{parentName:"p"},"FlutterNewsExampleApiClient")," methods which diverge from your API request schema, and implement them to handle the request appropriately."),(0,a.kt)("p",null,"Finally, edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"main_flavor.dart")," file for every app flavor you want receiving data from your deployed API. Remove the assignment of ",(0,a.kt)("inlineCode",{parentName:"p"},"apiClient")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"FlutterNewsExampleApiClient.localhost")," and assign ",(0,a.kt)("inlineCode",{parentName:"p"},"apiClient")," to an instance of your new API client. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final apiClient = YourNewsApiClient(\n    tokenProvider: tokenStorage.readToken,\n    baseURL: 'https://yourApiBaseURL',\n);\n")))}c.isMDXComponent=!0}}]);