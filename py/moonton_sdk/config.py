# Moonton SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Moonton",
            "slug": "moonton",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.moonton.com/v1",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "game": {},
            },
        },
        "entity": {
      "game": {
        "fields": [
          {
            "name": "active",
            "short": "Whether the game is currently active",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "description",
            "short": "Brief description of the game",
            "type": "`$STRING`",
          },
          {
            "name": "genre",
            "req": True,
            "short": "Game genre",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Unique identifier for the game",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "Name of the game",
            "type": "`$STRING`",
          },
          {
            "name": "platforms",
            "short": "Platforms where the game is available",
            "type": "`$ARRAY`",
          },
          {
            "name": "playerCount",
            "short": "Current active player count",
            "type": "`$INTEGER`",
          },
          {
            "name": "releaseDate",
            "short": "Release date of the game",
            "type": "`$STRING`",
          },
        ],
        "name": "game",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/games",
                "parts": [
                  "games",
                ],
                "select": {
                  "exist": [
                    "limit",
                    "offset",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
