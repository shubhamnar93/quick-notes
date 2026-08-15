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

            <div className="max-w-xl mx-auto p-6 pt-12">
                <div className="mb-6 text-2xl font-semibold tracking-tight">Quick Notes</div>
                <form method="POST" action="/notes" className='mb-6 flex gap-2'>
                    <NoteInput name='note' />
                    <NoteButton text='add' type='submit' />
                </form>

                {notes.map((note) => (
                    <NoteCard text={note.note} />
                ))}
            </div>
        </>
    );
}
