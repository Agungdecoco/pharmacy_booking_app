<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PharmacyController;
use App\Http\Controllers\Api\BookingController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::get('pharmacies', [PharmacyController::class, 'index']);
    Route::middleware('role:admin')->group(function () {
        Route::apiResource('pharmacies', PharmacyController::class);
        Route::get('bookings-lists', [BookingController::class, 'get_data']);
    });

    Route::middleware('role:user')->group(function () {
        Route::post('bookings', [BookingController::class, 'store']);
        Route::get('bookings', [BookingController::class, 'get_data_by_user']);
    });
});
