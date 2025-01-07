<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    public function get_data()
    {
        $bookings = Booking::with(['pharmacy', 'user'])->get();
        return response()->json($bookings);
    }

    public function get_data_by_user()
    {
        $bookings = Booking::with(['pharmacy', 'user'])->where('user_id', Auth::id())->get();
        return response()->json($bookings);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'pharmacy_id' => 'required|exists:pharmacies,id',
            'note' => 'required|string',
        ]);

        $data['user_id'] = Auth::id();

        $booking = Booking::create($data);
        return response()->json($booking, 201);
    }
}
