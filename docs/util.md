# Util

```es6
import {util} from 'formating'
```

## ltrim

Remove spaces left

#### Usage
```es6
import {format, util} from 'formating'

let toFormat = format(util.ltrim)
let result = toFormat('  data')
// result => 'data'
```

## rtrim

Remove spaces right

#### Usage
```es6
import {format, util} from 'formating'

let toFormat = format(util.rtrim)
let result = toFormat('data  ')
// result => 'data'
```

## trim

Remove the spaces left and right

#### Usage
```es6
import {format, util} from 'formating'

let toFormat = format(util.trim)
let result = toFormat('  data  ')
// result => 'data'
```

.
