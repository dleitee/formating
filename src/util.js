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
 * Export constant util
 */
export const util = {
  ltrim: ltrim,
  rtrim: rtrim,
  trim: trim
}
