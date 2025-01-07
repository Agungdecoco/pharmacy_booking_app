<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pharmacy;
use Illuminate\Http\Request;

class PharmacyController extends Controller
{
    public function index()
    {
        $pharmacies = Pharmacy::all();
        return response()->json($pharmacies);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nama' => 'required|string',
            'alamat' => 'required|string',
            'latitude' => 'required|string',
            'longitude' => 'required|string',
            'file_image' => 'required|file|mimes:jpeg,png',
        ]);

        $data['file_image'] = $request->file('file_image')->store('pharmacy_images', 'public');

        $pharmacy = Pharmacy::create($data);
        return response()->json($pharmacy, 201);
    }

    public function show($id)
    {
        $pharmacy = Pharmacy::findOrFail($id);
        return response()->json($pharmacy);
    }

    public function update(Request $request, $id)
    {
        $pharmacy = Pharmacy::findOrFail($id);

        $data = $request->validate([
            'nama' => 'sometimes|required|string',
            'alamat' => 'sometimes|required|string',
            'latitude' => 'sometimes|required|string',
            'longitude' => 'sometimes|required|string',
            'file_image' => 'sometimes|file|mimes:jpeg,png',
        ]);

        if ($request->hasFile('file_image')) {
            $data['file_image'] = $request->file('file_image')->store('pharmacy_images', 'public');
        }

        $pharmacy->update($data);
        return response()->json($pharmacy);
    }

    public function destroy($id)
    {
        $pharmacy = Pharmacy::findOrFail($id);
        $pharmacy->delete();
        return response()->json(['message' => 'Pharmacy deleted successfully']);
    }
}
