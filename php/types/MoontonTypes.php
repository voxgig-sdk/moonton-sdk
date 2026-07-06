<?php
declare(strict_types=1);

// Typed models for the Moonton SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Game entity data model. */
class Game
{
    public ?bool $active = null;
    public ?string $description = null;
    public string $genre;
    public string $id;
    public string $name;
    public ?array $platform = null;
    public ?int $player_count = null;
    public ?string $release_date = null;
}

/** Request payload for Game#list. */
class GameListMatch
{
    public ?bool $active = null;
    public ?string $description = null;
    public ?string $genre = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $platform = null;
    public ?int $player_count = null;
    public ?string $release_date = null;
}

