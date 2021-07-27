import { assertEq, arrayAssert, test } from "./mod.ts";

Deno.test("assert()", () => {
  assertEq(1, 1);
  assertEq(2, 2);
  assertEq("number", "number");
});

Deno.test("arrayAssert()", () => {
  arrayAssert([0, 0], [0, 0]);
  arrayAssert(["abc", 0], ["abc", 0]);
  arrayAssert([], []);
});

Deno.test("test()", () => {
  const add = (x: number, y: number): number => x + y;

  test(add(1, 2)).toBe(3);
  test(add(2, 0)).instaceOf(Number);
});