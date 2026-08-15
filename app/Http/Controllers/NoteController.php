<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;
use Inertia\Inertia;


class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notes = Note::latest()->get();
        return inertia('Notes/Index', [
                'notes' => $notes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $validated = $request->validate([
             'note'=> 'required|string|max:255|min:1'
         ], [
            'note.required' => 'Please write something to note!',
            'note.max' => 'Note must be 255 characters or less.',
            'note.min' => 'Note must have something inside.',
        ]);

         Note::create([
             'note' => $validated['note'],
         ]);
         return redirect('/notes')->with('success', 'note created!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
