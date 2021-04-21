import express from "express";
import {graphqlHTTP} from "express-graphql";
import { schema } from "./schema";
import cors from "cors";
import { createConnection } from "typeorm";
import {Outlets} from "./Entities/Outlets"

const main = async () => {

    await createConnection ({
        type:"postgres",
        database:"graphqlCRUD",
        username:"postgres",
        password:"root",
        logging:true,
        synchronize:true,
        entities:[Outlets],

    })


    const app = express();
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql:true
    }))

    app.listen(3001,()=> {
        console.log("SEVER IS RUNNING ON PORT 3001")
    })
};


main().catch((err) => {
    console.log(err)
})