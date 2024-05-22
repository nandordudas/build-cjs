import assert from 'node:assert'
import { describe, it } from 'node:test'

import * as w from 'workspace'
import { hello } from 'workspace/bar'
import { bar } from 'workspace'

describe('subpath import', () => {
  it('should hello ok', () => {
    assert.strictEqual(hello, 'Hello, world!')
  })

  it('should bar ok', () => {
    assert.strictEqual(bar, 'bar')
  })
})

describe('aliased import', () => {
  it('should hello ok', () => {
    assert.strictEqual(w.hello, 'Hello, world!')
  })

  it('should bar ok', () => {
    assert.strictEqual(w.bar, 'bar')
  })
})
