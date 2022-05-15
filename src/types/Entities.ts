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

