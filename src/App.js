import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import Vehicles from "./pages/vehicles";

function App() {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "https://api-eu-central-1.graphcms.com/v2/cknoq6cg8n99i01z38l7l22oe/master",
    }),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Vehicles />
    </ApolloProvider>
  );
}

export default App;
