# frozen_string_literal: true

# Typed models for the Moonton SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Game entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] genre
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] platform
#   @return [Array, nil]
#
# @!attribute [rw] player_count
#   @return [Integer, nil]
#
# @!attribute [rw] release_date
#   @return [String, nil]
Game = Struct.new(
  :active,
  :description,
  :genre,
  :id,
  :name,
  :platform,
  :player_count,
  :release_date,
  keyword_init: true
)

# Request payload for Game#list.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] genre
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [Array, nil]
#
# @!attribute [rw] player_count
#   @return [Integer, nil]
#
# @!attribute [rw] release_date
#   @return [String, nil]
GameListMatch = Struct.new(
  :active,
  :description,
  :genre,
  :id,
  :name,
  :platform,
  :player_count,
  :release_date,
  keyword_init: true
)

