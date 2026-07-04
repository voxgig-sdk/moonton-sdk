# Typed models for the Moonton SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Game:
    genre: str
    id: str
    name: str
    active: Optional[bool] = None
    description: Optional[str] = None
    platform: Optional[list] = None
    player_count: Optional[int] = None
    release_date: Optional[str] = None


@dataclass
class GameListMatch:
    active: Optional[bool] = None
    description: Optional[str] = None
    genre: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None
    platform: Optional[list] = None
    player_count: Optional[int] = None
    release_date: Optional[str] = None

