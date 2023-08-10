# @bufbuild/jest-environment-jsdom

An extension of the [jest-environment-jsdom](https://www.npmjs.com/package/jest-environment-jsdom) with support for
the [encoding API](https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API).

## Background

When using the test framework [Jest](https://jestjs.io/) for a web application, you will likely use the "jsdom" test
environment to make the DOM available in tests. But if your code or one of your dependencies relies on the encoding API,
you will see the following error when running tests:

```
ReferenceError: TextEncoder is not defined
```

This package adds the Node.js built-in classes `TextEncoder` and `TextDecoder` to the jsdom test environment to work
around the problem. If you can spare the time, consider helping out with the
[upstream issue in the jsdom project](https://github.com/jsdom/jsdom/issues/2524).

## Usage

Install the package (note that `jest-environment-jsdom` is still required as a peer dependency):

```bash
npm install --save-dev jest-environment-jsdom @bufbuild/jest-environment-jsdom
```

Update the `testEnvironment` property of your Jest config like so:

```diff
import type { Config } from 'jest';

const config: Config = {
- testEnvironment: 'jsdom',
+ testEnvironment: '@bufbuild/jest-environment-jsdom',
...
};
```
