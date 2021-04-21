import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {GET_ALL_OUTLET} from "./Queries/Outlet"; 
import {CREATE_OUTLET, DELETE_OUTLET, UPDATE_PASSWORD} from "./Mutation/Outlet"; 


const RootQuery = new GraphQLObjectType ({
    name: "RootQuery",
    fields: {
        getAllOutlet: GET_ALL_OUTLET,
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createOutlet: CREATE_OUTLET,
        deleteOutlet: DELETE_OUTLET,
        updatePassword: UPDATE_PASSWORD
    },
});



export const schema = new GraphQLSchema ({
    query: RootQuery,
    mutation: Mutation
})