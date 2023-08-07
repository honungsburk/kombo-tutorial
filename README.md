# Kombo Workshop

Hello and welcome to the workshop for [Kombo](https://github.com/honungsburk/kombo),
a parser combinator library for Typescript.
The goal of this workshop is for you to learn what parser combinators are, get a
feel for how it is implemented, and get to use them by implementing your own parser(s).

## Prerequisites

You need node version 16 or later to run this workshop. If you don't have it installed,
you can use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to install it for you.
npm is also required, but it is included with node.

- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- [Node.js](https://nodejs.org/en/) (v16 or later)

## Setup

Run `npm install` and test that `npm run test` works. If they don't work ask your
instructor.

## Introduction

What are parser combinators? They are a way to build parsers by combining smaller parsers.
A parser is a function that takes a string as input and returns a result.
The result can be anything, but it is usually some kind of data structure that represents
the parsed input. A parser combinator is a function that takes one or more parsers as input
and returns a new parser as output. This new parser can then either be used on its own
or combined with other parsers to create even more complex parsers.

### String in Javascript

What do you think the length of this string is? `🤔`. If you guessed 1 you are wrong.
It is 2. This is because the length of a string is the number of code units in the string, not the number of characters.
Luckily [Kombo](https://github.com/honungsburk/kombo) keeps track of that for you and makes all the necessary bookkeeping
so that you can focus on writing clean code.

### How it works

> The type signatures in this section are simplified for clarity.

At the core of a parser combinator library are a couple of types:

```ts
/**
 * A parser is a function that takes the current state and performs a step.
 * A step can either be Good or Bad.
 */
type Parser<A, PROBLEM> = (s: State) => PStep<A, PROBLEM>;

/**
 * The state is the current state of the parser. It contains the source string,
 * offest, indent, row and column. It tells the parser where it is.
 *
 * Important: The offset is in BYTES because some UTF-16 characters are TWO bytes such as
 * emojis.
 */
type State = {
  src: string;
  offset: number; //in BYTES (some UTF-16 characters are TWO bytes)
  indent: number; // starts from 0
  row: number; //in newlines
  col: number; //in UTF-16 characters
};

/**
 * A step is the result of a parser. It can either be Good or Bad.
 */
type PStep<A, PROBLEM> = Good<A> | Bad<PROBLEM>;

/**
 * If a step is Good it means the parser succeeded and returned a value.
 * It contains the new state of the parser, and whether or not the parser
 * is allowed to backtrack.
 *
 * Backtraking means that if the parser fails, it can try another path. You
 * can read more [here](https://github.com/honungsburk/kombo/blob/master/semantics.md).
 *
 */
type Good<A> = {
  readonly kind: "Good";
  readonly haveConsumed: boolean; // if true, backtracking is not allowed
  readonly value: A;
  readonly state: State;
};

/**
 * If a step is Bad it means the parser failed. It contains the new state of the parser,
 * and a problem that describes what went wrong.
 *
 * The bag is a data structure that contains all the problems that happened during the
 * parsing and what order. It is used to generate error messages.
 */
export type Bad<PROBLEM> = {
  readonly kind: "Bad";
  readonly haveConsumed: boolean; // if true, backtracking is not allowed
  readonly bag: Bag<PROBLEM>;
};
```

## Exercises

Go into the file `src/exercise1.ts` it will guide you through writing your first
parser! Use the command `npm run test-ex1` to run the tests for the first exercise.
When all tests are green your done.

When you are done and feel a bit confident why not challenge yourself? In the
file `src/exercise2.ts` you'll hopefully find a worthy challenge!
Use the command `npm run test-ex2` to run the tests for the first exercise.

### Tips and Tricks

- If you want more control over what tests run you can use `npm run test -- --help`
  to get all available options. Don't forget to add the `--` before your command line arguments.
- [Kombo Docs](https://frankhampusweslien.com/kombo/index.html)

### Rules

- You should not download any dependencies, beyond what is already in the `package.json` file.
- No more rules!
