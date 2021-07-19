---
sidebar_position: 9
---

# Interact with Input Boxes

Raising events through interactions with buttons/input boxes/etc. is something that can be done in shallow as well as in deep integration tests.

```javascript
// Within describe funciton
it('should add a new object to the list when th add button is clicked', () => {
    mockService.getData.and.returnValues(of(DATA));
    // Calls ngOnInit(); input changes will not
    // be detected without this
    fixture.detectChanges();
    const name = "Django Reinhardt";
    mockService.addObject.and.returnValue(of({id:5, name: name, instrument: 'guitar'}));
    // By.css('input') works assuming there is only one input element
    const inputElement =
        fixture
        .debugElement
        .query(By.css('input'))
        .nativeElement;
    const addButton =
        fixture
        .debugElement
        .queryAll(By.css('button'))[0];

    inputElement.value = name;
    // We only need the debugElement because we're using triggerEventHandler
    // Pass in null for the event obj because it doesn't matter
    addButton.trigerEventHandler('click', null);

    fixture.detectChanges();

    // Check that the object name has been updated in the HTML ul
    const objText =
        fixture
        .debugElement
        .query(By.css('ul'))
        .nativeElement
        .textContent;

    expect(objText).toContain(name);

})
```
