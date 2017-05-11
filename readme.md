
# browserify-babel-scaffold

> Example browserify-babel setup

[![Build Status](https://travis-ci.org/mattstyles/browserify-babel-scaffold.svg?branch=composer)](https://travis-ci.org/mattstyles/browserify-babel-scaffold)
[![npm version](https://badge.fury.io/js/browserify-babel-scaffold.svg)](https://badge.fury.io/js/browserify-babel-scaffold)
[![Dependency Status](https://david-dm.org/mattstyles/browserify-babel-scaffold.svg)](https://david-dm.org/mattstyles/browserify-babel-scaffold)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

Clone the repository, install node (version > 6), install yarn (version > 0.21) and then install the dependencies e.g.

```sh
$ git clone git@github.com:mattstyles/browserify-babel-scaffold.git
$ curl -o- -L https://yarnpkg.com/install.sh | bash
$ yarn
```

## Examples

Running the examples is also a live development environment, there is a convenience script for getting this going:

```sh
$ yarn start
```

## Build

```sh
$ yarn run build
```

Build will generate a production-ready version and output all required assets into a `dist` directory.

## Running tests

```sh
$ yarn test
```

## Contributing

Pull requests are always welcome, the project uses the [standard](http://standardjs.com) code style. Please run `yarn test` to ensure all tests are passing and add tests for any new features or updates.

For bugs and feature requests, [please create an issue](https://github.com/mattstyles/browserify-babel-scaffold/issues).

## License

ISC
