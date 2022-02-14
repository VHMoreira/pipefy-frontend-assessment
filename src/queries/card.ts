import { gql, useQuery } from '@apollo/client';

export const GetAllCards: GetAllCardsQuery = (pipeId: number, cardsPerPage?: number, startsAfter?: string) => {
    const parametersQuery =
        `pipe_id: ${pipeId}${cardsPerPage ? `, first: ${cardsPerPage}` : ''}${startsAfter ? `, after: "${startsAfter}"` : ''}`
    const GET_ALL_CARDS = gql`
        query getAllCards {
            cards(${parametersQuery}) {
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

    const { data, error, loading } = useQuery<GetAllCardsData>(GET_ALL_CARDS)

    return {
        cards: data?.cards.edges,
        page: data?.cards.pageInfo,
        error,
        loading
    }
}