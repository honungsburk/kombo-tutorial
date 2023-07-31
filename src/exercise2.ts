import * as P from "@honungsburk/kombo/Simple";
import { Parser } from "@honungsburk/kombo/Simple";
import type { JsonValue, JsonObject, JsonArray } from "./types.js";

/**
 * Now for something a bit more challenging!
 *
 * In this exercise you will implement a JSON parser. To do this you will need to
 * implement a number of parsers that can parse the different parts of the
 * JSON specification. Having a look at the McKeeman Form (which JSON is defined by)
 * should also be of help. Of course there is an extensive test suit you can lean
 * on!
 *
 * Happy coding! :)
 *
 *
 * Links:
 * - [McKeeman Form](https://www.crockford.com/mckeeman.html)
 * - [JSON Spec](https://www.json.org/json-en.html)
 * - [Kombo Docs](https://frankhampusweslien.com/kombo/)
 */

// Null

/**
 * Parse null
 *
 * Difficulty: Very Easy
 */
export const nullParser: Parser<null> = P.problem("Not implemented");

// Bool

/**
 * Parse a boolean
 *
 * Difficulty: Easy
 */
export const boolParser: Parser<boolean> = P.problem("Not implemented");

// Number

/**
 * Parse a number
 *
 * Difficulty: Hard
 */
export const numberParser: Parser<number> = P.problem("Not implemented");

// String

/**
 * Parse a unicode hex. (Used in the stringParser)
 *
 * Note: I have given you the succeed parser, but you need to implement the
 * rest yourself.
 *
 */
export const unicodeParser: Parser<string> = P.succeed((s: string) =>
  String.fromCodePoint(parseInt(s, 16))
).apply(P.problem("Not implemented"));

/**
 * Parse an escaped character.
 *
 * Note: The unicode parser should be used in the escape parser.
 */
export const escapeParser: Parser<string> = P.problem("Not implemented");

/**
 * Parse a String
 *
 * Difficulty: Hard
 */
export const stringParser: Parser<string> = P.problem("Not implemented");

// Whitespace

/**
 * Parse whitespace
 *
 * Difficulty: Easy
 */
export const whitespaceParser: Parser<false> = P.problem("Not implemented");

// Value

/**
 * Parse any JSON value
 *
 * Difficulty: Medium
 */
export const valueParser: Parser<JsonValue> = P.problem("Not implemented");

// Object

/**
 * Parse a JSON object
 *
 * Difficulty: Medium
 */
export const objectParser: Parser<JsonObject> = P.problem("Not implemented");

// Array

/**
 * Parse a JSON array
 *
 * Difficulty: Easy
 */
export const arrayParser: Parser<JsonArray> = P.problem("Not implemented");
