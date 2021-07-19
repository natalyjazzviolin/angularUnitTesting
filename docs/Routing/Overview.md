---
sidebar_position: 1
---

## Guidelines

1. Assume that the framework works correctly.
2. Test that you are interacting with the framework correctly.

### Setup the TestBed object

```javascript
import { TestBed } from "@angular/core/testing";

describe('MyComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
           declarations: [MyComponent],
           providers: [
               // Services go in here
               ]
        })
    })
})
```

### Mock the services
```javascript
// Within describe
let mockActivedRoute, mockService, fixture

// Within beforeEach
mockService = jasmine.createSpyObj(['getObject']);
mockActivatedRoute = {
    snapshot: { paramMap: { get: () => { return '1'; }}}
}

// Within TestBed providers: []
{ provide: ActivatedRoute, useValue: mockActivatedRoute},
{ provide: Service, useValue: mockService},
```

### Create the component fixture

`fixture = TestBed.createComponent(MyComponent);`
