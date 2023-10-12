import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloProvider,
} from "@apollo/client";
import { ErrorLink, onError } from "@apollo/client/link/error";
import typePolicies from "./TypePolicies";
import { setContext } from "@apollo/client/link/context";

//endpoint url is imported to allow quick changing of endpoint url if needed
import { endPointURL, guestAccountRefreshToken } from "../../../../app.config";

import { ReactNode } from "react";

import store, { useAppSelector } from "../../../redux/ReduxStore";
import promiseToObservable from "./promiseToObservable";

import { useIonToast } from "@ionic/react";
import { RetryLink } from "@apollo/client/link/retry";

//https://www.youtube.com/watch?v=YyUWW04HwKY

interface PrApolloClientProviderProps {
  children: ReactNode;
}
//this component is an HOC which wraps the entire app in the ApolloProvider
//every request sent by apollo will include the lastest jwtIdToken in the header
const ApolloClientProvider: React.FC<PrApolloClientProviderProps> = ({
  children,
}) => {
  //retry after failure
  const retryLink = new RetryLink({
    delay: {
      initial: 500,
      max: 1000,
      jitter: true,
    },
    attempts: {
      max: 4,
      retryIf: (error, operation) => {
        console.log("forkin error", error, operation);
        return true;
      },
    },
  });

  const link = from([retryLink, new HttpLink({ uri: endPointURL })]);

  // alternatively use apollo link
  // https://www.apollographql.com/docs/react/api/link/introduction/
  const client = new ApolloClient({
    cache: new InMemoryCache({
      typePolicies,
    }),
    link,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
