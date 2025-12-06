import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connect_db = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const URL = process.env.MONGODB_URI;
    cached.promise = mongoose.connect(URL).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
};
