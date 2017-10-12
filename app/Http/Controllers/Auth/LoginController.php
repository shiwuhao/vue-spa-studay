<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Proxy\TokenProxy;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/**
 * Class LoginController
 * @package App\Http\Controllers\Auth
 */
class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * @var TokenProxy
     */
    protected $proxy;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(TokenProxy $proxy)
    {
        $this->middleware('guest')->except('logout');
        $this->proxy = $proxy;
    }


    /**
     * @param Response $request
     * @return void
     */
    public function login(Request $request)
    {
//        $this->validateLogin($request);


        return $this->proxy->proxy('password', [
            'username' => $request->email,
            'password' => $request->password,
            'scope' => ''
        ]);
    }
}
