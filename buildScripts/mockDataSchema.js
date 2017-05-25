/*
A sample GraphQl Schema for generation of randomized data.
 */

export const schema = `
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
    }
    
    type RootQuery {
        users(limit: Int, offset: Int): [User]
    }
    
    schema {
        query: RootQuery
    }
`;