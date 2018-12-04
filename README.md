![KUEN](/assets/img/kuen.png)

[![Build Status](https://www.travis-ci.com/Himself65/kuen.svg?branch=master)](https://www.travis-ci.com/Himself65/kuen)
[![codecov](https://codecov.io/gh/Himself65/kuen/branch/master/graph/badge.svg)](https://codecov.io/gh/Himself65/kuen)
[![License](https://img.shields.io/github/license/himself65/kuen.svg)](htttps:://github.com/himself65/kuen)

**KUEN** is a useful and beautiful library.

## Feature

There have three parts of `kuen`

- `component`: the core part of `kuen`.

- `loader`: extend `vue`.

- `util`: function library.

## Installation

```bash
yarn add kuen
```

## Usage

```bash
# install
yarn add --dev @kuen/components
yarn add --dev @kuen/loader
```

```js
// only install components
import Vue from 'vue'
import Kuen from '@kuen/components'

Vue.use(Kuen)


// or install app
import StarkApp from '@kuen/loader'

StarkApp(...args)
```



### LICENSE

[LICENSE](LICENSE)
