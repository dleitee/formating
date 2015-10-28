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
 * Export constant util
 */
export const util = {
  ltrim: ltrim,
  rtrim: rtrim,
  trim: trim,
  lowerCase: lowerCase,
  upperCase: upperCase
}
