---
sidebar_position: 2
---

# Write Async Test

## Working but slow test

The test below works, but it takes 250ms to do each test. This is slow and bad practice.

```javascript
// Within describe function

// Add a 'done' parameter to show Jasmine that
// this is async
it('should call updateObject when save is called', (done) => {
    mockService.updateObject.and.returnValue(of({}));
    fixture.detectChanges();
    fixture.componentInstance.save();

    // Wait 250 ms
    setTimeOut(() => {
        expect(mockService.updateObject).toHaveBeenCalled();

        // Test will wait until this code has run
        done();
    }, 250);
})
```

## Working and faster test with fakeAsync

Angular has built-in tools to make these test faster, specifically the fakeAsync function.

`import { fakeAsync} from '@angular/core/testing'`

Wrap the callback function in `it()` in a `fakeAsync()`:

```javascript
it('should do something', fakeAsync(() => {
    // everything else
}))
```
### Fast forward the wait time with `tick()`

Tick is imported from the same module as `fakeAsync()`

```javascript
it('should do something', fakeAsync(() => {
    // functions
    // FF 250ms
    tick(250);

    // Now call expect()
}))
```

### If waiting time unknown - use `flush()`

If the required waiting time is unknown, use `flush()` instead of `tick()` to fast forward any wait times.
