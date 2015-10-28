
var formating = require('formating')
var format = formating.format
var util = formating.util

var toFormat = format(util.trim)
var result = toFormat(' Test Formating ')
console.log(result)
