<?php

use App\Http\Controllers\NoteController;
use Illuminate\Support\Facades\Route;

Route::apiResource('/', NoteController::class);
Route::apiResource('/notes', NoteController::class);

