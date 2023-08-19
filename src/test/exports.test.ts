import { andernRedis, Message } from '../index'


test('everything is exported.', () => {
  expect(andernRedis).toBeDefined()
  expect(<Message>{}).toBeDefined()
})
