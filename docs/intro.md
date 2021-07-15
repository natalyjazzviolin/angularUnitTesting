---
sidebar_position: 1
---

# General Overview

Automated testing in Angular is done using Karma and Jasmine.

[**Karma**](https://karma-runner.github.io/latest/index.html) is a tool that spawns a web server that executes source code against test code for each of the browsers connected. The results of each test against each browser are examined and displayed via the command line to the developer such that they can see which browsers and tests passed or failed.

[**Jasmine**](https://jasmine.github.io/) is an open-source testing framework for JavaScript. It aims to run on any JavaScript-enabled platform, not intrude on the application nor the IDE, and to have easy-to-read syntax. It is heavily influenced by other unit testing frameworks, such as ScrewUnit, JSSpec, JSpec, and RSpec.

## Important Definitions

| Keyword           | Definition|
|--------------------|-----------|
| End to end testing| Performed on a live, running application.|
|Unit testing | Done against a single unit of code (usually a class). |
|Integration & functional testing | Testing performed on more than a unit, less than the complete application. |
|**Angular** Integration Testing | Uses special tooling that checks that the component and template work correctly together. There is debate whether this is a traditional unit test or not. Specific to Angular.|
|Mocking | The process of drawing a 'boundary' around the component by using mock data instead of actual APIs. |
|Dummy Mock| A mock object used in place of a real object. |
| Stub Mock | A mock object with controllable behavior.|
|Spy Mock| A mock object that keeps track of which/how many/parameters were called|
| True Mock | A more complex mock object that can verify that it was used in a specific way. They can make checks on themselves.|
|Isolated Test| A single unit is exercised - a class of a component/service/pipe. This is constructed by hand and parameters are set manually.|
|Integration Test | Used to test a component and the interaction with its template.|
|Shallow Integration Test | A single component is tested, child components are mocked.|
|Deep Integration Test | Parent and child components, as well as their interaciton, are both tested.|


