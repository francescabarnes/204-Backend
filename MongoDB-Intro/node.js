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

const collection = client.db("test").collection("students");

collection.insertOne(
  {
    name: "John Doe",
    age: 25,
    grade: "A",
  },
  (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(
      `Inserted ${result.insertedCount} documents into the collection`
    );
  }
);

collection.find({}).toArray((err, docs) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Found ${docs.length} documents in the collection`);
  console.log(docs);
});

const postsCollection = client.db("myapp").collection("posts");
postsCollection.createIndex({ user_id: 1, created_at: -1 });

const commentsCollection = client.db("myapp").collection("comments");
commentsCollection.createIndex({ post_id: 1, created_at: 1 });
