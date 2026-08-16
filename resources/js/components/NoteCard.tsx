import { Pencil, Trash2 } from 'lucide-react';
import { router } from '@inertiajs/react';
import { NoteCardProp } from '@/types';

export const NoteCard = ({ text, onEdit, id }: NoteCardProp) => {
    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this note?')) {
            router.delete(`/${id}`, {
                preserveScroll: true,
            });
        }
    };
    return (
        <li className="flex items-center justify-between rounded-lg p-3 shadow-sm border-1 border-neutral-300">
            {text}
            <div className='gap-3'>
                <button onClick={onEdit} className="rounded-md p-2 text-neutral-800 transition-colors hover:bg-gray-200">
                    <Pencil width={"16px"} height={"16px"} />
                </button>
                <button onClick={handleDelete} className="rounded-md p-2 text-neutral-800 transition-colors hover:bg-red-800 hover:text-white">
                    <Trash2 width={"16px"} height={"16px"} />
                </button>
            </div>
        </li>
    )
}
