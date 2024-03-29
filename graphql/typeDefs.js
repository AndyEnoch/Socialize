import { gql } from 'apollo-server';

export const typeDefs = gql`
type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comments]!
    likes: [Likes]!
    likeCount: Int!
    commentCount: Int!
}
type Comments {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
}
type Likes {
    id: ID!
    createdAt: String!
    username: String!
}
type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
}
input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
}
type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
}
type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password:String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComments(postId: String!, body:String!): Post!
    deleteComments(postId:ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
}
type Subscription{
    newPost: Post!
}

`;