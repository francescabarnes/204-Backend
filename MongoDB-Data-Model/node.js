const MongoClient = require("mongodb").MongoClient;
//import .env variables
require("dotenv").config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });

const DbConnect = async () => {
  await client.connect();
  console.log("connected to DB");
};

DbConnect();
