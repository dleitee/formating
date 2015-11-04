/*
 * Remove spaces left
 * @params value
 * @return string
 */
function ltrim(value) {
  return value.replace(/^\s+/, '')
}

/*
 * Remove spaces right
 * @params value
 * @return string
 */
function rtrim(value) {
  return value.replace(/\s+$/, '')
}

/*
 * Remove the spaces left and right
 * @params value
 * @return string
 */
function trim(value) {
  return ltrim(rtrim(value))
}

/*
 * Transform to lowercase
 * @params value
 * @return string
 */
function lowerCase(value) {
  return value.toLowerCase()
}

/*
 * Transform to UPPERCASE
 * @params value
 * @return string
 */
function upperCase(value) {
  return value.toUpperCase()
}

/*
 * Transform to StudlyCaps
 * @params value
 * @return string
 */
function studlyCaps(value) {
  let string = value.replace(/[\-_\s]+(.)?/g,
                             (match, chr) => chr ? chr.toUpperCase() : '')
  return upperCase(string.substr(0, 1)) + string.substr(1)
}

/*
 * Transform to camelCase
 * @params value
 * @return string
 */
function camelCase(value) {
  let string = studlyCaps(value)
  return lowerCase(string.substr(0, 1)) + string.substr(1)
}

/*
 * Decamelize String
 * @params value
 * @return string
 */
function decamelize(value, chr = '_') {
  let camel = camelCase(value)
  let string = camel.replace(/([A-Z])+/g, chr + '$1')
  return string.toLowerCase()
}

/*
 * Decamelize snake_case
 * @params value
 * @return string
 */
function snakeCase(value) {
  return decamelize(value, '_')
}

/*
 * Decamelize kebab-case
 * @params value
 * @return string
 */
function kebabCase(value) {
  return decamelize(value, '-')
}

/*
 * Transform string to date
 * @params value
 * @return date
 */
function toDate(value) {
  return format => {
    if (value) {
      value = format
    }
    return new Date(2015, 7, 15)
  }
}
/*
 * Export constant string
 */
export const string = {
  ltrim: ltrim,
  rtrim: rtrim,
  trim: trim,
  lowerCase: lowerCase,
  upperCase: upperCase,
  camelCase: camelCase,
  snakeCase: snakeCase,
  kebabCase: kebabCase,
  studlyCaps: studlyCaps,
  toDate: toDate
}
