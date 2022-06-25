<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\UserStoreRequest;
use App\Http\Resources\User\UserResource;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Routing\Controller;


class AuthController extends Controller
{
    /**
     * Registro de usuario
     */
    public function signUp(UserStoreRequest $request)
    {

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'last_name' => $request->last_name,
            'phone' => $request->phone,
            'birthday' => $request->birthday,
        ]);

        return new UserResource($user);
    }

    /**
     * Inicio de sesión y creación de token
     */
    public function login(LoginRequest $request)
    {
        $userVerify = User::where('email', $request->get('email', ''))->whereNotNull('email_verified_at')->first();

        if($userVerify or true){
            $credentials = request(['email', 'password']);

            if (!Auth::attempt($credentials))
                return response()->json([
                    'message' => 'Unauthorized'
                ], 401);

            $user = $request->user();
            $tokenResult = $user->createToken('Personal Access Token');

            $token = $tokenResult->token;
            if ($request->remember_me)
                $token->expires_at = Carbon::now()->addWeeks(1);
            $token->save();

            return response()->json([
                'access_token' => $tokenResult->accessToken,
                'token_type' => 'Bearer',
                'expires_at' => Carbon::parse($token->expires_at)->toDateTimeString(),
                'user' => new UserResource($user)
            ]);
        }
        else{

            //event(new Registered(User::where('email', $request->get('email', ''))->first()));
            return response()->json([
                'message' => 'Activa tu cuenta desde el mail que te enviamos'
            ], 401);
        }
    }

    /**
     * Cierre de sesión (anular el token)
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    /**
     * Obtener el objeto User como json
     */
    public function user(Request $request)
    {
        $user = auth('api')->user();
        return new UserResource($user);
    }
}