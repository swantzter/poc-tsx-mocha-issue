import * as helpers from './helpers'
import assert from 'node:assert'

it('Imports the helpers from ./a', () => {
  assert.deepStrictEqual(helpers, { a: 'a' })
})
