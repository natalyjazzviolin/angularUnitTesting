---
sidebar_position: 3
---

# Async helper function

This function is built for use with promises.

Angular does not use promises (they were used in AngularJS, but they may pop-up in 3rd party libraries).

### Turn debounce funciton into promise function

Save function form previous pages re-written using a promise:
```javascript
save(): void {
    var promise = new Promise((resolve) => {
        this.MyService.updateObject(this.object)
            .subscribe(() => this.goBack());
            resolve();
    });
}
```

### Write new test

`import async from '@angular/core/testing'`, not 'q'

```javascript
// Within descirbe
it('should do something', async(() => {
    mockService.updateObject.and.returnValue(of({}));
    fixture.detectChanges();
    fixture.componentInstance.save();

    // This returns a promise that resolves only when
    // all promises within the ocmponent have been resolved.
    fixture.whenStabel()
    expect(mockService.updateObject).toHaveBeenCalled();
}))
```
