import { gql, useQuery } from '@apollo/client';

export const GetOrganization: GetOrganizationQuery = (organizationId: number) => {
    const GET_ORGANIZATION = gql`
        query GetOrganization{
            organization(id: ${organizationId}) {
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

    const { data, error, loading } = useQuery<GetOrganizationData>(GET_ORGANIZATION)

    return {
        organization: data?.organization,
        error,
        loading
    }
}