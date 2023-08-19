import { andernRedis } from '../src'

document.querySelector('main')!.innerHTML = `<h1>${andernRedis().msg}</h1>`
