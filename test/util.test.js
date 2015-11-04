// import expect from 'expect.js'
import chai from 'chai'
import datetime from 'chai-datetime'
import {format, string} from '../src/format'

var expect = chai.expect

chai.use(datetime)

describe('Functions string', () => {
  describe('#ltrim(value)', () => {
    it('should match Test', () => {
      let result = format(string.ltrim)
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
      let result = format(string.ltrim)
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
      let result = format(string.rtrim)
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
      let result = format(string.rtrim)
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
      let result = format(string.trim)
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
      let result = format(string.trim)
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
      let result = format(string.lowerCase)
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
      let result = format(string.upperCase)
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
      let result = format(string.camelCase)
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

  describe('#snakeCase(value)', () => {
    it('should match de_camelize', () => {
      let result = format(string.snakeCase)
      let fixtures = [
        'deCamelize',
        'de-Camelize',
        'de camelize',
        'de  camelize',
        'de Camelize',
        'de-camelize',
        '-de--camelize',
        'de_camelize',
        '     de_camelize'
      ]

      fixtures.forEach(el => {
        expect(result(el)).to.equal('de_camelize')
      })
    })
  })

  describe('#kebabCase(value)', () => {
    it('should match de-camelize', () => {
      let result = format(string.kebabCase)
      let fixtures = [
        'deCamelize',
        'de-Camelize',
        'de camelize',
        'de  camelize',
        'de Camelize',
        'de-camelize',
        '-de--camelize',
        'de_camelize',
        '     de_camelize'
      ]

      fixtures.forEach(el => {
        expect(result(el)).to.equal('de-camelize')
      })
    })
  })

  describe('#studlyCaps(value)', () => {
    it('should match DeCamelize', () => {
      let result = format(string.studlyCaps)
      let fixtures = [
        'deCamelize',
        'de-Camelize',
        'de camelize',
        'de  camelize',
        'de Camelize',
        'de-camelize',
        '-de--camelize',
        'de_camelize',
        '     de_camelize'
      ]

      fixtures.forEach(el => {
        expect(result(el)).to.equal('DeCamelize')
      })
    })
  })

  describe('#toDate(value)', () => {
    it('should match new Date(2015, 07, 15)', () => {
      let fixtures = [
        {date: '15/08/2015', format: 'DD/MM/YYYY'}
      ]
      fixtures.forEach(el => {
        let result = format(string.toDate(el.format))
        expect(result(el.date)).to.equalDate(new Date(2015, 7, 15))
      })
    })
  })
})
