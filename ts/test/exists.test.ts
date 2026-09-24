
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MoontonSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = MoontonSDK.test()
    equal(testsdk instanceof MoontonSDK, true,
      'MoontonSDK.test() must return a client synchronously')
  })

})
