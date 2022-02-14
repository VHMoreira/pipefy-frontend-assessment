declare interface GetAllCardsResponse {
    cards?: Edge<Card>[]
    page?: PageInfo
    error?: Error
    loading: boolean
}