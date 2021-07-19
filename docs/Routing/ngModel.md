---
sidebar_position: 2
---

# Test ngModel

```javascript
// Within describe

beforeEach(() => {
    // Setup the component with TestBed...
    fixture = TestBed.createComponent(MyCOmponent);
    mockService.getObject.and
        .returnValue(of({
            id: 1,
            name: 'Django Reinhardt',
            instrument: 'guitar'
        }))
})
it('should render object name in a h2 tag', () => {
    // Initialize change detection to update bindings
    // Act
    fixture.detectChanges();

    // Assert
    expect(fixture.nativeElement.querySelector('h2').textContent)
        .toContain('Django Reinhardt')
})
```

### Cannot bind to ngModel

:::info
An error that can come up is - cannot bind to ngModel

This can happen because the ngModule comes from a different component.
:::

A quick fix for this would be to import the module that is using ngModel.
