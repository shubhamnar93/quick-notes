import { cn } from "@/lib/utils"
import { NoteButtonProp } from "@/types"

export const NoteButton = ({ text, type, variant = "primary", disabled }: NoteButtonProp) => {
    return (
        <button disabled={disabled} type={type} className={cn("rounded-md bg-black text-white px-4 py-2 text-sm font-medium", variant == "primary" && "bg-indigo-950")} > {text}</button >
    )
}
