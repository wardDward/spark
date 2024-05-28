<?php

use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\TagController;
use App\Http\Resources\AuthenticatedUserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return new AuthenticatedUserResource($request->user());
});

Route::apiResource('/blogs', BlogController::class);
Route::apiResource('/tags', TagController::class);