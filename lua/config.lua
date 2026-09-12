-- Moonton SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Moonton",
      slug = "moonton",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api.moonton.com/v1",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["game"] = {},
      },
    },
    entity = {
      ["game"] = {
        ["fields"] = {
          {
            ["name"] = "active",
            ["short"] = "Whether the game is currently active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "description",
            ["short"] = "Brief description of the game",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "genre",
            ["req"] = true,
            ["short"] = "Game genre",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the game",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["short"] = "Name of the game",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "platforms",
            ["short"] = "Platforms where the game is available",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "playerCount",
            ["short"] = "Current active player count",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "date",
            ["name"] = "releaseDate",
            ["short"] = "Release date of the game",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "game",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/games",
                ["segments"] = {
                  {
                    ["lit"] = "games",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                    "offset",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["parts"] = {
                  "games",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
