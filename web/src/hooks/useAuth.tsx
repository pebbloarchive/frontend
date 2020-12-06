import { useMeQuery } from "@pebblo/frontend/src/generated/graphql";

export function useAuth() {
  const { data } = useMeQuery();

  return {
    me: data && data.me,
  }
}