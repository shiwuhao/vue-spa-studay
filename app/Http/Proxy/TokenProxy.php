<?php

/**
 * Created by PhpStorm.
 * User: shiwuhao
 * Date: 2017/10/12
 * Time: 下午2:53
 */

namespace App\Http\Proxy;

class TokenProxy
{
    protected $http;

    /**
     * TokenProxy constructor.
     * @param $http
     */
    public function __construct(\GuzzleHttp\Client $http)
    {
        $this->http = $http;
    }

    public function proxy($grantType, array $data = [])
    {
        $data = array_merge($data, [
            'client_id' => env('PASSPORT_CLIENT_ID'),
            'client_secret' => env('PASSPORT_CLIENT_SECRET'),
            'grant_type' => $grantType,
        ]);


//dd($this->http);
        $response = $this->http->post('http://localhost:8000/oauth/token', [
            'form_params' => $data
        ]);
        echo ($response);
        die();

        $token = json_decode((string) $response->getBody(), true);

        return response()->json([
            'token' => $token['access_token'],
            'expires_in' => $token['expire_in']
        ])->cookie('refreshToken', $token['refresh_token'], 86400, null, null, false, true);
    }
}