> _👷🏽 TODO: This project is made with [publish-ts](https://github.com/trcps/publish-ts), read the docs to learn more._

> _👷🏽 TODO: Read all the sections marked with "👷🏽 TODO", do them, and remove them from this README._

<div align="right">

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@andern/redis@latest?color=black&label=&style=flat-square)](https://bundlephobia.com/package/@andern/redis@latest)
[![npm](https://img.shields.io/npm/v/@andern/redis?color=black&label=&style=flat-square)](https://www.npmjs.com/package/@andern/redis)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/loreanvictor/andern-redis/coverage.yml?label=&style=flat-square)](https://github.com/loreanvictor/andern-redis/actions/workflows/coverage.yml)

</div>

<img src="./logo-dark.svg#gh-dark-mode-only" height="108px"/>
<img src="./logo-light.svg#gh-light-mode-only" height="108px"/>

```js
// a nice code example here
// would be pretty nice!

import { andernRedis } from '@andern/redis'

console.log(andernRedis().msg)
```

<br>

# Contents

- [Contents](#contents)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)

<br>

# Installation

[Node](https://nodejs.org/en/):

```bash
npm i @andern/redis
```

Browser / [Deno](https://deno.land):

```js
import { andernRedis } from 'https://esm.sh/@andern/redis'
```
> _👷🏽 TODO: add the most important necessary imports from @andern/redis here._

<br>

# Usage

> _👷🏽 TODO: explain in details what @andern/redis does._

```js
// perhaps with some nice code examples.

import { andernRedis } from '@andern/redis'

console.log(andernRedis().msg)
```

<br>

# Contribution

You need [node](https://nodejs.org/en/), [NPM](https://www.npmjs.com) to start and [git](https://git-scm.com) to start.

```bash
# clone the code
git clone git@github.com:loreanvictor/andern-redis.git
```
```bash
# install stuff
npm i
```

Make sure all checks are successful on your PRs. This includes all tests passing, high code coverage, correct typings and abiding all [the linting rules](https://github.com/loreanvictor/andern-redis/blob/main/.eslintrc). The code is typed with [TypeScript](https://www.typescriptlang.org), [Jest](https://jestjs.io) is used for testing and coverage reports, [ESLint](https://eslint.org) and [TypeScript ESLint](https://typescript-eslint.io) are used for linting. Subsequently, IDE integrations for TypeScript and ESLint would make your life much easier (for example, [VSCode](https://code.visualstudio.com) supports TypeScript out of the box and has [this nice ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)), but you could also use the following commands:

```bash
# run tests
npm test
```
```bash
# check code coverage
npm run coverage
```
```bash
# run linter
npm run lint
```
```bash
# run type checker
npm run typecheck
```
