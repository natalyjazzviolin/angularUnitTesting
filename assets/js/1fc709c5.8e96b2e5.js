(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[727],{9401:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:7},l="Integration Testing Services",c={unversionedId:"integration-testing-services",id:"integration-testing-services",isDocsHomePage:!1,title:"Integration Testing Services",description:"Services do not have templates, so an isolated test goes through all the code in a service.",source:"@site/docs/integration-testing-services.md",sourceDirName:".",slug:"/integration-testing-services",permalink:"/angularUnitTesting/docs/integration-testing-services",editUrl:"https://github.com/natalyjazzviolin/angularUnitTesting/blob/main/docs/integration-testing-services.md",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Deep Integration Basics",permalink:"/angularUnitTesting/docs/deep-integration-test-tutorial"},next:{title:"Detect Events",permalink:"/angularUnitTesting/docs/trigger-event"}},d=[{value:"Why use an integration test for a service?",id:"why-use-an-integration-test-for-a-service",children:[]},{value:"No declration section needed",id:"no-declration-section-needed",children:[]},{value:"Look at the service constructor",id:"look-at-the-service-constructor",children:[{value:"Import the built-in mock HTTP service",id:"import-the-built-in-mock-http-service",children:[]},{value:"Make a mock service",id:"make-a-mock-service",children:[]}]},{value:"Write a test for a service that uses an HTTP client",id:"write-a-test-for-a-service-that-uses-an-http-client",children:[{value:"Get a handle on services",id:"get-a-handle-on-services",children:[]}]},{value:"Make a call to the mock HTTP service",id:"make-a-call-to-the-mock-http-service",children:[]}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integration-testing-services"},"Integration Testing Services"),(0,r.kt)("p",null,"Services do not have templates, so an isolated test goes through all the code in a service."),(0,r.kt)("h2",{id:"why-use-an-integration-test-for-a-service"},"Why use an integration test for a service?"),(0,r.kt)("p",null,"Reason one - HTTP. Creating a mock HTTP service is complicated, but Angular provides a ready-made mock HTTP service within the scope of integration tests."),(0,r.kt)("h2",{id:"no-declration-section-needed"},"No declration section needed"),(0,r.kt)("p",null,"When testing a service a declaration section is not needed within the TestBed object because we are not in fact testing any components. Just the providers section is needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"TestBed.configureTestingModule({\n    declaration: [\n        // Not needed, no components being tested.\n    ],\n    providers: [\n        ThisService\n    ]\n})\n")),(0,r.kt)("h2",{id:"look-at-the-service-constructor"},"Look at the service constructor"),(0,r.kt)("p",null,"If there is an HTTP service - Angular will provide a mock service to replace it."),(0,r.kt)("h3",{id:"import-the-built-in-mock-http-service"},"Import the built-in mock HTTP service"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At the top import the client and controller:\n",(0,r.kt)("inlineCode",{parentName:"p"},'import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then in imports inside the TestBed object:\n",(0,r.kt)("inlineCode",{parentName:"p"},"imports: [ HttpClientTestingModule ]"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create Http controller variable:\n",(0,r.kt)("inlineCode",{parentName:"p"},"let httpTestingController: HttpTestingController"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give a handle to the Http cntroller:\n",(0,r.kt)("inlineCode",{parentName:"p"},"httpTestingController = TestBed.get(HttpTestingController);")))),(0,r.kt)("p",null,"If there is another type of service - we need to make a mock service."),(0,r.kt)("h3",{id:"make-a-mock-service"},"Make a mock service"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make a Jasmine Spy Object\n",(0,r.kt)("inlineCode",{parentName:"p"},"mockService = jasmine.createObj(['method']);"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Include mock service in the providers array:\n",(0,r.kt)("inlineCode",{parentName:"p"},"{ provide: RealService, useValue: mockService }")))),(0,r.kt)("h2",{id:"write-a-test-for-a-service-that-uses-an-http-client"},"Write a test for a service that uses an HTTP client"),(0,r.kt)("h3",{id:"get-a-handle-on-services"},"Get a handle on services"),(0,r.kt)("p",null,"There are two different ways to handle a mock service to be able to call methods on it within the it funciton."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the same procedure as with the HTTP sevice - create variable, then assign it to ",(0,r.kt)("inlineCode",{parentName:"p"},"TestBed.get(mockService)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use a special inject function provided by Angular:"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'import { inject } from "@angular/core/testing";')),(0,r.kt)("p",null,"The inject function takes in two parameters -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A list of depency types that we want to get a handle to."),(0,r.kt)("li",{parentName:"ol"},"A callback function that will receive those types.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"describe('getData',() => {\n    it('should call get with the correct URL',\n    inject([ RealService ], (service: RealService) => {\n\n        service.getData(4).subscribe();\n    })\n})\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is inadvisable to mix the two methods - either use ",(0,r.kt)("inlineCode",{parentName:"p"},"TestBed.get()")," or use the injection funciton."))),(0,r.kt)("h2",{id:"make-a-call-to-the-mock-http-service"},"Make a call to the mock HTTP service"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".expectOne()")," method lets the HTTP controller know that a request is being made."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Within an it function\nhttpTestingController.expectOne('/api/data/4')\n\n// Tell the mock HTTP client what data we want returned\nreq.flush({ id:4, data: 'string', otherdata: 'string' });\n\n// Verify that we only got the expected data\nhttpTestingController.verify();\n")))}h.isMDXComponent=!0}}]);