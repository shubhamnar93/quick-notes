import { NoteButton } from '@/components/NoteButton';
import { NoteCard } from '@/components/NoteCard';
import { NoteInput } from '@/components/NoteInput';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

type Note = {
    id: number;
    note: string;
    created_at: string;
    updated_at: string;
};

export default function Index({ notes }: { notes: Note[] }) {
    const [editingNote, setEditingNote] = useState<Note | null>(null);
    const { data, setData, post, put, reset, processing } = useForm({
        note: '',
    });
    const startEdit = (note: Note) => {
        setEditingNote(note);
        setData('note', note.note); // fill the input with the note's text
    };

    const cancelEdit = () => {
        setEditingNote(null);
        reset('note');
    };
    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingNote) {
            // Updating an existing note
            put(`/${editingNote.id}`, {
                preserveScroll: true,
                onSuccess: () => cancelEdit(),
            });
        } else {
            // Adding a new note
            post('/', {
                preserveScroll: true,
                onSuccess: () => reset('note'),
            });
        }
    };

    return (
        <>
            <Head title="Notes" />

            <div className="max-w-xl mx-auto p-6 pt-12">
                <div className="mb-6 text-2xl font-semibold tracking-tight">Quick Notes</div>
                <form onSubmit={submit} className='mb-6 flex gap-2'>
                    <NoteInput
                        name='note'
                        value={data.note}
                        onChange={(e) => setData('note', e.target.value)} />

                    <NoteButton text={editingNote ? 'update' : 'add'} type='submit' disabled={processing} />
                    {editingNote && (
                        <NoteButton text="cancel edit" variant='outline' type='submit' disabled={processing} />
                    )}
                </form>

                <ul className='space-y-3'>
                    {notes.map((note) => (
                        <NoteCard id={note.id} text={note.note} onEdit={() => startEdit(note)} />
                    ))}
                </ul>
            </div>
        </>
    );
}
