

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MoontonSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('GameEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MOONTON_TEST_LIVE=TRUE.
  afterEach(liveDelay('MOONTON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MoontonSDK.test()
    const ent = testsdk.Game()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MOONTON_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'game.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"sh":"Whether the game is currently active","t":"`$BOOLEAN`","key$":"active","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Brief description of the game","t":"`$STRING`","key$":"description","index$":1},"genre":{"a":true,"h":"Genre","n":"genre","r":true,"sh":"Game genre","t":"`$STRING`","key$":"genre","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the game","t":"`$STRING`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of the game","t":"`$STRING`","key$":"name","index$":4},"platforms":{"a":true,"h":"Platforms","n":"platforms","r":false,"sh":"Platforms where the game is available","t":"`$ARRAY`","key$":"platforms","index$":5},"playerCount":{"a":true,"h":"Player Count","n":"playerCount","r":false,"sh":"Current active player count","t":"`$INTEGER`","key$":"playerCount","index$":6},"releaseDate":{"a":true,"fo":"date","h":"Release Date","n":"releaseDate","r":false,"sh":"Release date of the game","t":"`$STRING`","key$":"releaseDate","index$":7}},"id":{"field":"id","name":"id"},"name":"game","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /games","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/games","q":{"exist":["limit","offset"]},"r":{},"s":[{"lit":"games"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"game","name__orig":"game","Name":"Game","name_":"game","name-":"game","NAME":"GAME","index$":0}, {"active":true,"entity":"game","key$":"BasicGameFlow","kind":"basic","name":"BasicGameFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"game_ref01"}}],"index$":0}]}, 'Game', {"GET /games":{"protocol":"http","operationId":"getGames","responses":{"200":{"description":"Successful response with games list","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"example":true,"key$":"success","type":"boolean"},"data":{"items":{"properties":{"active":{"description":"Whether the game is currently active","example":true,"type":"boolean","key$":"active"},"description":{"description":"Brief description of the game","example":"5v5 MOBA game for mobile devices","type":"string","key$":"description"},"genre":{"description":"Game genre","example":"MOBA","type":"string","key$":"genre"},"id":{"description":"Unique identifier for the game","example":"mlbb_001","type":"string","key$":"id"},"name":{"description":"Name of the game","example":"Mobile Legends: Bang Bang","type":"string","key$":"name"},"platforms":{"description":"Platforms where the game is available","example":["iOS","Android"],"items":{"enum":["iOS","Android","PC"],"type":"string"},"type":"array","key$":"platforms"},"playerCount":{"description":"Current active player count","example":100000000,"type":"integer","key$":"playerCount"},"releaseDate":{"description":"Release date of the game","example":"2016-07-14","format":"date","type":"string","key$":"releaseDate"}},"required":["id","name","genre"],"type":"object","x-ref":"#/components/schemas/Game","index$":0},"key$":"data","type":"array"},"total":{"description":"Total number of games available","example":15,"key$":"total","type":"integer"}}}}}},"400":{"description":"Bad request","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"object","properties":{"code":{"type":"string","description":"Error code","example":"INVALID_REQUEST"},"message":{"type":"string","description":"Human-readable error message","example":"The request parameters are invalid"}}}},"x-ref":"#/components/schemas/Error"}}}},"401":{"description":"Unauthorized - Invalid or missing API key","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"object","properties":{"code":{"type":"string","description":"Error code","example":"INVALID_REQUEST"},"message":{"type":"string","description":"Human-readable error message","example":"The request parameters are invalid"}}}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"object","properties":{"code":{"type":"string","description":"Error code","example":"INVALID_REQUEST"},"message":{"type":"string","description":"Human-readable error message","example":"The request parameters are invalid"}}}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"limit","in":"query","description":"Maximum number of games to return","required":false,"schema":{"type":"integer","default":10,"minimum":1,"maximum":100},"index$":0},{"name":"offset","in":"query","description":"Number of games to skip for pagination","required":false,"schema":{"type":"integer","default":0,"minimum":0},"index$":1}],"security":[{"ApiKeyAuth":[]}],"securitySource":"operation","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication. Contact Moonton to obtain your API key."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let game_ref01_data = Object.values(setup.data.existing.game)[0] as any

    // LIST
    const game_ref01_ent = client.Game()
    const game_ref01_match: any = {}

    const game_ref01_list = (await game_ref01_ent.list(game_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/game/GameTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MoontonSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['game01','game02','game03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MOONTON_TEST_GAME_ENTID': idmap,
    'MOONTON_TEST_LIVE': 'FALSE',
    'MOONTON_TEST_EXPLAIN': 'FALSE',
    'MOONTON_APIKEY': '',
  })

  idmap = env['MOONTON_TEST_GAME_ENTID']

  const live = 'TRUE' === env.MOONTON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MOONTON_TEST_GAME_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MoontonSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.MOONTON_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.MOONTON_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
