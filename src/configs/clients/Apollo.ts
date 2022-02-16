import { ApolloClient, InMemoryCache } from '@apollo/client';
import EnvironmentConfig from 'configs/environment';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                cards: {
                    keyArgs: false,
                    read: (current: CardsCacheData, { variables }) => {
                        const { pipeId } = variables as GetAllCardsVariables
                        return current ? current[pipeId] : {}
                    },
                    merge: (
                        current: CardsCacheData,
                        incoming: QueryPagination<Card>,
                        { variables }
                    ): CardsCacheData => {
                        const { pipeId } = variables as GetAllCardsVariables
                        if (!current) {
                            return {
                                [pipeId]: incoming
                            }
                        }

                        return {
                            ...current,
                            [pipeId]: {
                                ...current[pipeId],
                                edges: current[pipeId] ? [...current[pipeId].edges, ...incoming.edges] : incoming.edges,
                                pageInfo: incoming.pageInfo
                            }
                        }
                    }
                }
            }
        }
    }
})

const client = new ApolloClient({
    uri: EnvironmentConfig.apiUrl,
    cache,
    headers: {
        authorization: EnvironmentConfig.apiToken,
    },
    credentials: 'same-origin',
});

export default client