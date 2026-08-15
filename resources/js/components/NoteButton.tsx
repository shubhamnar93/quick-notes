export const NoteButton = ({ text, type }: { text: string, type?: "button" | "submit" | "reset" | undefined }) => {
    return (
        <button type={type} className=" rounded-md bg-black text-white" >{text}</button>
    )
}
