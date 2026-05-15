<?php
declare(strict_types=1);

// Moonton SDK utility: result_body

class MoontonResultBody
{
    public static function call(MoontonContext $ctx): ?MoontonResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
