import { gql } from '@apollo/client';

export const getUser = gql`
    query user($username: String!) {
        user(username: $username) {
            id
            username
        }
    }
`