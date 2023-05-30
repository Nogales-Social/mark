<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Catalogs\SearchController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

 Route::middleware(['auth', 'verified'])->group(function () {
    /**
     * SECTION - Main Routes
     */
    Route::get('/', function () { return redirect('/dashboard'); });
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    /**
     * SECTION - Search Routes
     */
    Route::get('search', [SearchController::class, 'search'])->name('search');

    /**
     * SECTION - Catalogs Routes
     */
    Route::prefix('catalogs')->name('catalogs.')->group(function () {
        //
    });

    /**
     * SECTION - Settings Routes
     */
    Route::prefix('settings')->name('settings.')->group(function () {
        Route::resource('company', CompanyController::class)->only(['index', 'store', 'update', 'destroy']);
        Route::resource('user', UserController::class)->only(['index', 'store', 'update', 'destroy']);
    });

    /**
     * SECTION - User Profile Routes
     */
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
