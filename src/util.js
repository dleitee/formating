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
 * Transform to camelCase
 * @params value
 * @return string
 */
function camelCase(value) {
  let string = value.replace(/[\-_\s]+(.)?/g,
                              (match, chr) => chr ? chr.toUpperCase() : '')
  return lowerCase(string.substr(0, 1)) + string.substr(1)
}

/*
 * Export constant util
 */
export const util = {
  ltrim: ltrim,
  rtrim: rtrim,
  trim: trim,
  lowerCase: lowerCase,
  upperCase: upperCase,
  camelCase: camelCase
}
