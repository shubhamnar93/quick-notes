import { NoteButton } from '@/components/NoteButton';
import { NoteCard } from '@/components/NoteCard';
import { NoteInput } from '@/components/NoteInput';
import { Head } from '@inertiajs/react';

type Note = {
    id: number;
    note: string;
    created_at: string;
    updated_at: string;
};

export default function Index({ notes }: { notes: Note[] }) {
    return (
        <>
            <Head title="Notes" />

            <div>Quick Notes</div>
            <form method="POST" action="/notes">
                <NoteInput name='note' />
                <NoteButton text='add' type='submit' />
            </form>

            {notes.map((note) => (
                <NoteCard text={note.note} />
            ))}
        </>
    );
}
