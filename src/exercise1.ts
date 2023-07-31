import { Parser } from "@honungsburk/kombo/Simple";
import * as P from "@honungsburk/kombo/Simple";

/**
 * One simple way to represent a color is as an object with three numbers.
 * Each number represents the intensity of the color red, green and blue.
 * The numbers are in the range 0-255.
 */
type Color = { r: number; g: number; b: number };

////////////////////////////////////////////////////////////////////////////////
// HEX
////////////////////////////////////////////////////////////////////////////////

/**
 * When writing a parser it is often useful to break it down into smaller
 * parsers and then combine them together.
 *
 * In this case we want to parse a hex digit. A hex digit is a digit in the
 * range 0-9, a-f or A-F.
 *
 * We can use the chompIf parser to parse a single character if it is a hex digit, otherwise it fails.
 * Chomping means that the parser will consume the character if it matches.
 * To then get the character we can use the getChompedString method, that takes
 * the chomped character and returns it as a string.
 *
 */
export const hexDigitParser: Parser<string> = P.chompIf(
  (c: string) =>
    (c >= "0" && c <= "9") || (c >= "a" && c <= "f") || (c >= "A" && c <= "F")
).getChompedString();

/**
 * A hex color component is two hex digits.
 * We can use the hexDigitParser to parse two hex digits and then combine them
 * into a single number.
 *
 * We can use the succeed parser to create a parser that always succeeds with
 * the given value, here a function that takes two strings and tries to parse
 * them as a hex number.
 *
 * We can use the apply method to apply the `hexDigitParser` to each of the arguments.
 *
 * Note: You should never throw an error in a parser. If you want to fail you should use the
 * fail parser. Here we are safe since the `hexDigitParser` only returns hex digits.
 */
export const hexColorComponentParser: Parser<number> = P.succeed(
  (s1: string) => (s2: string) => parseInt(s1 + s2, 16)
)
  .apply(hexDigitParser)
  .apply(hexDigitParser);

/**
 * A hex color is three hex color components prefixed with a hash. We can use
 * the succeed parser combine the three color components into a single color.
 *
 * First we need to check for the hash. We can use the token parser to parse
 * the hash and then ignore the result by using `skip`. Then we can use the
 * apply method to apply the `hexColorComponentParser` to each of the arguments.
 *
 */
export const hexColorParser: Parser<Color> = P.succeed(
  (r: number) => (g: number) => (b: number) => ({ r, g, b })
)
  .skip(P.token("#"))
  .apply(hexColorComponentParser)
  .apply(hexColorComponentParser)
  .apply(hexColorComponentParser);

////////////////////////////////////////////////////////////////////////////////
// RGB
////////////////////////////////////////////////////////////////////////////////

/**
 * Now it is your turn to write a parser for a color in the RGB format.
 *
 * The RGB format is three numbers in the range 0-255 separated by commas.
 *
 * Example: rgb(255, 255, 255)
 *
 * There can be any number of spaces between the numbers and the commas.
 *
 * Example: rgb(255, 255,       255)
 *
 * but no newlines. If a number is outside the range 0-255 the parser should fail.
 *
 * Good luck! :)
 *
 * ps. there are tests for this parser in the exercise.spec.ts file.
 *
 * Links:
 * - [Kombo Docs](https://frankhampusweslien.com/kombo/)
 */

/**
 * Parse a color in the RGB format.
 *
 * Note: DO NOT REANME THIS PARSER. The tests depend on the name.
 */
export const rgbColorParser: Parser<Color> = P.problem("Not implemented");
