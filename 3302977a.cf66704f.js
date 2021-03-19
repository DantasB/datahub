(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{163:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},164:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(163),a=n(164),o=(n(0),n(165)),i={title:"Quickstart Guide",hide_title:!0,slug:"/quickstart",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/quickstart.md"},c={unversionedId:"docs/quickstart",id:"docs/quickstart",isDocsHomePage:!1,title:"Quickstart Guide",description:"DataHub Quickstart Guide",source:"@site/genDocs/docs/quickstart.md",slug:"/quickstart",permalink:"/docs/quickstart",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/quickstart.md",version:"current",sidebar:"overviewSidebar",previous:{title:"Demo",permalink:"/docs/demo"},next:{title:"Debugging Guide",permalink:"/docs/debugging"}},u=[],s={rightToc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"datahub-quickstart-guide"},"DataHub Quickstart Guide"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Install ",Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/install/"},"docker")," and ",Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose")," (if using Linux). Make sure to allocate enough hardware resources for Docker engine. Tested & confirmed config: 2 CPUs, 8GB RAM, 2GB Swap area."),Object(o.b)("li",{parentName:"ol"},"Open Docker either from the command line or the desktop app and ensure it is up and running."),Object(o.b)("li",{parentName:"ol"},"Clone this repo and ",Object(o.b)("inlineCode",{parentName:"li"},"cd")," into the root directory of the cloned repository."),Object(o.b)("li",{parentName:"ol"},"Run the following command to download and run all Docker containers locally:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"./docker/quickstart.sh\n")),"This step takes a while to run the first time, and it may be difficult to tell if DataHub is fully up and running from the combined log. Please use ",Object(o.b)("a",{parentName:"li",href:"/docs/debugging#how-can-i-confirm-if-all-docker-containers-are-running-as-expected-after-a-quickstart"},"this guide")," to verify that each container is running correctly."),Object(o.b)("li",{parentName:"ol"},"At this point, you should be able to start DataHub by opening ",Object(o.b)("a",{parentName:"li",href:"http://localhost:9002"},"http://localhost:9002")," in your browser. You can sign in using ",Object(o.b)("inlineCode",{parentName:"li"},"datahub")," as  username and any password (no password validation by default). However, you'll notice that no data has been ingested yet."),Object(o.b)("li",{parentName:"ol"},"To ingest provided ",Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/mce-cli/bootstrap_mce.dat"},"sample data")," to DataHub, switch to a new terminal window, ",Object(o.b)("inlineCode",{parentName:"li"},"cd")," into the cloned ",Object(o.b)("inlineCode",{parentName:"li"},"datahub")," repo, and run the following command:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"./docker/ingestion/ingestion.sh\n")),"After running this, you should be able to see and search sample datasets in DataHub."),Object(o.b)("li",{parentName:"ol"},"That's it! To get some real data into DataHub, take a look at the ",Object(o.b)("a",{parentName:"li",href:"/docs/metadata-ingestion"},"ingestion framework"),".")),Object(o.b)("p",null,"Please refer to the ",Object(o.b)("a",{parentName:"p",href:"/docs/debugging"},"debugging guide")," if you encounter any issues during the quickstart."))}l.isMDXComponent=!0}}]);