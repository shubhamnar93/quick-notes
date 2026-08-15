import { cn } from "@/lib/utils"

type NoteButtonProp = { text: string, type?: "button" | "submit" | "reset" | undefined, variant?: "primary" | "outline" }


export const NoteButton = ({ text, type, variant = "primary" }: NoteButtonProp) => {
    return (
        <button type={type} className={cn("rounded-md bg-black text-white px-4 py-2 text-sm font-medium", variant == "primary" && "bg-indigo-950")} > {text}</button >
    )
}
