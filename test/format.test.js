import expect from 'expect.js'
import {format, string} from '../src/format'

describe('Library Validate', () => {
  describe('#format(...fn)(value)', () => {
    it('must accept more than one parameter', () => {
      let result = format(string.ltrim, string.rtrim)
      expect(result(' Test ')).to.equal('Test')
    })

    it('must accept only one parameter', () => {
      let result = format(string.ltrim)
      expect(result(' Test')).to.equal('Test')
    })

    it('must accept empty parameter', () => {
      let result = format()
      expect(result(' Test ')).to.equal(' Test ')
    })

    it('It should be an exception when null', () => {
      let result = format(null)
      expect(result.bind(this, '')).to.throwError()
    })

    it('It should be an exception when undefined', () => {
      let result = format(undefined)
      expect(result.bind(this, '')).to.throwError()
    })
  })
})
