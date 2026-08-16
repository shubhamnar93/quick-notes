export type NoteButtonProp = { text: string, type?: "button" | "submit" | "reset" | undefined, variant?: "primary" | "outline", disabled: boolean, onClick?: () => void }
export type NoteCardProp = { id: number, text: string, onEdit: () => void }
export type NoteInputProp = { name?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }
