# formating

[![Greenkeeper badge](https://badges.greenkeeper.io/dleitee/formating.svg)](https://greenkeeper.io/)

A simple library for data format

**Is under development**

## Install

**Formating** is available on npm:
```
npm install formating --save
```

## Usage

### With ES6/import

```javascript
import {format, string} from 'formating'

let toFormat = format(string.trim)
let result = toFormat(' Test Formating ')
// result => 'Test Formating'
```

### With require

```javascript
var formating = require('formating')
var format = formating.format
var string = formating.string

var toFormat = format(string.trim)
var result = toFormat(' Test Formating ')
// result => 'Test Formating'
```

### With Browser

```html
<script src="./node_modules/formating/dist/format.js"></script>
```

```javascript
var format = formating.format
var string = format.string

var toFormat = format(string.trim)
var result = toFormat(' Test Formating ')
// result => 'Test Formating'
```
OR
```javascript
var format = window.formating.format
var string = format.string

var toFormat = format(string.trim)
var result = toFormat( 'Test Formating ')
// result => 'Test Formating'
```

Also available for [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)

# Formating Functions

- [x] [String](https://github.com/dleitee/formating/blob/master/docs/string.md)
    - [x] ltrim
    - [x] rtrim
    - [x] trim
    - [x] lowerCase
    - [x] upperCase
    - [x] camelCase
    - [x] snakeCase
    - [x] kebabCase
    - [x] studlyCaps

# LICENSE
The MIT License (MIT)

Copyright (c) 2015 Daniel Leite de Oliveira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

