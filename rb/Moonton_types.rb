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
# @!attribute [rw] platforms
#   @return [Array, nil]
#
# @!attribute [rw] playerCount
#   @return [Integer, nil]
#
# @!attribute [rw] releaseDate
#   @return [String, nil]
Game = Struct.new(
  :active,
  :description,
  :genre,
  :id,
  :name,
  :platforms,
  :playerCount,
  :releaseDate,
  keyword_init: true
)

# Request payload for Game#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
GameListMatch = Struct.new(
  :limit,
  :offset,
  keyword_init: true
)

