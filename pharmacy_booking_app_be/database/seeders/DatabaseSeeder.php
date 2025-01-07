<?php

namespace Database\Seeders;

use App\Models\Pharmacy;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('password123'),
            'secret' => 'password123',
            'role' => 'admin',
        ]);

        User::create([
            'name' => 'Regular User',
            'email' => 'user@example.com',
            'password' => Hash::make('password123'),
            'secret' => 'password123',
            'role' => 'user',
        ]);

        Pharmacy::create([
            'nama' => 'Pharmacy A',
            'alamat' => '123 Main St',
            'latitude' => '-6.200000',
            'longitude' => '106.816666',
            'file_image' => 'pharmacy_a.jpg',
        ]);

        Pharmacy::create([
            'nama' => 'Pharmacy B',
            'alamat' => '456 Second St',
            'latitude' => '-6.210000',
            'longitude' => '106.826666',
            'file_image' => 'pharmacy_b.jpg',
        ]);
    }
}
