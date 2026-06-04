# Moonton SDK

Unofficial pointer at Moonton's game services — no documented public API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Moonton API

[Moonton](https://en.moonton.com/) is a game development studio best known for *Mobile Legends: Bang Bang*, along with *Magic Chess: Go Go*, *Mobile Legends: Adventure*, *Watcher of Realms*, and other mobile titles. The company does not publish a public, documented REST API for its game data.

This SDK is generated from a community catalogue entry on [freepublicapis.com](https://freepublicapis.com/moonton-api) which lists a single reachable endpoint pointing at Moonton's game/login page. There is no published schema, authentication scheme, or rate-limit documentation behind it.

If you are looking for Mobile Legends or other Moonton game data, check the official site or community-maintained datasets — this SDK is a placeholder and is unlikely to return structured JSON.

## Try it

**TypeScript**
```bash
npm install moonton
```

**Python**
```bash
pip install moonton-sdk
```

**PHP**
```bash
composer require voxgig/moonton-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/moonton-sdk/go
```

**Ruby**
```bash
gem install moonton-sdk
```

**Lua**
```bash
luarocks install moonton-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { MoontonSDK } from 'moonton'

const client = new MoontonSDK({})

// List all games
const games = await client.Game().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o moonton-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "moonton": {
      "command": "/abs/path/to/moonton-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Game** | Placeholder grouping for Moonton game-related resources; no public endpoints or schema are documented by Moonton. | `/games` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from moonton_sdk import MoontonSDK

client = MoontonSDK({})

# List all games
games, err = client.Game(None).list(None, None)
```

### PHP

```php
<?php
require_once 'moonton_sdk.php';

$client = new MoontonSDK([]);

// List all games
[$games, $err] = $client->Game(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/moonton-sdk/go"

client := sdk.NewMoontonSDK(map[string]any{})

// List all games
games, err := client.Game(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Moonton_sdk"

client = MoontonSDK.new({})

# List all games
games, err = client.Game(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("moonton_sdk")

local client = sdk.new({})

-- List all games
local games, err = client:Game(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = MoontonSDK.test()
const result = await client.Game().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = MoontonSDK.test(None, None)
result, err = client.Game(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = MoontonSDK::test(null, null);
[$result, $err] = $client->Game(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Game(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = MoontonSDK.test(nil, nil)
result, err = client.Game(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Game(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Moonton API

- Upstream: [https://en.moonton.com/](https://en.moonton.com/)
- API docs: [https://freepublicapis.com/moonton-api](https://freepublicapis.com/moonton-api)

- Moonton has not published a public API or developer terms for third-party access
- All Moonton game data and services are proprietary to Moonton Technology Co., Ltd.
- The endpoint referenced by community catalogues points at a game/login page, not a documented data API
- Treat any access as unsupported; respect Moonton's terms of service and do not scrape player data

---

Generated from the Moonton API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
