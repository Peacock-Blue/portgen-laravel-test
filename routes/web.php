<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReactController;

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

Route::get('/', [ReactController::class, 'index']);

Route::get('portfolio/{path?}', [ReactController::class, 'show'])->where('path', '.*')->name('react');
