const joi = require('joi-17')
const Ajv = require('ajv')
const executeTests = require('./base')
const parse = require('../index')

describe('and - none exists', () => {
  executeTests('json', new Ajv({ allErrors: true }))
})

describe('simpleSchema', () => {
  test.each`
    schema | expected
    ${joi.object({
      a: joi.string(),
      b: joi.number().strip(),
      c: joi.boolean().strip(),
    array: joi.array().items(joi.string()).strip(),
    array2: joi.array().items(joi.object({
      d: joi.string().strip(),
      e: joi.number()
    })),
      nestedStripped: joi.object({
        d: joi.string()
      }).strip(),
      nested: joi.object({
        d: joi.string().strip(),
        e: joi.number().strip(),
        f: joi.boolean()
      })
  })} | ${{  }}
  `('should do thing', ({ schema, expected }) => {
    const output = parse(schema, 'json')
    expect(output).toEqual(expected)
  })
})
