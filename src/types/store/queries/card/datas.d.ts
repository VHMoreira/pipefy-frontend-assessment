declare interface GetAllCardsData {
    cards: QueryPagination<Card>
}

declare interface CardsCacheData {
    [k: string]: QueryPagination<Card>
}