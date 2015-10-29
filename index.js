
var formating = require('formating')
var format = formating.format
var string = formating.string

var toFormat = format(string.trim)
var result = toFormat(' Test Formating ')
console.log(result)
