import { gql, useQuery } from "@apollo/client"
import { Organization } from "types/Entities"

type OrganizationQueryReponse = {
    organization: Organization
}

type UseOrganizationResponse = {
    data?: Organization
    loading: boolean
}

const GET_ORGANIZATION = gql`
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

export const useOrganization = (): UseOrganizationResponse => {
    const { data, loading } = useQuery<OrganizationQueryReponse>(GET_ORGANIZATION, {
        variables: {
            organizationId: 300562393
        }
    })

    return {
        data: data?.organization,
        loading
    }
}