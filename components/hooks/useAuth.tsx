import { me } from '../../../graphql/queries/me';
import { useQuery } from '@apollo/client'

export function useAuth() {
  const { data } = useQuery(me);

  return {
    me: data && data.me,
  }
}