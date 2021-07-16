---
sidebar_position: 6
---

# Deep Integration Basics

### Use real child components

In this type of test real child components are used, not mock ones, because we need to test their interaction.

### Use mock services

Keep using mock services, just like in shallow integration tests.

```javascript
TestBed.configureTestingModule({
    declarations: [
        ParentComponent,
        ChildComponent
    ],
    providers: [
        // Services
    ]
})

```

### Avoid template parse errors

Use `schemas: [NO_ERRORS_SCHEMA]` to avoid template parse errors. It goes in right after `providers`.

### Initialize components

`fixture.detectChanges()` initializes the component and all its children. It also causes the lifecycle hooks to run. Without it, the component is not initialized.

## Detect Child Element Creation

### Get all component nodes

This pinpoints all component nodes.
```javascript
let childComponentDEs =
    fixture.debugElement.queryAll(By.directive(ChildComponent));
```

### Check if elements are correct

```javascript
expect(
    childComponentDEs[0]
    .componentInstance
    .element
    .property
    ).toEqual('Expected Value');
```


