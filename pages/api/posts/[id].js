import { connectToDatabase } from "../../../util/mongodb";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
    const { 
        method,
        query:{ id },
    } = req;

    const {db} = await connectToDatabase();

    if(method === "DELETE") {
        try{
            await db.collection("posts").deleteOne({ _id:new ObjectId(id) });
            //instead of using json used send
            res.status(200).send("Successfully deleted the post")
        } catch(error){
            res.status(500).send(error)
        }
    }
}