import { type } from 'ts-inference-check'

import { andernRedis } from '..'
import { Message } from '../types'


describe(andernRedis, () => {
  test('does stuff.', () => {
    expect(andernRedis().msg).toBe('Hellow, this is @andern/redis!')
  })

  test('returns the proper type.', () => {
    expect(type(andernRedis()).is<Message>(true)).toBe(true)
  })
})
