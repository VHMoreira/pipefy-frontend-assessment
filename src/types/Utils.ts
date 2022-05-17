export type PageInfo = {
    startCursor: string
    endCursor: string
    hasNextPage: string
}

export type Edge<T> = {
    cursor: string
    node: T
}

export type QueryPagination<T> = {
    pageInfo: PageInfo
    edges: Edge<T>[]
}