import { MOBURI } from "./config.js";
import {MongoClient, ServerApiVersion} from "mongodb"

const client = new MongoClient(MOBURI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

const myDatabase=client.db("sample_analytics")
const myCollection= myDatabase.collection("customers")
const myCollection2= myDatabase.collection("transactions")



export{myCollection, myCollection2}