---
sidebar_position: 8
---

# Detect Events

## Trigger an event on a sub-component, that will get raised to the parent component

### Setup event flow

1. The parent component is listening for an event on the child component.

2. When that event is raised by the child, the parent component will call the appropriate method.

```javascript
it('should call method on ParentComponent when the ChildComponent\'s button is clicked', () => {
    mockService.method.and.returnValue(of(data));

    // Run ngOnInit
    fixture.detectChanges();
})
```

### Get a handle on all child components

:::info

A component is a subclass of a directive.

`By.directive` will find elements that have components on them, as well as directive decorators and attributes.

:::

```javascript
// Within it()
const childComponents = fixture.debugElement
    .queryAll(
    By.directive(ChildComponent)
    )

// Check that the event-trigegred method is called
spyOn(fixture.componentInstance, 'mockMethod');

// Now we can call the event
childComponents[0].query(By.css('button'))
.triggerEventHandler('click', { mockMethod: () => {} })

// Expect the method to be called with specific data
expect(fixture.componentInstance.method)
    .toHaveBeenCalledWith('expected data');
```

## Emit event from sub-component

Research this more and write notes.


