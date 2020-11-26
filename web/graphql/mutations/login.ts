import { gql } from '@apollo/client';

export const login = gql`
    mutation login($usernameOrEmail: String!, $password: String!) {
        login(usernameOrEmail: $usernameOrEmail, password: $password) {
            errors {
                field
                message
            }
            user {
                id
                username
            }
        }
    }   
`