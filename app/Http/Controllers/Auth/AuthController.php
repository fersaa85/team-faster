<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\UserStoreRequest;
use App\Http\Resources\User\UserResource;
use App\Models\User;
use App\Models\Workout;
use App\Models\WorkoutUser;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Routing\Controller;
use ReCaptcha\ReCaptcha as GoogleRecaptcha;
use App\Mail\SignUpEmail;
use Illuminate\Support\Facades\Mail;


class AuthController extends Controller
{
    /**
     * Registro de usuario
     */
    public function signUp($venueId, UserStoreRequest $request)
    {
        /*$recaptcha = (new GoogleRecaptcha('6LdhsyggAAAAAL0d8vonQxrfI4UdlizR0GHtW7u9'))
            ->verify($request->input('g-recaptcha-response'), $request->ip());

        if (!$recaptcha->isSuccess()) {
            return response()->json([
                'message' => $recaptcha->getErrorCodes()
            ], 401);
        }
*/
        $user = User::where("email", $request->email)->first();

        if($user === null){
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => '',
                'last_name' => $request->last_name,
                'phone' => $request->get('phone', ''),
                'size' => $request->size,
                //'birthday' => $request->birthday,
                'age' => $request->age,
            ]);
        }

        //$workout = Workout::where('date_start', '>', date('Y-m-d H:i:s'))->first();
        $workout = Workout::where('venue_id', $venueId)->first();

        $objData = new \stdClass();
        $objData->name = $user->name;
        $objData->age = $user->age;
        $objData->size = $user->size;
        $objData->size = $user->size;
        $objData->date = $workout->date_start;
        $objData->address = $workout->venue->address;
        $objData->workout = $workout->venue->description;
        $objData->coatch = $workout->coatch->name;
        $objData->slug = 123;

        if(WorkoutUser::where('workout_id', $workout->id)->where('user_id', $user->id)->first() === null){
            $slug = "{$workout->venue->slug}-" . (WorkoutUser::where('workout_id', $workout->id)->count() + 1);
            WorkoutUser::create([
                'workout_id' => $workout->id,
                'user_id' => $user->id,
                'slug' => $slug
            ]);

            $objData = new \stdClass();
            $objData->name = $user->name;
            $objData->age = $user->age;
            $objData->size = $user->size;
            $objData->size = $user->size;
            $objData->date = $workout->date_start;
            $objData->address = $workout->venue->address;
            $objData->workout = $workout->venue->description;
            $objData->coatch = $workout->coatch->name;
            $objData->slug = $slug;

            Mail::to($user->email)->send(new SignUpEmail($objData));
        }else{
            return response()->json([
                'message' => 'Ya te encuetras registrado'
            ], 401);
        }

        return new UserResource($user);
    }

    /**
     * Inicio de sesi??n y creaci??n de token
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
                'user' => new VenueResource($user)
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
     * Cierre de sesi??n (anular el token)
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
        return new VenueResource($user);
    }
}