const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://test-user:test-password@imy220.7hfsjro.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";

const client = new MongoClient(uri);

let database;

async function dbConnect() {
  if (!database) {
    await client.connect();
    database = client.db("VersionControlProject");
    console.log("✅ Connected to MongoDB");
  }
  return database;
}


async function runFindQuery(collection, query, options) {
  const db = await dbConnect(); // get db each time
  const col = db.collection(collection);
  const cursor = col.find(query, options);
  return cursor.toArray();
}

async function runInsertQuery(collection, document) {
  const db = await dbConnect();
  const col = db.collection(collection);
  return col.insertOne(document);
}

async function runUpdateQuery(collection, filter, update) {
  const db = await dbConnect();
  const col = db.collection(collection);
  return col.updateOne(filter, update);
}

async function runDeleteQuery(collection, filter) {
  const db = await dbConnect();
  const col = db.collection(collection);
  return col.deleteOne(filter);
}

module.exports = {
  dbConnect,
  runFindQuery,
  runInsertQuery,
  runUpdateQuery,
  runDeleteQuery,
};
