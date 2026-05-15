<?php
declare(strict_types=1);

// Moonton SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MoontonMakeContext
{
    public static function call(array $ctxmap, ?MoontonContext $basectx): MoontonContext
    {
        return new MoontonContext($ctxmap, $basectx);
    }
}
