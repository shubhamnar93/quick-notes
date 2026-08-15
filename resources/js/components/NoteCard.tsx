import { Pencil, Trash2 } from 'lucide-react';

export const NoteCard = ({ text }: { text: string }) => {
    return (
        <li className="flex items-center justify-between rounded-lg p-3 shadow-sm border-1 border-neutral-300">
            {text}
            <div className='gap-3'>
                <button className="rounded-md p-2 text-neutral-800 transition-colors hover:bg-gray-200">
                    <Pencil width={"16px"} height={"16px"} />
                </button>
                <button className="rounded-md p-2 text-neutral-800 transition-colors hover:bg-red-800 hover:text-white">
                    <Trash2 width={"16px"} height={"16px"} />
                </button>
            </div>
        </li>
    )
}
