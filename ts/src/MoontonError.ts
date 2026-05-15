
import { Context } from './Context'


class MoontonError extends Error {

  isMoontonError = true

  sdk = 'Moonton'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  MoontonError
}

