# String

```es6
import {string} from 'formating'
```

## ltrim

Remove spaces left

#### Usage
```es6
import {format, string} from 'formating'

let toFormat = format(string.ltrim)
let result = toFormat('  data')
// result => 'data'
```

## rtrim

Remove spaces right

#### Usage
```es6
import {format, string} from 'formating'

let toFormat = format(string.rtrim)
let result = toFormat('data  ')
// result => 'data'
```

## trim

Remove the spaces left and right

#### Usage
```es6
import {format, string} from 'formating'

let toFormat = format(string.trim)
let result = toFormat('  data  ')
// result => 'data'
```

## lowerCase

Transform to lowercase

#### Usage
```es6
import {format, string} from 'formating'

let toFormat = format(string.lowerCase)
let result = toFormat('DATA')
// result => 'data'
```

## upperCase

Transform to UPPERCASE

#### Usage
```es6
import {format, string} from 'formating'

let toFormat = format(string.upperCase)
let result = toFormat('data')
// result => 'DATA'
```

## camelCase

Transform to camelCase

#### Usage
```es6
import {format, string} from 'formating'

let toFormat = format(string.camelCase)
let result = toFormat('data format')
// result => 'dataFormat'
```

## snakeCase

Transform to snakeCase

#### Usage
```es6
import {format, string} from 'formating'

let toFormat = format(string.snakeCase)
let result = toFormat('data format')
// result => 'data_format'
```

## kebabCase

Transform to kebabCase

#### Usage
```es6
import {format, string} from 'formating'

let toFormat = format(string.kebabCase)
let result = toFormat('data format')
// result => 'data-format'
```

## studlyCaps

Transform to studlyCaps

#### Usage
```es6
import {format, string} from 'formating'

let toFormat = format(string.studlyCaps)
let result = toFormat('data format')
// result => 'DataFormat'
```

.
