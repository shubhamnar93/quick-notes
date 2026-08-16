import { cn } from "@/lib/utils"
import { NoteButtonProp } from "@/types"

export const NoteButton = ({ text, type, variant = "primary", disabled, onClick }: NoteButtonProp) => {
    return (
        <button onClick={onClick} disabled={disabled} type={type} className={cn("rounded-md border-1 border-indigo-950  px-4 py-2 text-sm font-medium", variant == "primary" ? "bg-indigo-950 text-white hover:bg-indigo-900" : "hover:bg-gray-100")} > {text}</button >
    )
}
