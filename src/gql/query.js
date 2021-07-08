import { gql } from '@apollo/client';

export const GET_FIRST_FIVE_USERS = gql`
    query MyQuery {
        queryProduct {
            availability
            brand
            category
            id
            image_src
            name
            price
            quantity
            specification {
                title
                description
                id
            }
        }
    }
`;