---
sidebar_position: 3
---

# Mock RouterLink

## RouterLink in child component

If there is a router link in the template of the child component, it will cause an error in Karma.

### Create mock RouterLnk directive

```javascript
// Before describe
@Directive({
    selector: '[routerLink]'
    host: { '(click)': 'onClick()' }
})
export class RouterLinkDirectiveStub {
    // Watch the click event of the DOM element
    // that this router link is on.
    // When it fires we need to store what the path was set to
    @Input('value of routerLink attribute') linkParams: any;
    navigatedTo: any = null;

    onClick() {
        this.navigatedTo = this.linkParams;
    }
}
```

### Add mock RouterLink directive to modules list
```javascript
// Within describe, within beforeEach()
TestBed.configureTestingModule({
    declarations: [
        ...
        RouterLinkDirectiveStub
        ...
    ]
})
```
