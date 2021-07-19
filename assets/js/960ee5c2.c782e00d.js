(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[56],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4442:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:4},s="Isolated Unit Tests",l={unversionedId:"isolated-unit-tests",id:"isolated-unit-tests",isDocsHomePage:!1,title:"Isolated Unit Tests",description:"Isolated unit tests check an instance of a class without using any dependencies or injected values. A component is a class, so this type of test is conducted on a single component.",source:"@site/docs/isolated-unit-tests.md",sourceDirName:".",slug:"/isolated-unit-tests",permalink:"/angularUnitTesting/docs/isolated-unit-tests",editUrl:"https://github.com/natalyjazzviolin/angularUnitTesting/blob/main/docs/isolated-unit-tests.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Syntax Basics",permalink:"/angularUnitTesting/docs/Syntax Basics"},next:{title:"Shallow Integration Basics",permalink:"/angularUnitTesting/docs/shallow-integration-basics"}},p=[{value:"Testing a Pipe",id:"testing-a-pipe",children:[]},{value:"Testing a Service",id:"testing-a-service",children:[]},{value:"Testing a Component with a Mock Service",id:"testing-a-component-with-a-mock-service",children:[]},{value:"Testing Interactions",id:"testing-interactions",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"isolated-unit-tests"},"Isolated Unit Tests"),(0,o.kt)("p",null,"Isolated unit tests check an instance of a class without using any dependencies or injected values. A component is a class, so this type of test is conducted on a single component."),(0,o.kt)("h2",{id:"testing-a-pipe"},"Testing a Pipe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"describe('PipeName', () => {\n\n    it('should display this if that', () => {\n        let pipe = new PipeName();\n\n        expect(pipe.doSomething).toEqual('expected value');\n    })\n})\n")),(0,o.kt)("h2",{id:"testing-a-service"},"Testing a Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"describe('ServiceName', () => {\n    let service: TypeOfService;\n\n    // Make sure there is a new service before each test\n    beforeEach(() => {\n        service = new TypeOfService();\n    })\n\n    it('should perform this service', () => {\n\n        expect(service.property.method).toBe(expected value);\n    })\n\n})\n")),(0,o.kt)("h2",{id:"testing-a-component-with-a-mock-service"},"Testing a Component with a Mock Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"describe('MyComponent', () => {\n    let component: MyComponent;\n    let DATA;\n\n    // Define mock service\n    let mockService;\n\n    beforeEach(() => {\n        DATA = [\n            {id:1, section:'violin_one', contracted: 'true'},\n            {id:2, section:'violin_two', contracted: 'false'},\n            {id:3, section:'viola', contracted: 'false'},\n            {id:4, section:'cello', contracted: 'true'}\n        ]\n\n        // Initialize mock service with a delete method\n        mockService = jasmine.createSpyObj(['delete'])\n\n        component = new MyComponent(mockService);\n    })\n\n    // Nested describe for service method\n    describe('delete', () => {\n        mockService.delete.and.returnValue(of(expected value))\n        component.dataArr = DATA;\n\n        component.delete(DATA[2])   ;\n\n        expect(component.dataArr.length).toBe(3);\n    })\n})\n")),(0,o.kt)("h2",{id:"testing-interactions"},"Testing Interactions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Within a describe function for component\nit('should call this method', () => {\n    mockService.delete.and.returnValue(of(expected value))\n        component.dataArr = DATA;\n\n        component.delete(DATA[2])   ;\n\n        expect(mockService.delete).toHaveBeenCalled();\n})\n")))}d.isMDXComponent=!0}}]);