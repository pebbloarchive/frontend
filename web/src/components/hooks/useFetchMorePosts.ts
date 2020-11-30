import { Exact, PostsQuery } from "../../generated/graphql";

export const useFetchMorePosts = (
  data: PostsQuery | undefined,
  loading: boolean,
  fetchMore: any,
  variables:
    | Exact<{ limit: number; cursor?: string | null | undefined }>
    | undefined
) => {
  if (process.browser) {
    window.onscroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        if (!loading && data && data.posts.hasMore) {
          // you're at the bottom of the page
          fetchMore({
            variables: {
              limit: variables?.limit,
              cursor: data.posts.posts[data.posts.posts.length - 1].created_at,
            },
          });
        }
      }
    };
  }
};
