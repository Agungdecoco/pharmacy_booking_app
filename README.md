# Pharmacy Booking System

This app built using Laravel and ReactJS. Below are the instructions to install the application.

---

## Backend Installation

### Prerequisites
- PHP >= 8.1
- Composer
- MySQL

### Steps to Install
1. Clone the backend repository:
   ```bash
   git clone <backend-repo-url>
   cd <backend-repo>
   ```

2. Install dependencies:
   ```bash
   composer install
   ```

3. Set up the `.env` file:
   ```bash
   cp .env.example .env
   ```
   Update the database and other configurations in the `.env` file:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=pharmacy_booking_app
   DB_USERNAME=root
   DB_PASSWORD=<yourpassword>

   SESSION_DRIVER=file
   QUEUE_CONNECTION=sync
   CACHE_STORE=file
   ```

4. Generate the app key and jwt:
   ```bash
   php artisan key:generate
   php artisan jwt:secret
   ```

5. Run the migrations and seed the database:
   ```bash
   php artisan migrate --seed
   ```

6. Start the Laravel:
   ```bash
   php artisan serve
   ```

---

## Frontend Installation

### Prerequisites
- Node.js >= 18.x
- npm

### Steps to Install
1. Clone the frontend repository:
   ```bash
   git clone <frontend-repo-url>
   cd <frontend-repo>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## Access

### Admin access
- email : admin@example.com
- password : password123

### User access
- email : user@example.com
- password : password123


