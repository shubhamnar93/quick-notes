<?php

use App\Http\Controllers\NoteController;
use Illuminate\Support\Facades\Route;

Route::get('/', [NoteController::class, 'index']);
Route::resource('notes', NoteController::class)
    ->only([ 'edit', 'update', 'destroy', 'store']);

