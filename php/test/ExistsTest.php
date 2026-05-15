<?php
declare(strict_types=1);

// Moonton SDK exists test

require_once __DIR__ . '/../moonton_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = MoontonSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
