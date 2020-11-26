import { gql } from '@apollo/client';

export const me = gql`
    query {
        me {
            id
            username
            email
            avatar
        }
    }   
`