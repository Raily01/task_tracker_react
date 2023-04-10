import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloclient = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

export default apolloclient;
