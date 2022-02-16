import { gql } from "@apollo/client";

export const GET_ORGANIZATION = gql`
    query GetOrganization($organizationId: ID!){
        organization(id: $organizationId) {
            id
            name
            pipes {
              id
              name
              color
              cards_count
              icon
            }
        }
    }
`