---
sidebar_position: 4
---

# Test RouterLink

:::info
This builds on top of the previous page. The test is written within the previous describe function.
:::

```javascript
// Within describe
it('should have the correct route for the first object', () => {
    mockService.getData.and.returnValues(of(DATA));
    fixture.detectChanges();
    const childComponents =
        fixture
        .debugElement
        .queryAll(By.directive(MyComponent));

    // Get the debugElement for the HTML tag
    // that has the routerLink on it.
    let routerLink = childComponent[0]
        .query(By.directive(RouterLinkDirectiveStub))
        .injector.get(RouterLinkDirectiveStub)
        // get RouterLink instance

    childComponents[0].query(By.css('<tag>'))
        .triggerEventHandler('click', null);

    expect(routerLink.navigatedTo).toBe('expected/url')
})
```
