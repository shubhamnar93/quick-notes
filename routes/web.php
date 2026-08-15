<?php

use App\Http\Controllers\NoteController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::apiResource('notes', NoteController::class);

/* Route::get('/notes', [NoteController::class, 'index']); */
