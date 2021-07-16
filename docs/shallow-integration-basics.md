---
sidebar_position: 5
---
# Shallow Integration Basics

## TestBed Object

TestBed is an object that creates a new module specifically for testing.
It takes a single parameter that's an object. This object exactly matches the layout of an app module:
* imports
* delarations
* providers
* bootstrap

```javascript
beforeEach(() => {
		TestBed.configureTestingModule({
		    declarations: [MyComponent]
	});

    // Create a test component
    TestBed.createComponent(MyComponent);
})
```
