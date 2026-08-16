import { NoteInputProp } from "@/types"

export const NoteInput = ({ name, value, onChange }: NoteInputProp) => {
    return (
        <input name={name} value={value} onChange={onChange} className="text-sm outline-none focus:ring-2 focus:ring-ring rounded-md px-3 py-2 flex-1 border-1 border-neutral-300" placeholder="Add a note..."></input>
    )
}
