// position: 6
// studentNumber: u21769584

const express = require("express");
const app = express();
const http = require("http").Server(app);


const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://test-user:test-password@imy220.7hfsjro.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";

const client = new MongoClient(uri);
let database;


async function dbConnect() {
  await client.connect();
  database = client.db("VersionControlProject");

  const feedsCol = database.collection("feeds");
  const usersCol = database.collection("users");
  const projectsCol = database.collection("projects");




//   const usersCount = await usersCol.countDocuments();
//   const booksCount = await booksCol.countDocuments();

//   if (usersCount === 0) {
//     await usersCol.insertMany(users);
//     console.log("added users collection!");
//   }

  
//   if (booksCount === 0) {
//     await booksCol.insertMany(books);
//     console.log("added books collection!");
//   }

  // await client.close();
  return database;
}





// users
// login (add a user)
// get a user (id)
// get a user by name
// update profile


async function runFindQuery(collection, query, options) {
    // await client.connect();
    // const database = client.db("libraryDB");

    const col = database.collection(collection);
    const cursor = col.find(query, options);
    const result = await cursor.toArray();

    // await client.close();
    return result;
}




async function runInsertQuery(collection, document) {
    // await client.connect();
    // const database = client.db("libraryDB");

    const col = database.collection(collection);
    const result = await col.insertOne(document);

    // await client.close();
    return result;
}

async function runUpdateQuery(collection, filter, update) {
    // await client.connect();
    // const database = client.db("libraryDB");

    const col = database.collection(collection);
    const result = await col.updateOne(filter, update);

    // await client.close();
    return result;
}



// async function runUpdateQuery(collection, filter, update) {
//     // await client.connect();
//     // const database = client.db("libraryDB");

//     const col = database.collection(collection);

//     // --- DEBUGGING ADDITION ---
//     console.log(`[DB UPDATE] Attempting to update collection: ${collection}`);
//     console.log(`[DB UPDATE] Filter:`, filter);
//     console.log(`[DB UPDATE] Update Object:`, update);
//     // --------------------------

//     const result = await col.updateOne(filter, update);

//     // await client.close();
//     return result;
// }

async function runDeleteQuery(collection, filter) {
    // await client.connect();
    // const database = client.db("libraryDB");

    const col = database.collection(collection);
    const result = await col.deleteOne(filter);

    // await client.close();
    return result;
}


module.exports = {
    runFindQuery,
    runInsertQuery,
    runUpdateQuery,
    runDeleteQuery,
    dbConnect,
};
