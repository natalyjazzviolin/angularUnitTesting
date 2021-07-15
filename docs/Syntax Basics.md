---
sidebar_position: 3
---

# Syntax Basics


This is an overview of basic syntax for unit testing in Angular. More information can be found in the [Jasmine Docs](https://jasmine.github.io/2.0/introduction).

## Basic Functions

The main functions are `describe()`, `beforeEach()`, `it()`, and `expect()` .

* describe() is a wrapper around all other funcitons.
* beforeEach() runs any basic setup before each test is conducted.
* it() conducts the test
* expect() sets the expectations and returns a boolean value of pass or fail.

### describe( string, function )

This is a Jasmine function that allows us to group tests together.
It takes two parameters - a string, and a callback function that contains all other functions within itself.

```javascript
describe('ComponentName', () => {
    // Everything else
})
```

### beforeEach( function )

This function runs before each test. Less important setup  for the initial state should be moved in here. More critical setup should be in `it()`. It takes one parameter - a callback funciton.
```javascript
beforeEach(() => {
    // Reset the component, etc.
    MyComponent = {};
})
```

### it( string, function )

This function should contain the complete test story - someone reading the code should be able to look at this and understand what's going on without jumping around to other code blocks. Make sure to include [Arrange, Act, Assert](http://localhost:3000/docs/setup#tests-as-stories--their-structure) within this function.

The convention is to start the string with 'should' to make printed messages more readable.
```javascript
it(('should be true if true') => {
    // Arrange
    MyComponent.property = false;

    //Act
    MyComponent.property = true;

    // Assert
	expect(MyComponent.property).toBe(true);
})
```

On test completion prints: My component should be true if true.

:::tip info

To skip a test change `it()` to `xit()`
:::

### expect( actual )
Expect functions take a value called an actual. Typically used alongside a matcher function. Together they return a boolean value that depicts the passing or failing of a spec.
```javascript
expect(doSomething).toEqual('expected result');
```

## Matchers

Matchers are built-in functions in Jasmine that implement a boolean comparison between the actual value and the expected value.


| Keyword | Action|
|--------|--------|
|toEqual()|test for equality, uses property equivalence. Recommended for primitives.|
|toBe()|test for identity, uses strict equality ( === )|
|toBeNull()|tests if `null`|
|toBeUndefined() and toBeDefined()|tests if `undefined` or not|
|toBeNaN()| tests if `NaN`|
|toBeFalsy() and toBeTruthy()|test for falseness/truthfulness|
