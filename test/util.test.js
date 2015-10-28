import expect from 'expect.js'
import {format, util} from '../src/format'

describe('Functions Util', () => {
  describe('#ltrim(value)', () => {
    it('should match Test', () => {
      let result = format(util.ltrim)
      let fixtures = [
        'Test',
        ' Test',
        '  Test',
        '   Test'
      ]

      fixtures.forEach(el => {
        expect(result(el)).to.equal('Test')
      })
    })

    it('should match T est', () => {
      let result = format(util.ltrim)
      let fixtures = [
        'T est',
        ' T est',
        '  T est',
        '   T est'
      ]

      fixtures.forEach(el => {
        expect(result(el)).to.equal('T est')
      })
    })
  })

  describe('#rtrim(value)', () => {
    it('should match Test', () => {
      let result = format(util.rtrim)
      let fixtures = [
        'Test',
        'Test ',
        'Test  ',
        'Test   '
      ]

      fixtures.forEach(el => {
        expect(result(el)).to.equal('Test')
      })
    })

    it('should match Tes t', () => {
      let result = format(util.rtrim)
      let fixtures = [
        'Tes t',
        'Tes t ',
        'Tes t  ',
        'Tes t   '
      ]

      fixtures.forEach(el => {
        expect(result(el)).to.equal('Tes t')
      })
    })
  })

  describe('#trim(value)', () => {
    it('should match Test', () => {
      let result = format(util.trim)
      let fixtures = [
        'Test',
        ' Test ',
        '  Test  ',
        '   Test   '
      ]

      fixtures.forEach(el => {
        expect(result(el)).to.equal('Test')
      })
    })

    it('should match T es t', () => {
      let result = format(util.trim)
      let fixtures = [
        'T es t',
        ' T es t ',
        '  T es t  ',
        '   T es t   '
      ]

      fixtures.forEach(el => {
        expect(result(el)).to.equal('T es t')
      })
    })
  })

  describe('#lowerCase(value)', () => {
    it('should match áéíóúaeiou', () => {
      let result = format(util.lowerCase)
      let fixtures = [
        'ÁÉÍÓÚAEIOU',
        'áÉíÓúAeIoU'
      ]

      fixtures.forEach(el => {
        expect(result(el)).to.equal('áéíóúaeiou')
      })
    })
  })

  describe('#upperCase(value)', () => {
    it('should match ÁÉÍÓÚAEIOU', () => {
      let result = format(util.upperCase)
      let fixtures = [
        'áéíóúaeiou',
        'áÉíÓúAeIoU'
      ]

      fixtures.forEach(el => {
        expect(result(el)).to.equal('ÁÉÍÓÚAEIOU')
      })
    })
  })

  describe('#camelCase(value)', () => {
    it('should match camelCase', () => {
      let result = format(util.camelCase)
      let fixtures = [
        'CamelCase',
        'camelCase',
        'Camel case',
        'Camel  case',
        'camel Case',
        'camel-case',
        '-camel--case',
        'camel_case',
        '     camel_case'
      ]

      fixtures.forEach(el => {
        expect(result(el)).to.equal('camelCase')
      })
    })
  })
})
