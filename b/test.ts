import * as helpers from './helpers'
import assert from 'node:assert'

it('Imports the helpers from ./b', () => {
  assert.deepStrictEqual(helpers, { b: 'b' })
})
