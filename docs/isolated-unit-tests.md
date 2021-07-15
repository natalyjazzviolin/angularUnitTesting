---
sidebar_position: 4
---

# Isolated Unit Tests

Isolated unit tests check an instance of a class without using any dependencies or injected values. A component is a class, so this type of test is conducted on a single component.

## Testing a Pipe

```javascript
describe('PipeName', () => {

	it('should display this if that', () => {
		let pipe = new PipeName();

		expect(pipe.doSomething).toEqual('expected value');
	})
})
```

## Testing a Service

```javascript
describe('ServiceName', () => {
	let service: TypeOfService;

	// Make sure there is a new service before each test
	beforeEach(() => {
		service = new TypeOfService();
	})

	it('should perform this service', () => {

		expect(service.property.method).toBe(expected value);
	})

})
```

## Testing a Component with a Mock Service

```javascript
describe('MyComponent', () => {
	let component: MyComponent;
	let DATA;

	// Define mock service
	let mockService;

	beforeEach(() => {
		DATA = [
			{id:1, section:'violin_one', contracted: 'true'},
			{id:2, section:'violin_two', contracted: 'false'},
			{id:3, section:'viola', contracted: 'false'},
			{id:4, section:'cello', contracted: 'true'}
		]

		// Initialize mock service with a delete method
		mockService = jasmine.createSpyObj(['delete'])

		component = new MyComponent(mockService);
	})

	// Nested describe for service method
	describe('delete', () => {
		mockService.delete.and.returnValue(of(expected value))
		component.dataArr = DATA;

		component.delete(DATA[2])	;

		expect(component.dataArr.length).toBe(3);
	})
})
```

## Testing Interactions

```javascript
// Within a describe function for component
it('should call this method', () => {
	mockService.delete.and.returnValue(of(expected value))
		component.dataArr = DATA;

		component.delete(DATA[2])	;

		expect(mockService.delete).toHaveBeenCalled();
})
```
