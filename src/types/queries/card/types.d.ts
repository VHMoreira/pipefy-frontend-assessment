declare type GetAllCardsQuery = (
    pipeId: number,
    cardsPerPage?: number,
    startsAfter?: string
) => GetAllCardsResponse