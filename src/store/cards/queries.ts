import { gql } from "@apollo/client";

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

const Queries = {
    GET_ALL_CARDS
}

export default Queries