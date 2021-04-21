import { OutletType } from "../TypeDefs/Outlet";
import { GraphQLString, GraphQLID} from "graphql";
import {Outlets} from "../../Entities/Outlets"


export const CREATE_OUTLET = {
    type: OutletType,
    args: {
        name: {type: GraphQLString},
        address: {type: GraphQLString},
        state: {type: GraphQLString},
        country: {type: GraphQLString},
        postal_code: {type: GraphQLString},
        phone: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
    },

    async resolve(parent: any, args: any) {
        const {name, address, state, country, postal_code, phone, email} = args;
        await Outlets.insert(args);
        return args; 
    }
}



export const UPDATE_PASSWORD = {
    type: OutletType,
    args: {
        email: {type:GraphQLString},
        oldPassword: {type:GraphQLString},
        newPassword: {type: GraphQLString}
    },

    async resolve(parent: any, args: any) {
        const {email, oldPassword, newPassword} = args;
        const outlet = await Outlets.findOne({email: email})
        const userPassword = outlet?.password;
        
        if(oldPassword === userPassword){
           return await Outlets.update({email:email},{password:newPassword})
        }else{
            throw new Error("Password not matched!");
            
        }

         
    }
}


export const DELETE_OUTLET = {
    type: OutletType,
    args: {
        id: {type:GraphQLID}
    },

    async resolve(parent: any, args: any) {
        const id = args.id;
        await Outlets.delete(id);
         
    }
}