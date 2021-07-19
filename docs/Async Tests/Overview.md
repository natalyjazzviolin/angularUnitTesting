---
sidebar_position: 1
---

# Overview

There is no dire need for async code because observables don't need to be async.
There are three ways of writing async tests:
1. `done()` in Jasmine
2. `fakeAsync()` using Zone.js
3. `async()` - similar to avoid, but built for working with promises. Does not deal well with set timeouts.

## Write a basic debounce function.

```javascript
// Save function in component
// (hero-detail component in Angular exmaple project)
save(): void {
    debounce(() => {
        this.MyService.updateObject(this.object)
            .subscribe(() => this.goBack();)
    }, 250, false)();
}

// Debounce function for async testing
// Makes sure that another function doesn't
// get called too often
funciton debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (calllNow) func.apply(context, args);
    };
};
```
