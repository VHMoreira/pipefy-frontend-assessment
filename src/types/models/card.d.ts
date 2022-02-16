declare interface Phase {
    id: number | string
    color: ColorKeys
    name: string
}

declare interface Card {
    id: number | string
    title: string
    attachments_count: number
    comments_count: number
    current_phase: Phase
}