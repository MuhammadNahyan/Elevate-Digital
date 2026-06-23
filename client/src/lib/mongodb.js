import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

if(!DB_URI) {
    throw new Error("Please define DB_URI in .env file");
}

let cached = global.mongoose;

if(!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB () {
    console.log("Connecting to DB:", DB_URI);
    if(cached.conn) return cached.conn;

    if(!cached.promise) {
        cached.promise = mongoose.connect(DB_URI);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}