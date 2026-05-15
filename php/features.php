<?php
declare(strict_types=1);

// Moonton SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class MoontonFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new MoontonBaseFeature();
            case "test":
                return new MoontonTestFeature();
            default:
                return new MoontonBaseFeature();
        }
    }
}
