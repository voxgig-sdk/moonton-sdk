<?php
declare(strict_types=1);

// Moonton SDK utility: prepare_body

class MoontonPrepareBody
{
    public static function call(MoontonContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
