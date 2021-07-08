import {gql} from '@apollo/client';

export const TRACKS = gql`
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
            }
        }
    }
`;