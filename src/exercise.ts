import * as P from "@honungsburk/kombo/Simple";
import { Parser } from "@honungsburk/kombo/Simple";
import type { JsonValue, JsonObject, JsonArray } from "./types.js";

// Null

/**
 * Parse null
 *
 * Difficulty: Very Easy
 */
export const nullParser: Parser<null> = undefined as any;

// Bool

/**
 * Parse a boolean
 *
 * Difficulty: Easy
 */
export const boolParser: Parser<boolean> = undefined as any;

// Number

/**
 * Parse a number
 *
 * Difficulty: Hard
 */
export const numberParser: Parser<number> = undefined as any;

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
) as any;

/**
 * Parse an escaped character.
 *
 * Note: The unicode parser should be used in the escape parser.
 */
export const escapeParser: Parser<string> = undefined as any;

/**
 * Parse a String
 *
 * Difficulty: Hard
 */
export const stringParser: Parser<string> = undefined as any;

// Whitespace

/**
 * Parse whitespace
 *
 * Difficulty: Easy
 */
export const whitespaceParser: Parser<false> = undefined as any;

// Value

/**
 * Parse any JSON value
 *
 * Difficulty: Medium
 */
export const valueParser: Parser<JsonValue> = undefined as any;

// Object

/**
 * Parse a JSON object
 *
 * Difficulty: Medium
 */
export const objectParser: Parser<JsonObject> = undefined as any;

// Array

/**
 * Parse a JSON array
 *
 * Difficulty: Easy
 */
export const arrayParser: Parser<JsonArray> = undefined as any;
