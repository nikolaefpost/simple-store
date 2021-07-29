import {gql} from '@apollo/client';

export const GET_USER = gql`
    query GetUser($user_name: String!) {
        getUser(user_name: $user_name) {
            email
            phone
            role
            user_name
            image
            purchases {
                quantity
                buyTime
                done
                choose_product {
                    image_src
                    name
                    price
                    id
                }
                id
            }
        }
    }
`;


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

export const GET_PURCHASES = gql`
    query Purchase {
        queryPurchase(filter: {done: false}) {
            address
            buyTime
            choose_product {
                name
                id
            }
            buyer{
                user_name
            }
            first_name
            id
            phone
            quantity
            surname
            note
            done
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
        addCategory(input: {name: $name}, ) {
            numUids
            category {
                name
            }
        }
    }

`;

export const ADD_PRODUCT = gql`
    mutation AddProduct($name: String!, $quantity: Int!, $availability: Boolean!, $price: Float!, $specification: [AboutRef],
        $image_src: String!, $brand: BrandRef, $category:  [CategoryRef], $description_shot: String,
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
                id
            }
        }
    }
`;

// export const ADD_PRODUCT = gql`
//     mutation addProduct($products: [AddProductInput!]!) {
//         addProduct(input: $products) {
//             product {
//                 id
//             }
//         }
//     }
// `;

export const ADD_PURCHASE = gql`
    mutation AddPurchase($choose_product: ProductRef!, $quantity: Int!, $buyer: UserRef!,
        $buyTime: DateTime!, $first_name: String, $surname: String, $address: String,
        $phone: Int, $done: Boolean, $note: String)
    {
        addPurchase(input: {
            choose_product: $choose_product,
            quantity: $quantity,
            buyer: $buyer,
            buyTime: $buyTime,
            first_name: $first_name,
            surname: $surname,
            address: $address,
            phone: $phone,
            done: $done,
            note: $note
        }) {
            numUids
            purchase {
                id
            }
        }
    }
`;

export const ADD_REVIEW = gql`
    mutation AddReview($userId: UserRef!, $productId: ProductRef!, $rate: Int!, $buyTime: DateTime!,
        $comment: String, $dignity: String, $flaws: String, $conclusion: String)
    {
        addReview(input: {
            userId: $userId,
            productId: $productId,
            rate: $rate,
            buyTime: $buyTime,
            comment: $comment,
            dignity: $dignity,
            flaws: $flaws,
            conclusion: $conclusion
        }) {
            numUids
            review {
                id
            }
        }
    }
`;


export const ADD_USER = gql`
    mutation AddUser($user_name: String!, $phone: Int!, $email: String!,$role: String!, $image: String)
    {
        addUser(input: {
            user_name: $user_name,
            phone: $phone,
            email: $email,
            role: $role,
            image: $image
        }) {
            numUids
            user {
                user_name
            }
        }
    }

`;

export const DELETE_USER = gql`
    mutation deleteUser($filter: UserFilter!) {
        deleteUser(filter: $filter) {
            msg
            user {
                user_name
            }
        }
    }

`;


export const DELETE_PRODUCT = gql`
    mutation deleteProduct($filter: ProductFilter!) {
        deleteProduct(filter: $filter) {
            msg
            product {
                name
            }
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation updateProduct($patch: UpdateProductInput!){
        updateProduct(input: $patch){
            product {
                id
                quantity
            }
        }
    }
`;

export const UPDATE_DONE_PURCHASE = gql`
    mutation updatePurchase($patch: UpdatePurchaseInput!) {
        updatePurchase(input: $patch) {
            purchase {
                id
                done
            }
        }
    }
`;
// { variable: {
//         patch:{
//             filter:{
//                 id: ["0x255ced9f4", "0x255ceda22", "0x255ceb761", "0x255ced12d"]
//             }
//         ,
//             set:{
//                 done: false
//             }
//         }
//     }
// }
//

export const GET_REVIEW_PRODUCT_ID = gql`
    query MyQuery($filter: ProductFilter) {
        queryReview {
            productId(filter: $filter) {
                id
            }
            buyTime
            comment
            dignity
            flaws
            conclusion
            id
            rate
            userId{
                user_name
            }
        }
    }
`;









