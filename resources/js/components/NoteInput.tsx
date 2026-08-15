export const NoteInput = ({ name }: { name?: string }) => {
    return (
        <input name={name} className="flex-1 border-1 border-neutral-300" placeholder="Add a note"></input>
    )
}
