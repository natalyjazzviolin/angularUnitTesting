(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[295],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:8},c="Detect Events",p={unversionedId:"trigger-event",id:"trigger-event",isDocsHomePage:!1,title:"Detect Events",description:"Trigger an event on a sub-component, that will get raised to the parent component",source:"@site/docs/trigger-event.md",sourceDirName:".",slug:"/trigger-event",permalink:"/angularUnitTesting/docs/trigger-event",editUrl:"https://github.com/natalyjazzviolin/angularUnitTesting/blob/main/docs/trigger-event.md",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Integration Testing Services",permalink:"/angularUnitTesting/docs/integration-testing-services"},next:{title:"Interact with Input Boxes",permalink:"/angularUnitTesting/docs/input-boxes"}},s=[{value:"Trigger an event on a sub-component, that will get raised to the parent component",id:"trigger-an-event-on-a-sub-component-that-will-get-raised-to-the-parent-component",children:[{value:"Setup event flow",id:"setup-event-flow",children:[]},{value:"Get a handle on all child components",id:"get-a-handle-on-all-child-components",children:[]}]},{value:"Emit event from sub-component",id:"emit-event-from-sub-component",children:[{value:"Tell the component to emit the event",id:"tell-the-component-to-emit-the-event",children:[]},{value:"Trigger the event directly",id:"trigger-the-event-directly",children:[]}]}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"detect-events"},"Detect Events"),(0,i.kt)("h2",{id:"trigger-an-event-on-a-sub-component-that-will-get-raised-to-the-parent-component"},"Trigger an event on a sub-component, that will get raised to the parent component"),(0,i.kt)("h3",{id:"setup-event-flow"},"Setup event flow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The parent component is listening for an event on the child component.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When that event is raised by the child, the parent component will call the appropriate method."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"it('should call method on ParentComponent when the ChildComponent\\'s button is clicked', () => {\n    mockService.method.and.returnValue(of(data));\n\n    // Run ngOnInit\n    fixture.detectChanges();\n})\n")),(0,i.kt)("h3",{id:"get-a-handle-on-all-child-components"},"Get a handle on all child components"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A component is a subclass of a directive."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"By.directive")," will find elements that have components on them, as well as directive decorators and attributes."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Within it()\nconst childComponents = fixture.debugElement\n    .queryAll(\n    By.directive(ChildComponent)\n    )\n\n// Check that the event-trigegred method is called\nspyOn(fixture.componentInstance, 'mockMethod');\n\n// Now we can call the event\nchildComponents[0].query(By.css('button'))\n.triggerEventHandler('click', { mockMethod: () => {} })\n\n// Expect the method to be called with specific data\nexpect(fixture.componentInstance.method)\n    .toHaveBeenCalledWith('expected data');\n")),(0,i.kt)("h2",{id:"emit-event-from-sub-component"},"Emit event from sub-component"),(0,i.kt)("p",null,"This can be done in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Emit the event from the component."),(0,i.kt)("li",{parentName:"ol"},"Raise the eent through the child componen'ts ",(0,i.kt)("inlineCode",{parentName:"li"},"debugElement"),".")),(0,i.kt)("h3",{id:"tell-the-component-to-emit-the-event"},"Tell the component to emit the event"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\n(<ParentComponent>childComponents[0].componentInstance).method.emit(undefined);")),(0,i.kt)("h3",{id:"trigger-the-event-directly"},"Trigger the event directly"),(0,i.kt)("p",null,"We don't know if the child component has this event emitter, we are just telling the ",(0,i.kt)("inlineCode",{parentName:"p"},"debugElement")," for the child component to raise the event."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"childComponent.triggerEventHandler('method', null);")))}m.isMDXComponent=!0}}]);