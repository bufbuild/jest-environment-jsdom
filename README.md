![The Buf logo](./.github/buf-logo.svg)

jest-environment-jsdom
===========

[![License](https://img.shields.io/github/license/bufbuild/jest-environment-jsdom?color=blue)](./LICENSE) [![Build](https://github.com/bufbuild/jest-environment-jsdom/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/bufbuild/jest-environment-jsdom/actions/workflows/ci.yaml) [![NPM Version](https://img.shields.io/npm/v/@bufbuild/jest-environment-jsdom/latest/latest?color=green&label=%40bufbuild%2Fjest-environment-jsdom)](https://www.npmjs.com/package/@bufbuild/jest-environment-jsdom)

An extension of [jest-environment-jsdom](https://www.npmjs.com/package/jest-environment-jsdom)
with support for the [Encoding API](https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API).

## Installation

Note that `jest-environment-jsdom` is still required as a peer dependency:

```bash
npm install --save-dev jest-environment-jsdom @bufbuild/jest-environment-jsdom
```

## Usage

Update the `testEnvironment` property of your Jest config like so:

```diff
import type { Config } from 'jest';

const config: Config = {
- testEnvironment: 'jsdom',
+ testEnvironment: '@bufbuild/jest-environment-jsdom',
...
};
```

Full documentation can be found in the package [README](packages/jest-environment-jsdom).

## Packages

- [@bufbuild/jest-environment-jsdom](https://www.npmjs.com/package/@bufbuild/jest-environment-jsdom):
  Jest test environment with support for the Encoding API.

## Status: Beta

This project is in beta, which means we may make a few changes as we gather feedback from early adopters.
Join us on [Slack](https://buf.build/links/slack) to stay updated on future releases.

## Legal

Offered under the [Apache 2 license](./LICENSE).
