# Moonton SDK configuration

module MoontonConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Moonton",
        "slug" => "moonton",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://api.moonton.com/v1",
        "auth" => {
          "prefix" => "",
          "name" => "X-API-Key",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "game" => {},
        },
      },
      "entity" => {
        "game" => {
          "fields" => [
            {
              "name" => "active",
              "title" => "Active",
              "type" => "`$BOOLEAN`",
              "short" => "Whether the game is currently active",
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "short" => "Brief description of the game",
            },
            {
              "name" => "genre",
              "title" => "Genre",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Game genre",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Unique identifier for the game",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Name of the game",
            },
            {
              "name" => "platforms",
              "title" => "Platforms",
              "type" => "`$ARRAY`",
              "short" => "Platforms where the game is available",
            },
            {
              "name" => "playerCount",
              "title" => "Player Count",
              "type" => "`$INTEGER`",
              "short" => "Current active player count",
            },
            {
              "name" => "releaseDate",
              "title" => "Release Date",
              "type" => "`$STRING`",
              "short" => "Release date of the game",
              "format" => "date",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "game",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/games",
                  "segments" => [
                    {
                      "lit" => "games",
                    },
                  ],
                  "parts" => [
                    "games",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 10,
                      },
                      {
                        "name" => "offset",
                        "orig" => "offset",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 0,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "limit",
                      "offset",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    MoontonFeatures.make_feature(name)
  end
end
