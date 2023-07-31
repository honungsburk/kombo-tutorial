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

## Introduction

What are parser combinators? They are a way to build parsers by combining smaller parsers.
A parser is a function that takes a string as input and returns a result.
The result can be anything, but it is usually some kind of data structure that represents
the parsed input. A parser combinator is a function that takes one or more parsers as input
and returns a new parser as output. This new parser can then either be used on its own
or combined with other parsers to create even more complex parsers.

## Examples

## Instructions

### Setup

### Exercise

The `src/exercise.ts` file contains stubbed functions that together make a JSON parser.
The `src/exercise.spec.ts` file contains tests that will verify your implementation.
You can run the tests with `npm run test`. You should not download any dependencies, beyond
what is already in the `package.json` file.
