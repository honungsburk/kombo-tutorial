import { test, Group } from "@japa/runner";
import * as exercise from "./exercise1.js";
import { testFailSimpleBuilder, testSuccessBuilder } from "./specHelpers.js";

// Helper to add common taggs to all tests in a group.
function group(name: string, fn: (group: Group) => void) {
  return test.group(name, (group: Group) => {
    fn(group);
    group.tests.forEach((t) => t.tags(["ex1"], "append"));
  });
}

////////////////////////////////////////////////////////////////////////////////
// RGB
////////////////////////////////////////////////////////////////////////////////

const testRGBColorParserSuccess = testSuccessBuilder(exercise.rgbColorParser);
const testRGBColorParserFail = testFailSimpleBuilder(exercise.rgbColorParser);

group("rgbColorParser", (group: Group) => {
  // Success
  testRGBColorParserSuccess("parses rgb(0, 0, 0)", "rgb(0, 0, 0)", {
    r: 0,
    g: 0,
    b: 0,
  });
  testRGBColorParserSuccess("parses rgb(255, 255, 255)", "rgb(255, 255, 255)", {
    r: 255,
    g: 255,
    b: 255,
  });
  testRGBColorParserSuccess("parses rgb(255, 0, 0)", "rgb(255, 0, 0)", {
    r: 255,
    g: 0,
    b: 0,
  });
  testRGBColorParserSuccess("parses rgb(0, 255, 0)", "rgb(0, 255, 0)", {
    r: 0,
    g: 255,
    b: 0,
  });
  testRGBColorParserSuccess("parses rgb(0, 0, 255)", "rgb(0, 0, 255)", {
    r: 0,
    g: 0,
    b: 255,
  });
  testRGBColorParserSuccess(
    "parses rgb(0,   0 , \t255\t)",
    "rgb(0,   0 , \t0\t)",
    {
      r: 0,
      g: 0,
      b: 0,
    }
  );
  // Failure
  testRGBColorParserFail("fails on leading space", " rgb(0, 0, 0)");
  testRGBColorParserFail("fails on missing rgb", "(0, 0, 0)");
  testRGBColorParserFail("fails on missing (", "rgb0, 0, 0)");
  testRGBColorParserFail("fails on missing )", "rgb(0, 0, 0");
  testRGBColorParserFail("fails on missing ,", "rgb(0 0, 0)");
  testRGBColorParserFail("fails on missing ,", "rgb(0, 0 0)");
  testRGBColorParserFail("fails on newline", "rgb(0, \n0, 0)");
  testRGBColorParserFail("fails on number outside of 0-255", "rgb(0, 999, 0)");
});

////////////////////////////////////////////////////////////////////////////////
// HEX
////////////////////////////////////////////////////////////////////////////////

const testHexDigitParserSuccess = testSuccessBuilder(exercise.hexDigitParser);
const testHexDigitParserFail = testFailSimpleBuilder(exercise.hexDigitParser);

const hexDigits = "0123456789abcdefABCDEF";

group("hexDigitParser", (group: Group) => {
  // Success
  for (const c of hexDigits) {
    testHexDigitParserSuccess(`parses ${c}`, c, c);
  }
  // Failure
  testHexDigitParserFail("fails on leading space", " 0");
  testHexDigitParserFail("fails on none hex digit", "x");
});

// hexColorComponentParser

const testHexColorComponentParserSuccess = testSuccessBuilder(
  exercise.hexColorComponentParser
);
const testHexColorComponentParserFail = testFailSimpleBuilder(
  exercise.hexColorComponentParser
);

group("hexColorComponentParser", (group: Group) => {
  // Success
  testHexColorComponentParserSuccess("parses 00", "00", 0);
  testHexColorComponentParserSuccess("parses 0f", "0f", 15);
  testHexColorComponentParserSuccess("parses ff", "ff", 255);
  testHexColorComponentParserSuccess("parses FF", "FF", 255);
  testHexColorComponentParserSuccess("parses 0F", "0F", 15);
  // Failure
  testHexColorComponentParserFail("fails on leading space", " 00");
  testHexColorComponentParserFail("fails on missing digit", "0");
});

// hexColorParser

const testHexColorParserSuccess = testSuccessBuilder(exercise.hexColorParser);
const testHexColorParserFail = testFailSimpleBuilder(exercise.hexColorParser);

group("hexColorParser", (group: Group) => {
  // Success
  testHexColorParserSuccess("parses #000000", "#000000", {
    r: 0,
    g: 0,
    b: 0,
  });
  testHexColorParserSuccess("parses #ffffff", "#ffffff", {
    r: 255,
    g: 255,
    b: 255,
  });
  testHexColorParserSuccess("parses #ff0000", "#ff0000", {
    r: 255,
    g: 0,
    b: 0,
  });
  testHexColorParserSuccess("parses #00ff00", "#00ff00", {
    r: 0,
    g: 255,
    b: 0,
  });
  testHexColorParserSuccess("parses #0000ff", "#0000ff", {
    r: 0,
    g: 0,
    b: 255,
  });
  // Failure
  testHexColorParserFail("fails on leading space", " #000000");
  testHexColorParserFail("fails on missing #", "000000");
  testHexColorParserFail("fails on missing digit", "#00000");
});
