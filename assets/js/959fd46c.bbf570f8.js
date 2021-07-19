(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[527],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2423:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),s=["components"],o={sidebar_position:2},c="Write Async Test",l={unversionedId:"Async Tests/write-async-test",id:"Async Tests/write-async-test",isDocsHomePage:!1,title:"Write Async Test",description:"Working but slow test",source:"@site/docs/Async Tests/write-async-test.md",sourceDirName:"Async Tests",slug:"/Async Tests/write-async-test",permalink:"/angularUnitTesting/docs/Async Tests/write-async-test",editUrl:"https://github.com/natalyjazzviolin/angularUnitTesting/blob/main/docs/Async Tests/write-async-test.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/angularUnitTesting/docs/Async Tests/Overview"},next:{title:"Async helper function",permalink:"/angularUnitTesting/docs/Async Tests/async-helper-func"}},u=[{value:"Working but slow test",id:"working-but-slow-test",children:[]},{value:"Working and faster test with fakeAsync",id:"working-and-faster-test-with-fakeasync",children:[{value:"Fast forward the wait time with <code>tick()</code>",id:"fast-forward-the-wait-time-with-tick",children:[]},{value:"If waiting time unknown - use <code>flush()</code>",id:"if-waiting-time-unknown---use-flush",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"write-async-test"},"Write Async Test"),(0,a.kt)("h2",{id:"working-but-slow-test"},"Working but slow test"),(0,a.kt)("p",null,"The test below works, but it takes 250ms to do each test. This is slow and bad practice."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Within describe function\n\n// Add a 'done' parameter to show Jasmine that\n// this is async\nit('should call updateObject when save is called', (done) => {\n    mockService.updateObject.and.returnValue(of({}));\n    fixture.detectChanges();\n    fixture.componentInstance.save();\n\n    // Wait 250 ms\n    setTimeOut(() => {\n        expect(mockService.updateObject).toHaveBeenCalled();\n\n        // Test will wait until this code has run\n        done();\n    }, 250);\n})\n")),(0,a.kt)("h2",{id:"working-and-faster-test-with-fakeasync"},"Working and faster test with fakeAsync"),(0,a.kt)("p",null,"Angular has built-in tools to make these test faster, specifically the fakeAsync function."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import { fakeAsync} from '@angular/core/testing'")),(0,a.kt)("p",null,"Wrap the callback function in ",(0,a.kt)("inlineCode",{parentName:"p"},"it()")," in a ",(0,a.kt)("inlineCode",{parentName:"p"},"fakeAsync()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"it('should do something', fakeAsync(() => {\n    // everything else\n}))\n")),(0,a.kt)("h3",{id:"fast-forward-the-wait-time-with-tick"},"Fast forward the wait time with ",(0,a.kt)("inlineCode",{parentName:"h3"},"tick()")),(0,a.kt)("p",null,"Tick is imported from the same module as ",(0,a.kt)("inlineCode",{parentName:"p"},"fakeAsync()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"it('should do something', fakeAsync(() => {\n    // functions\n    // FF 250ms\n    tick(250);\n\n    // Now call expect()\n}))\n")),(0,a.kt)("h3",{id:"if-waiting-time-unknown---use-flush"},"If waiting time unknown - use ",(0,a.kt)("inlineCode",{parentName:"h3"},"flush()")),(0,a.kt)("p",null,"If the required waiting time is unknown, use ",(0,a.kt)("inlineCode",{parentName:"p"},"flush()")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"tick()")," to fast forward any wait times."))}d.isMDXComponent=!0}}]);