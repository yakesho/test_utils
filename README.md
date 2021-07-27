# `test_utils`
A simple library do your testing

## Installation
```sh
$ deno install https://deno.land/x/test_utils/mod.ts
```

## Example
```ts
import { assertEq } from "https://deno.land/x/test_utils/mod.ts";
assertEq(2, 2);                        // Works
assertEq(3, 0, "This will fail");      // Throw error
```
```ts
import { arrayAssert } from "https://deno.land/x/test_utils/mod.ts";
arrayAssert([], []);                 // Works
arrayAssert([], [1]);                // Throw error since mismatched length
arrayAssert([0], [0]);               // Works
```
```ts
import { test } from "https://deno.land/x/test_utils/mod.ts";

function add(x: number, y: number): number {
  return x + y;
}

test(add(1, 2)).toBe(3);             // Works
test(add(1, 2)).instanceOf(Number);  // Works
```

## API
### Function
* `assertEq(left, right [, message])`
```ts
function assertEq<T>(left: T, right: T, message?: string): void
```
Throws an `AssertionError` if the result is truthy

* `assertNeq(left, right [, message])`
```ts
function assertNeq<T>(left: T, right: T, message?: string): void
```
Throws an `AssertionError` if the result is falsy

* `arrayAssertEq(left, right [, message])`
```ts
function arrayAssert<T>(left: T[], right: T[], message?: string): void
```
Throws an `AssertionError` if `left[i]` is not the same as `right[i]`

* `test(fn)`
```ts
function test<T>(fn): TestResult<T>
```
Returns a `TestResult<T>`

### Class
* `AssertionError`
```ts
class AssertionError extends Error
```
Extension of the `Error` class

* `TestError`
```ts
class TestError extends Error
```
Extension of the `Error` class

### Interface
* `TestResult<T>`
```ts
interface TestResult<T> {
  toBe: (n: T) => void;
  instaceOf: (n: new () => unknown) => void;
}
```

## License
This project is licensed under the **MIT License**. Read more [here](./LICENSE)