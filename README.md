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
