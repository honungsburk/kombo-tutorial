import { test } from "@japa/runner";
import { Parser } from "@honungsburk/kombo/Parser";

/**
 * Test parsers that should succeed on the given input.
 */
export const testSuccessBuilder =
  <A, CTX, PROBELM>(parser: Parser<A, CTX, PROBELM>) =>
  (description: string, input: string, expected: A) => {
    return test(description, ({ expect }) => {
      const result = parser.run(input);
      expect(result.value).toStrictEqual(expected);
    });
  };

/**
 * Test parsers that should fail on the given input.
 */
export const testFailSimpleBuilder =
  <A, CTX, PROBELM>(parser: Parser<A, CTX, PROBELM>) =>
  (description: string, input: string) => {
    return test(description, ({ expect }) => {
      const result = parser.run(input);
      expect(result.kind).toEqual("Err");
    });
  };
