import {isNil} from './lib/isnil.js'
import {reduce} from './lib/reduce.js'

export * from './string.js'

export const format =
  (...fn) =>
    value => {
      if (isNil(value)) {
        return value
      }

      return reduce((acc, x) => {
        if (isNil(x)) {
          throw new Error('The function for format is null or undefined.')
        } else {
          return x(acc)
        }
      }, value, fn)
    }
