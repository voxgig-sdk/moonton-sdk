<?php
declare(strict_types=1);

// Moonton SDK utility: result_headers

class MoontonResultHeaders
{
    public static function call(MoontonContext $ctx): ?MoontonResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
