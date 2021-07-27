export class AssertionError extends Error {
  constructor(message = "Assertion failed") {
    super(message);
  }
}

export class TestError extends Error {
  constructor(message = "Test failed") {
    super(message);
  }
}

export function assertEq<T>(left: T, right: T, message?: string): void {
  if (left !== right) throw new AssertionError(message);
}

export function arrayAssert<T>(left: T[], right: T[], message?: string): void {
  if (left.length !== right.length) throw new AssertionError(message || "Assertion failed due to mismatched length");
  for (let i = 0; i < left.length; i++) {
    assertEq(left[i], right[i], message);
  }
}

export function assertNeq<T>(left: T, right: T, message?: string): void {
  if (left === right) throw new AssertionError(message);
}

export interface TestResult<T> {
  toBe: (n: T) => void;
  instaceOf: (n: new () => unknown) => void;
}

export function test<T>(fn: T, message?: string): TestResult<T> {
  return {
    toBe: (n: T) => {
      if (fn !== n) throw new TestError(message);
    },

    instaceOf: (n: new () => unknown) => {
      if (fn instanceof n) throw new TestError(message);
    },
  }
}