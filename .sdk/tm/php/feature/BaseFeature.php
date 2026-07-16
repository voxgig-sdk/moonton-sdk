<?php
declare(strict_types=1);

// Moonton SDK base feature

class MoontonBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MoontonContext $ctx, array $options): void {}
    public function PostConstruct(MoontonContext $ctx): void {}
    public function PostConstructEntity(MoontonContext $ctx): void {}
    public function SetData(MoontonContext $ctx): void {}
    public function GetData(MoontonContext $ctx): void {}
    public function GetMatch(MoontonContext $ctx): void {}
    public function SetMatch(MoontonContext $ctx): void {}
    public function PrePoint(MoontonContext $ctx): void {}
    public function PreSpec(MoontonContext $ctx): void {}
    public function PreRequest(MoontonContext $ctx): void {}
    public function PreResponse(MoontonContext $ctx): void {}
    public function PreResult(MoontonContext $ctx): void {}
    public function PreDone(MoontonContext $ctx): void {}
    public function PreUnexpected(MoontonContext $ctx): void {}
}
