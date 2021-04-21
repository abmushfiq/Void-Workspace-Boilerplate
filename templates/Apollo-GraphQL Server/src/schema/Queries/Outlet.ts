import { GraphQLList } from 'graphql';
import { OutletType } from '../TypeDefs/Outlet';
import {Outlets} from "../../Entities/Outlets"

export const GET_ALL_OUTLET = {
    type: new GraphQLList(OutletType),
    resolve() {
        return Outlets.find();
    },
};