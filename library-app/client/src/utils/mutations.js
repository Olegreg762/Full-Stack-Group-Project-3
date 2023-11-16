import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, passowrd: $password) {
            token
            user {
                _id
            }
        }
    }
`;