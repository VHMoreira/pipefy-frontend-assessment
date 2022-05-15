import { ApolloClient, InMemoryCache } from "@apollo/client";
import EnvironmentConfig from "configs/environment";

const apolloClient = new ApolloClient({
    uri: EnvironmentConfig.apiUrl,
    cache: new InMemoryCache(),
    headers: {
        authorization: EnvironmentConfig.apiToken,
    },
    credentials: 'same-origin',
});

export default apolloClient