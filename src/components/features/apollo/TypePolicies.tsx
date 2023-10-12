// import produce from "immer";
import { relayStylePagination } from "@apollo/client/utilities";

/**
 * This file contains the typePolicies used by Apollo client
 * to help simiplify caching efforts.
 * author: @yashdiniz;
 *
 * References:  https://www.apollographql.com/docs/react/pagination/cursor-based/
 *              https://www.apollographql.com/docs/react/pagination/core-api/#merging-paginated-results
 */
export default {
  Query: {
    fields: {
      feed: relayStylePagination(["@connection", ["key"]]),
      commentReports: relayStylePagination([]),
      moderatorFeed: relayStylePagination(["type"]),
      notifications: relayStylePagination(),
      searchCommunities: relayStylePagination(["query"]),
      searchUsers: relayStylePagination(["query"]),
    },
  },

  User: {
    fields: {
      comments: relayStylePagination(),
      posts: relayStylePagination(),
      replies: relayStylePagination(),
    },
  },
};
