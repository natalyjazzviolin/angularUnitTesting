(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[179],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2763:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:6},l="Deep Integration Basics",s={unversionedId:"deep-integration-test-tutorial",id:"deep-integration-test-tutorial",isDocsHomePage:!1,title:"Deep Integration Basics",description:"Use real child components",source:"@site/docs/deep-integration-test-tutorial.md",sourceDirName:".",slug:"/deep-integration-test-tutorial",permalink:"/angularUnitTesting/docs/deep-integration-test-tutorial",editUrl:"https://github.com/natalyjazzviolin/angularUnitTesting/blob/main/docs/deep-integration-test-tutorial.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Shallow Integration Basics",permalink:"/angularUnitTesting/docs/shallow-integration-basics"},next:{title:"Integration Testing Services",permalink:"/angularUnitTesting/docs/integration-testing-services"}},p=[{value:"Use real child components",id:"use-real-child-components",children:[]},{value:"Use mock services",id:"use-mock-services",children:[]},{value:"Avoid template parse errors",id:"avoid-template-parse-errors",children:[]},{value:"Initialize components",id:"initialize-components",children:[]},{value:"Detect Child Element Creation",id:"detect-child-element-creation",children:[{value:"Get all component nodes",id:"get-all-component-nodes",children:[]},{value:"Check if elements are correct",id:"check-if-elements-are-correct",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deep-integration-basics"},"Deep Integration Basics"),(0,o.kt)("h3",{id:"use-real-child-components"},"Use real child components"),(0,o.kt)("p",null,"In this type of test real child components are used, not mock ones, because we need to test their interaction."),(0,o.kt)("h3",{id:"use-mock-services"},"Use mock services"),(0,o.kt)("p",null,"Keep using mock services, just like in shallow integration tests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"TestBed.configureTestingModule({\n    declarations: [\n        ParentComponent,\n        ChildComponent\n    ],\n    providers: [\n        // Services\n    ]\n})\n\n")),(0,o.kt)("h3",{id:"avoid-template-parse-errors"},"Avoid template parse errors"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"schemas: [NO_ERRORS_SCHEMA]")," to avoid template parse errors. It goes in right after ",(0,o.kt)("inlineCode",{parentName:"p"},"providers"),"."),(0,o.kt)("h3",{id:"initialize-components"},"Initialize components"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fixture.detectChanges()")," initializes the component and all its children. It also causes the lifecycle hooks to run. Without it, the component is not initialized."),(0,o.kt)("h2",{id:"detect-child-element-creation"},"Detect Child Element Creation"),(0,o.kt)("h3",{id:"get-all-component-nodes"},"Get all component nodes"),(0,o.kt)("p",null,"This pinpoints all component nodes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let childComponentDEs =\n    fixture.debugElement.queryAll(By.directive(ChildComponent));\n")),(0,o.kt)("h3",{id:"check-if-elements-are-correct"},"Check if elements are correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"expect(\n    childComponentDEs[0]\n    .componentInstance\n    .element\n    .property\n    ).toEqual('Expected Value');\n")))}d.isMDXComponent=!0}}]);