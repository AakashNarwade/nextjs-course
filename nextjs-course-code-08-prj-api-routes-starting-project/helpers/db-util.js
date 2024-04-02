import { MongoClient } from "mongodb";
require("dotenv").config();

export async function connectToDb() {
  const dbUrl = process.env.NEXT_PUBLIC_DB;
  // console.log("dbURL, ", dbUrl);
  const client = await MongoClient.connect(dbUrl);
  return client;
}
export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
}
