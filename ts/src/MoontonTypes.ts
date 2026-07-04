// Typed models for the Moonton SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Game {
  active?: boolean
  description?: string
  genre: string
  id: string
  name: string
  platform?: any[]
  player_count?: number
  release_date?: string
}

export type GameListMatch = Partial<Game>

