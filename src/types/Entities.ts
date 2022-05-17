export type Pipe = {
    id: string | number
    name: string
    color: string
    cards_count: number
    icon: string
}

export type Organization = {
    id: string | number
    name: string
    pipes: Pipe[]
}

export type Phase = {
    id: number | string
    color: string
    name: string
}

export type Card = {
    id: number | string
    title: string
    attachments_count: number
    comments_count: number
    current_phase: Phase
}

