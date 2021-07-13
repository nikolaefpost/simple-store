import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    query MyQuery {
        queryProduct {
            id
            image_src
            name
            price
            quantity
            specification {
                description
                title
                id
            }
            brand {
                isSelected
                name
            }
            category {
                isSelected
                name
            }
            description_shot
            description_long
        }
    }

`;

export const GET_BRANDS = gql`
    query MyQuery {
        queryBrand {
            name
            isSelected
        }
    }
`;

export const GET_CATEGORY = gql`
    query MyQuery {
        queryCategory {
            name
            isSelected
        }
    }
`;

export const ADD_BRAND = gql`
    mutation AddBrand($name: String!) {
        addBrand(input: {name: $name}) {
            numUids
            brand {
                name
            }
        }
    }
`;

export const ADD_CATEGORY = gql`
    mutation AddCategory($name: String!) {
        addCategory(input: {name: $name}) {
            numUids
            category {
                name
            }
        }
    }

`;

export const ADD_PRODUCT = gql`
    mutation AddProduct($name: String!, $quantity: Int!, $availability: Boolean!, $price: Float!, $specification: [About!],
                        $image_src: String!, $brand: Brand, $category: [Category], $description_shot: String,
                        $description_long: String) 
    {
        addProduct(input: {
            name: $name,
            quantity: $quantity,
            availability: $availability,
            price: $price,
            specification: $specification,
            image_src: $image_src,
            brand: $brand,
            category: $category,
            description_long: $description_long,
            description_shot: $description_shot}) {
            numUids
            product {
                name
            }
        }
    }

`;







