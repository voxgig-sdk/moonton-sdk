<?php
declare(strict_types=1);

// Moonton SDK utility: feature_add

class MoontonFeatureAdd
{
    public static function call(MoontonContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
