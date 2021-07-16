---
sidebar_position: 7
---

# Integration Testing Services

Services do not have templates, so an isolated test goes through all the code in a service.

## Why use an integration test for a service?

Reason one - HTTP. Creating a mock HTTP service is complicated, but Angular provides a ready-made mock HTTP service within the scope of integration tests.

## No declration section needed

When testing a service a declaration section is not needed within the TestBed object because we are not in fact testing any components. Just the providers section is needed.

```javascript
TestBed.configureTestingModule({
    declaration: [
        // Not needed, no components being tested.
    ],
    providers: [
        ThisService
    ]
})
```

## Look at the service constructor

If there is an HTTP service - Angular will provide a mock service to replace it.

### Import the built-in mock HTTP service

1. At the top import the client and controller:
`import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";`

2. Then in imports inside the TestBed object:
`imports: [ HttpClientTestingModule ]`

3. Create Http controller variable:
`let httpTestingController: HttpTestingController`

4. Give a handle to the Http cntroller:
`httpTestingController = TestBed.get(HttpTestingController);`


If there is another type of service - we need to make a mock service.

### Make a mock service

1. Make a Jasmine Spy Object
`mockService = jasmine.createObj(['method']);`

2. Include mock service in the providers array:
`{ provide: RealService, useValue: mockService }`

## Write a test for a service that uses an HTTP client

### Get a handle on services

There are two different ways to handle a mock service to be able to call methods on it within the it funciton.
1. Follow the same procedure as with the HTTP sevice - create variable, then assign it to `TestBed.get(mockService)`

2. Use a special inject function provided by Angular:

`import { inject } from "@angular/core/testing";`

The inject function takes in two parameters -
1. A list of depency types that we want to get a handle to.
2. A callback function that will receive those types.

```javascript
describe('getData',() => {
    it('should call get with the correct URL',
    inject([ RealService ], (service: RealService) => {

        service.getData(4).subscribe();
    })
})
```
:::caution

It is inadvisable to mix the two methods - either use `TestBed.get()` or use the injection funciton.

:::

## Make a call to the mock HTTP service

The `.expectOne()` method lets the HTTP controller know that a request is being made.

```javascript
// Within an it function
httpTestingController.expectOne('/api/data/4')

// Tell the mock HTTP client what data we want returned
req.flush({ id:4, data: 'string', otherdata: 'string' });

// Verify that we only got the expected data
httpTestingController.verify();
```
