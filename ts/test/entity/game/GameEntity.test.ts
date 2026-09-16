

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"active","req":false,"short":"Whether the game is currently active","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"description","req":false,"short":"Brief description of the game","type":"`$STRING`","index$":1},{"active":true,"name":"genre","req":true,"short":"Game genre","type":"`$STRING`","index$":2},{"active":true,"name":"id","req":true,"short":"Unique identifier for the game","type":"`$STRING`","index$":3},{"active":true,"name":"name","req":true,"short":"Name of the game","type":"`$STRING`","index$":4},{"active":true,"name":"platforms","req":false,"short":"Platforms where the game is available","type":"`$ARRAY`","index$":5},{"active":true,"name":"playerCount","req":false,"short":"Current active player count","type":"`$INTEGER`","index$":6},{"active":true,"format":"date","name":"releaseDate","req":false,"short":"Release date of the game","type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"game","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":10,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /games","json":"{\"operationId\":\"getGames\",\"parameters\":[{\"description\":\"Maximum number of games to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of games to skip for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"active\":{\"description\":\"Whether the game is currently active\",\"example\":true,\"type\":\"boolean\"},\"description\":{\"description\":\"Brief description of the game\",\"example\":\"5v5 MOBA game for mobile devices\",\"type\":\"string\"},\"genre\":{\"description\":\"Game genre\",\"example\":\"MOBA\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the game\",\"example\":\"mlbb_001\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the game\",\"example\":\"Mobile Legends: Bang Bang\",\"type\":\"string\"},\"platforms\":{\"description\":\"Platforms where the game is available\",\"example\":[\"iOS\",\"Android\"],\"items\":{\"enum\":[\"iOS\",\"Android\",\"PC\"],\"type\":\"string\"},\"type\":\"array\"},\"playerCount\":{\"description\":\"Current active player count\",\"example\":100000000,\"type\":\"integer\"},\"releaseDate\":{\"description\":\"Release date of the game\",\"example\":\"2016-07-14\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"id\",\"name\",\"genre\"],\"type\":\"object\"},\"type\":\"array\"},\"success\":{\"example\":true,\"type\":\"boolean\"},\"total\":{\"description\":\"Total number of games available\",\"example\":15,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with games list\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":\"INVALID_REQUEST\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"example\":\"The request parameters are invalid\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":\"INVALID_REQUEST\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"example\":\"The request parameters are invalid\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Unauthorized - Invalid or missing API key\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":\"INVALID_REQUEST\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"example\":\"The request parameters are invalid\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication. Contact Moonton to obtain your API key.\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/games","segments":[{"lit":"games"}],"select":{"exist":["limit","offset"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"game","name__orig":"game","Name":"Game","name_":"game","name-":"game","NAME":"GAME","index$":0}, {"active":true,"entity":"game","key$":"BasicGameFlow","kind":"basic","name":"BasicGameFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"game_ref01"}}],"index$":0}]}, 'Game')
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
  
