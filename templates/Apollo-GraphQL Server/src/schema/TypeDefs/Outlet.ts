import { GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";



export const OutletType = new GraphQLObjectType ({
    name: "Outlet",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        address: {type: GraphQLString},
        state: {type: GraphQLString},
        country: {type: GraphQLString},
        postal_code: {type: GraphQLString},
        phone: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
        

    })
})