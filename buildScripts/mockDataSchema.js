export const schema = `
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
    }
    
    type RootQuery {
        user(id: ID): User
    }
    
    schema {
        query: RootQuery
    }
`;

