import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { Card, Pipe } from "types/Entities"
import { Edge, PageInfo, QueryPagination } from "types/Utils"

type CardsQueryReponse = {
    cards: QueryPagination<Card>
}

type CardsQueryVariables = {
    pipeId: Pipe['id']
    limit: number
}

type UseCardsFromPipeResponse = {
    cards?: Edge<Card>[]
    page?: PageInfo
    fetchMore?: any
}

const GET_ALL_CARDS = gql`
    query getAllCards($cursor: String, $pipeId: ID!, $limit: Int) {
        cards(pipe_id: $pipeId, after: $cursor, first: $limit) {
            pageInfo {
                endCursor
                hasNextPage
                startCursor
            }
            edges {
                cursor
                node {
                    id
                    title
                    attachments_count
                    comments_count
                    current_phase {
                      id
                      color
                      name
                    }
                }
            }
        }
    }
`

export const useCardsFromPipe = (id: Pipe['id']): UseCardsFromPipeResponse => {
    const [state, setState] = useState<UseCardsFromPipeResponse>({})

    const { data, fetchMore } = useQuery<CardsQueryReponse, CardsQueryVariables>(GET_ALL_CARDS, {
        variables: {
            pipeId: id,
            limit: 2
        }
    })

    useEffect(() => {
        setState({
            cards: data?.cards.edges,
            page: data?.cards.pageInfo,
            fetchMore: async () => {
                if (
                    data?.cards.pageInfo.hasNextPage &&
                    data.cards.pageInfo.endCursor
                ) {
                    await fetchMore({
                        variables: {
                            cursor: data.cards.pageInfo.endCursor
                        },
                        updateQuery: (prev: CardsQueryReponse, { fetchMoreResult }) => {

                            if (fetchMoreResult && prev) {
                                return {
                                    cards: {
                                        ...fetchMoreResult.cards,
                                        edges: [
                                            ...prev.cards.edges,
                                            ...fetchMoreResult.cards.edges
                                        ]
                                    }
                                }
                            }

                            return prev
                        }
                    })
                }
            }
        })
    }, [data, fetchMore])

    return state
}