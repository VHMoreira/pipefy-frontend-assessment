declare interface PageInfo {
    startCursor: string
    endCursor: string
    hasNextPage: string
}

declare interface Edge<T> {
    cursor: string
    node: T
}

declare interface QueryPagination<T> {
    pageInfo: PageInfo
    edges: Edge<T>[]
}