# formating
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
import {format, util} from 'formating'

let toFormat = format(util.trim)
let result = toFormat(' Test Formating ')
// result => 'Test Formating'
```

### With require

```javascript
var formating = require('formating')
var format = formating.format
var util = formating.util

var toFormat = format(util.trim)
var result = toFormat(' Test Formating ')
// result => 'Test Formating'
```

### With Browser

```html
<script src="./node_modules/formating/dist/format.js"></script>
```

```javascript
var format = formating.format
var util = format.util

var toFormat = format(util.trim)
var result = toFormat(' Test Formating ')
// result => 'Test Formating'
```
OR
```javascript
var format = window.formating.format
var util = format.util

var toFormat = format(util.trim)
var result = toFormat( 'Test Formating ')
// result => 'Test Formating'
```

Also available for [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)

# Formating Functions

- [x] [Util](https://github.com/dleitee/formating/blob/master/docs/util.md)
    - [x] ltrim
    - [x] rtrim
    - [x] trim

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

