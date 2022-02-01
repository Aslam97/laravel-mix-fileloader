<h1 align="center">
    Laravel Mix Fileloader
</h1>

Disabled esModule in file-loader. detail check [Vue asset images not loading](https://github.com/laravel-mix/laravel-mix/issues/2756)

## Installation

```
npm i laravel-mix-fileloader --save-dev
```

## Usage

```js
const mix = require("laravel-mix");
require("laravel-mix-fileloader");

mix.disabledEsModule();
```
