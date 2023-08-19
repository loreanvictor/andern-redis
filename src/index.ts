export * from './types'


import { Message } from './types'


export function andernRedis(): Message {
  return {
    msg: 'Hellow, this is @andern/redis!'
  }
}
