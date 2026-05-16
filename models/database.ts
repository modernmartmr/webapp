import {connect} from 'mongoose';
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"])

export const conn = async function(){
    const uri = process.env.MONGODB_URI || "mongodb+srv://jhalar:lonkad01@cluster0.j8vky6u.mongodb.net/jhalar?appName=Cluster0"
    await connect(uri)
    console.log("connected to database")
}

