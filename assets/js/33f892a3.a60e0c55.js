(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[748],{4091:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),s=["components"],o={sidebar_position:3},l="Syntax Basics",c={unversionedId:"Syntax Basics",id:"Syntax Basics",isDocsHomePage:!1,title:"Syntax Basics",description:"This is an overview of basic syntax for unit testing in Angular. More information can be found in the Jasmine Docs.",source:"@site/docs/Syntax Basics.md",sourceDirName:".",slug:"/Syntax Basics",permalink:"/angularUnitTesting/docs/Syntax Basics",editUrl:"https://github.com/natalyjazzviolin/angularUnitTesting/blob/main/docs/Syntax Basics.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setup & Best Practices",permalink:"/angularUnitTesting/docs/setup"},next:{title:"Isolated Unit Tests",permalink:"/angularUnitTesting/docs/isolated-unit-tests"}},u=[{value:"Basic Functions",id:"basic-functions",children:[{value:"describe( string, function )",id:"describe-string-function-",children:[]},{value:"beforeEach( function )",id:"beforeeach-function-",children:[]},{value:"it( string, function )",id:"it-string-function-",children:[]},{value:"expect( actual )",id:"expect-actual-",children:[]}]},{value:"Matchers",id:"matchers",children:[]}],p={toc:u};function d(t){var e=t.components,n=(0,i.Z)(t,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"syntax-basics"},"Syntax Basics"),(0,r.kt)("p",null,"This is an overview of basic syntax for unit testing in Angular. More information can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://jasmine.github.io/2.0/introduction"},"Jasmine Docs"),"."),(0,r.kt)("h2",{id:"basic-functions"},"Basic Functions"),(0,r.kt)("p",null,"The main functions are ",(0,r.kt)("inlineCode",{parentName:"p"},"describe()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"it()"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"expect()")," ."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"describe() is a wrapper around all other funcitons."),(0,r.kt)("li",{parentName:"ul"},"beforeEach() runs any basic setup before each test is conducted."),(0,r.kt)("li",{parentName:"ul"},"it() conducts the test"),(0,r.kt)("li",{parentName:"ul"},"expect() sets the expectations and returns a boolean value of pass or fail.")),(0,r.kt)("h3",{id:"describe-string-function-"},"describe( string, function )"),(0,r.kt)("p",null,"This is a Jasmine function that allows us to group tests together.\nIt takes two parameters - a string, and a callback function that contains all other functions within itself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"describe('ComponentName', () => {\n    // Everything else\n})\n")),(0,r.kt)("h3",{id:"beforeeach-function-"},"beforeEach( function )"),(0,r.kt)("p",null,"This function runs before each test. Less important setup  for the initial state should be moved in here. More critical setup should be in ",(0,r.kt)("inlineCode",{parentName:"p"},"it()"),". It takes one parameter - a callback funciton."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"beforeEach(() => {\n    // Reset the component, etc.\n    MyComponent = {};\n})\n")),(0,r.kt)("h3",{id:"it-string-function-"},"it( string, function )"),(0,r.kt)("p",null,"This function should contain the complete test story - someone reading the code should be able to look at this and understand what's going on without jumping around to other code blocks. Make sure to include ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/setup#tests-as-stories--their-structure"},"Arrange, Act, Assert")," within this function."),(0,r.kt)("p",null,"The convention is to start the string with 'should' to make printed messages more readable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"it(('should be true if true') => {\n    // Arrange\n    MyComponent.property = false;\n\n    //Act\n    MyComponent.property = true;\n\n    // Assert\n    expect(MyComponent.property).toBe(true);\n})\n")),(0,r.kt)("p",null,"On test completion prints: My component should be true if true."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To skip a test change ",(0,r.kt)("inlineCode",{parentName:"p"},"it()")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"xit()")))),(0,r.kt)("h3",{id:"expect-actual-"},"expect( actual )"),(0,r.kt)("p",null,"Expect functions take a value called an actual. Typically used alongside a matcher function. Together they return a boolean value that depicts the passing or failing of a spec."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"expect(doSomething).toEqual('expected result');\n")),(0,r.kt)("h2",{id:"matchers"},"Matchers"),(0,r.kt)("p",null,"Matchers are built-in functions in Jasmine that implement a boolean comparison between the actual value and the expected value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Keyword"),(0,r.kt)("th",{parentName:"tr",align:null},"Action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toEqual()"),(0,r.kt)("td",{parentName:"tr",align:null},"test for equality, uses property equivalence. Recommended for primitives.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toBe()"),(0,r.kt)("td",{parentName:"tr",align:null},"test for identity, uses strict equality ( === )")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toBeNull()"),(0,r.kt)("td",{parentName:"tr",align:null},"tests if ",(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toBeUndefined() and toBeDefined()"),(0,r.kt)("td",{parentName:"tr",align:null},"tests if ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toBeNaN()"),(0,r.kt)("td",{parentName:"tr",align:null},"tests if ",(0,r.kt)("inlineCode",{parentName:"td"},"NaN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toBeFalsy() and toBeTruthy()"),(0,r.kt)("td",{parentName:"tr",align:null},"test for falseness/truthfulness")))))}d.isMDXComponent=!0}}]);