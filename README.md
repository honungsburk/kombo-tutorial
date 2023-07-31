# Kombo Workshop

Hello and welcome to the workshop for [Kombo](https://github.com/honungsburk/kombo),
a parser combinator library for Typescript.
The goal of this workshop is for you to learn what parser combinators are, get a
feel for how it is implemented, and get to use them by implementing a JSON parser.

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
