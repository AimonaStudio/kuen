![KUEN](/assets/img/kuen.png)

[![Build Status](https://www.travis-ci.com/Himself65/kuen.svg?branch=master)](https://www.travis-ci.com/Himself65/kuen)
[![codecov](https://codecov.io/gh/Himself65/kuen/branch/master/graph/badge.svg)](https://codecov.io/gh/Himself65/kuen)
[![License](https://img.shields.io/github/license/himself65/kuen.svg)](htttps:://github.com/himself65/kuen)

**KUEN** is a useful and beautiful framework.

## Kuen-Core

- `component`<sup>![version badge](https://version-badge.egoist.sh/npm/@kuen/components)</sup>: the core part of `kuen`.

- `loader`<sup>![version badge](https://version-badge.egoist.sh/npm/@kuen/loader)</sup>: extend `vue`.

- `util`<sup>todo</sup>: function library.

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

## About

- From v0.0.1, the version number will follow [Semantic Versioning 2.0.0.](https://semver.org/)

### LICENSE

[LICENSE](LICENSE)
