import { useMeQuery } from "../../generated/graphql"

export function useAuth() {
  const { data } = useMeQuery();

  return {
    me: data && data.me,
  }
}