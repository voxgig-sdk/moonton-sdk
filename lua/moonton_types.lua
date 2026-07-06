-- Typed models for the Moonton SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Game
---@field active? boolean
---@field description? string
---@field genre string
---@field id string
---@field name string
---@field platform? table
---@field player_count? number
---@field release_date? string

---@class GameListMatch
---@field active? boolean
---@field description? string
---@field genre? string
---@field id? string
---@field name? string
---@field platform? table
---@field player_count? number
---@field release_date? string

local M = {}

return M
